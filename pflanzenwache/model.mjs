export const DRY_THRESHOLD = 30;
export const STALE_AFTER_MINUTES = 15;
const MINUTE_MS = 60_000;

const plants = ["Basilikum", "Minze", "Rosmarin"];
const scenarios = {
  standard: [[52, 2], [24, 3], [19, 20]],
  outage: [[52, 2], null, [19, 20]],
  recovery: [[52, 2], [24, 1], [44, 1]],
};

export function readingsFor(scenario, now) {
  return scenarios[scenario].map((sample, index) => ({
    name: plants[index],
    reading: sample && { moisture: sample[0], measuredAt: now - sample[1] * MINUTE_MS },
  }));
}

export function assess(reading, now) {
  const { moisture, measuredAt } = reading ?? {};
  const age = (now - measuredAt) / MINUTE_MS;
  if (!Number.isFinite(moisture) || moisture < 0 || moisture > 100 ||
      !Number.isFinite(measuredAt) || !Number.isFinite(age) || age < 0) {
    return { state: "check", moisture: null, age: null };
  }
  if (age >= STALE_AFTER_MINUTES) return { state: "check", moisture, age };
  return { state: moisture < DRY_THRESHOLD ? "water" : "ok", moisture, age };
}
