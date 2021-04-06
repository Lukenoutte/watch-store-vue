import { formatValue, subtotalValue } from "./index";

describe("Helpers", () => {
  test("formatValue 1", () => {
    expect(formatValue(60.9)).toBe("R$ 60.90");
  });

  test("formatValue 2", () => {
    expect(formatValue(100)).toBe("R$ 100.00");
  });

  test("subtotalValue 1", () => {
    expect(subtotalValue(60.9, 2)).toBe("121.80");
  });

  test("subtotalValue 2", () => {
    expect(subtotalValue(87.9, 3)).toBe("263.70");
  });
});
