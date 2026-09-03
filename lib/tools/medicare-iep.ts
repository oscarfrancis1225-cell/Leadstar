export type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

export type YearMonth = {
  year: number;
  month: number;
};

export type IepMonth = YearMonth & {
  kind: "before" | "birthday" | "after";
};

export type InitialEnrollmentPeriod = {
  sixtyFifthBirthday: CalendarDate;
  isFirstOfMonthBirthday: boolean;
  months: IepMonth[];
  start: YearMonth;
  end: YearMonth;
};

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function daysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export function clampCalendarDate(date: CalendarDate): CalendarDate {
  const year = Math.trunc(date.year);
  const month = Math.min(12, Math.max(1, Math.trunc(date.month)));
  const maxDay = daysInMonth(year, month);
  const day = Math.min(maxDay, Math.max(1, Math.trunc(date.day)));
  return { year, month, day };
}

export function addMonths(yearMonth: YearMonth, delta: number): YearMonth {
  const index = yearMonth.year * 12 + (yearMonth.month - 1) + delta;
  const year = Math.floor(index / 12);
  const month = ((index % 12) + 12) % 12;
  return { year, month: month + 1 };
}

export function getSixtyFifthBirthday(dob: CalendarDate): CalendarDate {
  const birth = clampCalendarDate(dob);
  return clampCalendarDate({
    year: birth.year + 65,
    month: birth.month,
    day: birth.day,
  });
}

export function formatMonthYear(yearMonth: YearMonth) {
  const name = MONTH_NAMES[yearMonth.month - 1] ?? "Unknown";
  return `${name} ${yearMonth.year}`;
}

export function formatCalendarDate(date: CalendarDate) {
  const safe = clampCalendarDate(date);
  const name = MONTH_NAMES[safe.month - 1] ?? "Unknown";
  return `${name} ${safe.day}, ${safe.year}`;
}

/**
 * Medicare Initial Enrollment Period around the 65th birthday.
 * Standard: 3 months before the birthday month, the birthday month,
 * and 3 months after (seven months).
 * If the birthday is on the 1st, the period starts one month earlier
 * and ends one month earlier. See Medicare.gov:
 * https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-can-i-sign-up-for-medicare
 */
export function getInitialEnrollmentPeriod(dob: CalendarDate): InitialEnrollmentPeriod {
  const sixtyFifthBirthday = getSixtyFifthBirthday(dob);
  const isFirstOfMonthBirthday = sixtyFifthBirthday.day === 1;
  const birthdayMonth: YearMonth = {
    year: sixtyFifthBirthday.year,
    month: sixtyFifthBirthday.month,
  };
  const startOffset = isFirstOfMonthBirthday ? -4 : -3;
  const endOffset = isFirstOfMonthBirthday ? 2 : 3;
  const months: IepMonth[] = [];

  for (let offset = startOffset; offset <= endOffset; offset += 1) {
    const yearMonth = addMonths(birthdayMonth, offset);
    let kind: IepMonth["kind"] = "before";
    if (offset === 0) {
      kind = "birthday";
    } else if (offset > 0) {
      kind = "after";
    }
    months.push({ ...yearMonth, kind });
  }

  return {
    sixtyFifthBirthday,
    isFirstOfMonthBirthday,
    months,
    start: months[0],
    end: months[months.length - 1],
  };
}
