import { phases } from "../data/phases.js";
import { mindsets } from "../data/mindsets.js";
import { state } from "./state.js";

export function getMindset(id) {
  return mindsets.find((mindset) => mindset.id === id);
}

export function getCurrentPhase() {
  return phases.find((phase) => phase.id === state.selectedPhase);
}

export function createListItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

export function getPhaseAccent(phaseId) {
  const accents = { 1: "#6f8da8", 2: "#0b86cf", 3: "#2aaa41", 4: "#ff8a13", 5: "#0d2f6e" };
  return accents[phaseId] || "#0b86cf";
}

export function getOwnOutcomePhaseSummary(phaseId) {
  const outerMindsets = mindsets.filter((mindset) => mindset.id !== "own");
  const snippets = outerMindsets.map((mindset) => mindset.phases[phaseId].statement);
  return `Owning the outcome at this phase means combining the model's outer mindsets: ${snippets.join(" ")}`;
}
