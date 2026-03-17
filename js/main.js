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
  if (step.state.compareMode) {
    state.compareMode = step.state.compareMode;
  }
  render();
}

document.getElementById("journey-start").addEventListener("click", () => {
  state.journeyActive = true;
  state.journeyStep = 0;
  applyJourneyStep();
});

document.getElementById("journey-next").addEventListener("click", () => {
  if (state.journeyStep >= journeySteps.length - 1) {
    state.journeyActive = false;
    render();
    return;
  }
  state.journeyStep++;
  applyJourneyStep();
});

document.getElementById("journey-back").addEventListener("click", () => {
  if (state.journeyStep <= 0) return;
  state.journeyStep--;
  applyJourneyStep();
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
