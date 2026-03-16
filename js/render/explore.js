import { phases } from "../data/phases.js";
import { mindsets } from "../data/mindsets.js";
import {
  detailDescription,
  detailTitle,
  doList,
  dontList,
  focusChip,
  focusValues,
  mindsetPanel,
  ownOutcomePanel,
  phaseBadge,
  phaseStatement,
  phaseSteps,
  phaseTitle,
  stepperDots,
  stepperFill,
  wheelButtons
} from "../core/dom.js";
import { state } from "../core/state.js";
import { createListItems, getCurrentPhase, getMindset } from "../core/helpers.js";

export function renderHeader() {
  const phase = getCurrentPhase();
  const mindset = getMindset(state.selectedMindset);

  phaseTitle.textContent = phase.name;
  phaseBadge.textContent = phase.badge;
  detailTitle.textContent = mindset.label;
  detailDescription.textContent = mindset.description.replaceAll("`", "");
  focusChip.textContent = mindset.focus;
}

export function renderStepper() {
  stepperDots.forEach((dot) => {
    const id = Number(dot.dataset.phase);
    dot.classList.toggle("is-active", id === state.selectedPhase);
    dot.classList.toggle("is-reached", id < state.selectedPhase);
  });
  if (stepperFill) {
    stepperFill.style.width = `${((state.selectedPhase - 1) / 4) * 100}%`;
  }
}

export function renderWheelState() {
  wheelButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.wheelMindset === state.selectedMindset);
  });
}

export function renderPhaseSteps(onPhaseSelect) {
  phaseSteps.innerHTML = "";

  phases.forEach((phase) => {
    const step = document.createElement("button");
    step.type = "button";
    step.className = "phase-step";
    if (phase.id === state.selectedPhase) step.classList.add("is-active");

    step.innerHTML = `
      <strong>${phase.name}</strong>
      <span>${phase.short}</span>
    `;

    step.addEventListener("click", () => {
      onPhaseSelect(phase.id);
    });

    phaseSteps.appendChild(step);
  });
}

export function renderOwnOutcomePanel() {
  const phase = getCurrentPhase();
  const mindset = getMindset(state.selectedMindset);
  const outerMindsets = mindsets.filter((entry) => entry.id !== "own");

  if (mindset.id !== "own") {
    ownOutcomePanel.classList.add("hidden");
    ownOutcomePanel.innerHTML = "";
    return;
  }

  ownOutcomePanel.classList.remove("hidden");
  ownOutcomePanel.innerHTML = `
    <p class="card-label">What ${phase.name.toLowerCase()} looks like around the center</p>
    <div class="own-outcome-grid">
      ${outerMindsets
        .map((entry) => {
          const details = entry.phases[phase.id];
          return `
            <article class="outcome-card" style="--card-accent: ${entry.color}">
              <h3>${entry.label}</h3>
              <p>${details.statement}</p>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

export function renderMindsetPanel() {
  const mindset = getMindset(state.selectedMindset);
  const phase = getCurrentPhase();

  if (mindset.id === "own") {
    mindsetPanel.classList.add("hidden");
    return;
  }

  const details = mindset.phases[phase.id];
  mindsetPanel.classList.remove("hidden");
  phaseStatement.textContent = details.statement;
  focusValues.textContent = mindset.focus.replace("PACE values: ", "");
  doList.innerHTML = createListItems(details.do);
  dontList.innerHTML = createListItems(details.dont);
}
