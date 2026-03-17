import { compareModeButtons, modeButtons, wheelButtons } from "./core/dom.js";
import { state } from "./core/state.js";
import { journeySteps } from "./data/journey.js";
import { renderCompareView } from "./render/compare.js";
import {
  renderHeader,
  renderMindsetHeader,
  renderMindsetPanel,
  renderOwnOutcomePanel,
  renderPhaseSteps,
  renderWheelState
} from "./render/explore.js";
import { renderJourney } from "./render/journey.js";
import { renderMode } from "./render/mode.js";

function render() {
  renderHeader();
  renderMindsetHeader();
  renderWheelState();
  renderPhaseSteps((phaseId) => {
    state.selectedPhase = phaseId;
    render();
  });
  renderOwnOutcomePanel();
  renderMindsetPanel();
  renderCompareView();
  renderMode();
  renderJourney();
}

function renderMindsetsOnly() {
  renderMindsetHeader();
  renderWheelState();
  renderOwnOutcomePanel();
  renderMindsetPanel();
  renderMode();
  renderJourney();
}

// Mode toggle (explore / compare)
modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.modeTarget;
    render();
  });
});

// Compare sub-mode toggle
compareModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.compareMode = button.dataset.compareTarget;
    state.mode = "compare";
    render();
  });
});

// Wheel segment interaction
wheelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedMindset = button.dataset.wheelMindset;
    state.mode = "explore";
    renderMindsetsOnly();
  });

  button.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      state.selectedMindset = button.dataset.wheelMindset;
      state.mode = "explore";
      renderMindsetsOnly();
    }
  });
});

// Guided journey
function applyJourneyStep() {
  const step = journeySteps[state.journeyStep];
  state.mode = step.state.mode;
  state.selectedMindset = step.state.selectedMindset;
  state.selectedPhase = step.state.selectedPhase;
  if ("compareMode" in step.state) {
    state.compareMode = step.state.compareMode;
  }
  render();
}

function goToJourneyStep(stepIndex) {
  state.journeyStep = stepIndex;
  applyJourneyStep();
  // Scroll journey panel content to top
  const journeyContent = document.querySelector(".journey-content");
  if (journeyContent) {
    journeyContent.scrollTop = 0;
  }
}

function setupJourneyDrag() {
  const panel = document.getElementById("journey-panel");
  const dragHandles = Array.from(document.querySelectorAll("[data-journey-drag-handle='true']"));
  let dragState = null;

  function stopDrag() {
    if (!dragState) return;
    dragState = null;
    panel.classList.remove("is-dragging");
  }

  function onPointerMove(event) {
    if (!dragState) return;

    const maxLeft = Math.max(8, window.innerWidth - panel.offsetWidth - 8);
    const maxTop = Math.max(8, window.innerHeight - panel.offsetHeight - 8);
    const nextLeft = Math.min(Math.max(8, event.clientX - dragState.offsetX), maxLeft);
    const nextTop = Math.min(Math.max(8, event.clientY - dragState.offsetY), maxTop);

    panel.style.left = `${nextLeft}px`;
    panel.style.top = `${nextTop}px`;
    panel.style.right = "auto";
    panel.style.bottom = "auto";
  }

  dragHandles.forEach((handle) => {
    handle.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;

      const rect = panel.getBoundingClientRect();
      dragState = {
        offsetX: event.clientX - rect.left,
        offsetY: event.clientY - rect.top
      };

      panel.classList.add("is-dragging");
      panel.style.left = `${rect.left}px`;
      panel.style.top = `${rect.top}px`;
      panel.style.right = "auto";
      panel.style.bottom = "auto";
      handle.setPointerCapture?.(event.pointerId);
      event.preventDefault();
    });
  });

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", stopDrag);
  window.addEventListener("pointercancel", stopDrag);
  window.addEventListener("resize", () => {
    if (!panel.classList.contains("is-visible")) return;

    const rect = panel.getBoundingClientRect();
    if (rect.right <= window.innerWidth && rect.bottom <= window.innerHeight) return;

    const nextLeft = Math.min(Math.max(8, rect.left), Math.max(8, window.innerWidth - panel.offsetWidth - 8));
    const nextTop = Math.min(Math.max(8, rect.top), Math.max(8, window.innerHeight - panel.offsetHeight - 8));
    panel.style.left = `${nextLeft}px`;
    panel.style.top = `${nextTop}px`;
    panel.style.right = "auto";
    panel.style.bottom = "auto";
  });
}

setupJourneyDrag();

document.getElementById("journey-start").addEventListener("click", () => {
  state.journeyActive = true;
  goToJourneyStep(0);
});

document.getElementById("journey-next").addEventListener("click", () => {
  if (state.journeyStep >= journeySteps.length - 1) {
    state.journeyActive = false;
    render();
    return;
  }
  goToJourneyStep(state.journeyStep + 1);
});

document.getElementById("journey-back").addEventListener("click", () => {
  if (state.journeyStep <= 0) return;
  goToJourneyStep(state.journeyStep - 1);
});

document.getElementById("journey-close").addEventListener("click", () => {
  state.journeyActive = false;
  render();
});

// Boot
try {
  render();
  window.__appReady = true;
} catch (err) {
  console.error("Render failed:", err);
  const el = document.createElement("div");
  el.style.cssText = "position:fixed;top:0;left:0;right:0;padding:14px 20px;background:#d32f2f;color:#fff;font:600 14px/1.4 Inter,sans-serif;z-index:9999;text-align:center";
  el.textContent = "Render error: " + err.message;
  document.body.prepend(el);
}
