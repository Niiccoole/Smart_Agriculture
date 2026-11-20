import { test } from "node:test";
import assert from "node:assert/strict";
import { assess, readingsFor } from "./model.mjs";

const now = Date.UTC(2026, 10, 20, 12);
const minute = 60_000;

test("30 % trennt trocken und ausreichend feucht", () => {
  assert.equal(assess({ moisture: 29.9, measuredAt: now }, now).state, "water");
  assert.equal(assess({ moisture: 30, measuredAt: now }, now).state, "ok");
});

test("Ab 15 Minuten wird auch ein trockener Messwert als veraltet behandelt", () => {
  assert.equal(assess({ moisture: 19, measuredAt: now - 15 * minute + 1 }, now).state, "water");
  assert.deepEqual(assess({ moisture: 19, measuredAt: now - 15 * minute }, now), {
    state: "check", moisture: 19, age: 15,
  });
});

test("Fehlende, ungültige und zukünftige Werte sind unverlässlich", () => {
  for (const reading of [null, {}, { moisture: 101, measuredAt: now },
    { moisture: -1, measuredAt: now }, { moisture: "20", measuredAt: now },
    { moisture: NaN, measuredAt: now }, { moisture: 20, measuredAt: now + 1 }]) {
    assert.deepEqual(assess(reading, now), { state: "check", moisture: null, age: null });
  }
});

test("Drei Szenarien zeigen Standard, Ausfall und Erholung", () => {
  const states = (scenario) => readingsFor(scenario, now).map(({ reading }) => assess(reading, now).state);
  assert.deepEqual(states("standard"), ["ok", "water", "check"]);
  assert.deepEqual(states("outage"), ["ok", "check", "check"]);
  assert.deepEqual(states("recovery"), ["ok", "water", "ok"]);
});
