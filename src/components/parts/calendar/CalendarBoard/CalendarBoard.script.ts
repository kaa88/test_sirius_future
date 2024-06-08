import dayjs from "dayjs";
import { dayFormat, timeFormat } from "../dayjs";
import { lessons } from "../../../../api/schedule";
import { ILesson } from "../../../../models/schedule";

export const fillDateList = (dateString: string): string[] => {
  const currentMonth = dayjs(dateString);
  const currentMonthStartIndex = currentMonth.date(0).day();
  const prevMonthStartDate = currentMonth
    .date(1)
    .subtract(currentMonthStartIndex, "day");
  const maxArrayLength = 7 * 6;

  const arr = [];
  for (let i = 0; i < maxArrayLength; i++) {
    arr[i] = dayjs(prevMonthStartDate).add(i, "day").format(dayFormat);
  }
  return arr;
};

export const getTodayLessons = (date: string): ILesson[] => {
  return lessons.filter((l) => dayjs(l.dateFrom).isSame(dayjs(date), "day"));
};

export const getTimeFromDate = (
  dateFrom: string,
  dateTo: string | undefined
): string => {
  let time = dayjs(dateFrom).format(timeFormat);
  if (dateTo) time += "-" + dayjs(dateTo).format(timeFormat);
  return time;
};

export const getWhen = (date: string): "now" | "before" | "after" => {
  let now = dayjs();
  if (dayjs(date).isBefore(now, "day")) return "before";
  if (dayjs(date).isAfter(now, "day")) return "after";
  return "now";
};
