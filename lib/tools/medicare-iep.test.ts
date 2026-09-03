import { describe, expect, it } from "vitest";
import {
  formatMonthYear,
  getInitialEnrollmentPeriod,
  getSixtyFifthBirthday,
} from "@/lib/tools/medicare-iep";

function monthKeys(period: ReturnType<typeof getInitialEnrollmentPeriod>) {
  return period.months.map((item) => `${item.year}-${String(item.month).padStart(2, "0")}`);
}

describe("Medicare Initial Enrollment Period", () => {
  it("uses seven months around a mid-month birthday", () => {
    const period = getInitialEnrollmentPeriod({ year: 1961, month: 6, day: 15 });
    expect(getSixtyFifthBirthday({ year: 1961, month: 6, day: 15 })).toEqual({
      year: 2026,
      month: 6,
      day: 15,
    });
    expect(period.isFirstOfMonthBirthday).toBe(false);
    expect(period.months).toHaveLength(7);
    expect(monthKeys(period)).toEqual([
      "2026-03",
      "2026-04",
      "2026-05",
      "2026-06",
      "2026-07",
      "2026-08",
      "2026-09",
    ]);
    expect(period.months[3]?.kind).toBe("birthday");
    expect(formatMonthYear(period.months[3])).toBe("June 2026");
  });

  it("starts and ends a month earlier when the birthday is the 1st", () => {
    const period = getInitialEnrollmentPeriod({ year: 1961, month: 6, day: 1 });
    expect(period.isFirstOfMonthBirthday).toBe(true);
    expect(period.sixtyFifthBirthday).toEqual({ year: 2026, month: 6, day: 1 });
    expect(monthKeys(period)).toEqual([
      "2026-02",
      "2026-03",
      "2026-04",
      "2026-05",
      "2026-06",
      "2026-07",
      "2026-08",
    ]);
    expect(period.months.find((item) => item.kind === "birthday")).toMatchObject({
      year: 2026,
      month: 6,
    });
  });

  it("wraps the year for a January birthday", () => {
    const midMonth = getInitialEnrollmentPeriod({ year: 1961, month: 1, day: 15 });
    expect(monthKeys(midMonth)).toEqual([
      "2025-10",
      "2025-11",
      "2025-12",
      "2026-01",
      "2026-02",
      "2026-03",
      "2026-04",
    ]);

    const firstOfMonth = getInitialEnrollmentPeriod({ year: 1961, month: 1, day: 1 });
    expect(firstOfMonth.isFirstOfMonthBirthday).toBe(true);
    expect(monthKeys(firstOfMonth)).toEqual([
      "2025-09",
      "2025-10",
      "2025-11",
      "2025-12",
      "2026-01",
      "2026-02",
      "2026-03",
    ]);
  });

  it("wraps the year for a November birthday", () => {
    const midMonth = getInitialEnrollmentPeriod({ year: 1961, month: 11, day: 20 });
    expect(monthKeys(midMonth)).toEqual([
      "2026-08",
      "2026-09",
      "2026-10",
      "2026-11",
      "2026-12",
      "2027-01",
      "2027-02",
    ]);

    const firstOfMonth = getInitialEnrollmentPeriod({ year: 1961, month: 11, day: 1 });
    expect(monthKeys(firstOfMonth)).toEqual([
      "2026-07",
      "2026-08",
      "2026-09",
      "2026-10",
      "2026-11",
      "2026-12",
      "2027-01",
    ]);
  });
});
