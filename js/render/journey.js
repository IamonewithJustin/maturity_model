import { journeySteps } from "../data/journey.js";
import { state } from "../core/state.js";

const TOUR_HIGHLIGHT_CLASS = "tour-highlight";

function clearTourFocus() {
  document.querySelectorAll(".is-tour-focus").forEach((element) => {
    element.classList.remove("is-tour-focus");
  });
  document.querySelectorAll(`.${TOUR_HIGHLIGHT_CLASS}`).forEach((element) => {
    element.classList.remove(TOUR_HIGHLIGHT_CLASS);
  });
}

function getVisibleTourTarget(targetName) {
  const candidates = Array.from(document.querySelectorAll(`[data-tour-target~="${targetName}"]`));
  return candidates.find((element) => {
    const style = window.getComputedStyle(element);
    return style.display !== "none" && style.visibility !== "hidden";
  });
}

function applyTourFocus(step, panel) {
  clearTourFocus();
  const isFirstStep = state.journeyStep === 0;
  const isLastStep = state.journeyStep === journeySteps.length - 1;
  const emphasize = !isFirstStep && !isLastStep;

  const targets = Array.isArray(step.target) ? step.target : step.target ? [step.target] : [];
  const elements = targets
    .map((targetName) => getVisibleTourTarget(targetName))
    .filter(Boolean);

  if (emphasize) {
    elements.forEach((element) => {
      element.classList.add("is-tour-focus");
    });
    const activePhaseStep = document.querySelector(".phase-step.is-active");
    if (activePhaseStep) activePhaseStep.classList.add(TOUR_HIGHLIGHT_CLASS);
  }

  const phasePanelTarget = elements.find((element) => element.matches("[data-tour-target~='phase-panel']"));
  const firstTarget = phasePanelTarget || elements[0];
  if (!firstTarget) return;

  if (panel.dataset.activeStepId !== step.id) {
    const blockPosition = phasePanelTarget ? "start" : "center";
    firstTarget.scrollIntoView({ behavior: "smooth", block: blockPosition });
  }
}

export function renderJourney() {
  const panel = document.getElementById("journey-panel");

  if (!state.journeyActive) {
    panel.classList.remove("is-visible");
    clearTourFocus();
    delete panel.dataset.activeStepId;
    return;
  }

  panel.classList.add("is-visible");
  const step = journeySteps[state.journeyStep];
  const stepCount = journeySteps.length;
  const chapters = [...new Set(journeySteps.map((entry) => entry.chapter))];
  const chapterIndex = chapters.indexOf(step.chapter) + 1;
  const progressPercent = ((state.journeyStep + 1) / stepCount) * 100;
  const subLabel = document.getElementById("journey-sub-label");
  const whatChanges = document.getElementById("journey-what-changes");
  const reflection = document.getElementById("journey-reflection");

  document.getElementById("journey-chapter").textContent = `Chapter ${chapterIndex} of ${chapters.length} - ${step.chapter}`;
  document.getElementById("journey-title").textContent = step.title;
  document.getElementById("journey-text").textContent = step.text;
  document.getElementById("journey-step-num").textContent = String(state.journeyStep + 1);
  document.getElementById("journey-step-total").textContent = String(stepCount);
  document.getElementById("journey-progress-fill").style.width = `${progressPercent}%`;
  document.getElementById("journey-progress-label").textContent = `${state.journeyStep + 1} of ${stepCount} steps completed`;

  if (step.subLabel) {
    subLabel.hidden = false;
    subLabel.textContent = step.subLabel;
  } else {
    subLabel.hidden = true;
    subLabel.textContent = "";
  }

  if (step.whatChangesNow) {
    whatChanges.hidden = false;
    document.getElementById("journey-what-changes-text").textContent = step.whatChangesNow;
  } else {
    whatChanges.hidden = true;
    document.getElementById("journey-what-changes-text").textContent = "";
  }

  if (step.reflectionPrompt) {
    reflection.hidden = false;
    document.getElementById("journey-reflection-text").textContent = step.reflectionPrompt;
  } else {
    reflection.hidden = true;
    document.getElementById("journey-reflection-text").textContent = "";
  }

  const backBtn = document.getElementById("journey-back");
  backBtn.style.visibility = state.journeyStep === 0 ? "hidden" : "visible";

  const nextBtn = document.getElementById("journey-next");
  nextBtn.textContent = state.journeyStep === journeySteps.length - 1 ? "Finish" : "Next";

  document.getElementById("journey-dots").innerHTML = journeySteps
    .map((_, i) => {
      let cls = "journey-dot";
      if (i === state.journeyStep) cls += " is-active";
      else if (i < state.journeyStep) cls += " is-completed";
      return `<span class="${cls}"></span>`;
    })
    .join("");

  applyTourFocus(step, panel);
  panel.dataset.activeStepId = step.id;
}
