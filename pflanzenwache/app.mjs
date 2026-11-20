import { assess, readingsFor } from "./model.mjs";

const scenario = document.querySelector("#scenario");
const cards = document.querySelector("#plants");
const template = document.querySelector("#plant-card");
const summary = document.querySelector("#summary");
const messages = {
  ok: ["In Ordnung", "Heute ist kein Gießen nötig."],
  water: ["Gießen", "Gieße diese Pflanze."],
  check: ["Sensor prüfen", "Prüfe den Sensor oder die Erde vor dem Gießen."],
};

function render() {
  const now = Date.now();
  const counts = { ok: 0, water: 0, check: 0 };
  const items = readingsFor(scenario.value, now).map(({ name, reading }) => {
    const { state, moisture, age } = assess(reading, now);
    const [label, action] = messages[state];
    counts[state]++;
    const card = template.content.firstElementChild.cloneNode(true);
    card.dataset.state = state;
    card.querySelector("h3").textContent = name;
    card.querySelector(".status").textContent = label;
    card.querySelector(".measure").textContent = moisture === null ? "—" : moisture + " %";
    card.querySelector(".age").textContent = age === null
      ? "Keine gültige Messung"
      : "Bodenfeuchte · vor " + Math.floor(age) + " Min.";
    card.querySelector(".action").textContent = action;
    return card;
  });
  cards.replaceChildren(...items);
  summary.textContent = counts.water + " gießen · " + counts.check + " Sensor prüfen · " + counts.ok + " in Ordnung";
}

scenario.addEventListener("change", render);
document.querySelector("#reset").addEventListener("click", () => {
  scenario.value = "standard";
  render();
});
render();
