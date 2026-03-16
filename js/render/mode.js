import { compareModeButtons, compareView, exploreView, modeButtons } from "../core/dom.js";
import { state } from "../core/state.js";

export function renderMode() {
  const isExplore = state.mode === "explore";
  exploreView.classList.toggle("is-visible", isExplore);
  compareView.classList.toggle("is-visible", !isExplore);

  modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.modeTarget === state.mode);
  });

  compareModeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.compareTarget === state.compareMode);
  });
}
