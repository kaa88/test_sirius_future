import { ComponentPropsWithoutRef } from "react";
import dayjs from "dayjs";
import cn from "classnames";
import styles from "./CalendarBoard.module.scss";

import {
  fillDateList,
  getTimeFromDate,
  getTodayLessons,
  getWhen,
} from "./CalendarBoard.script";
import { days, monthsCountable } from "../dayjs";
import { useAppSelector } from "../../../../store/hooks";
import Icon from "../../../ui/Icon/Icon";

interface CalendarBoardProps extends ComponentPropsWithoutRef<"div"> {}

export const CalendarBoard = ({
  className,
  ...props
}: CalendarBoardProps): JSX.Element => {
  const dateStr = useAppSelector((state) => state.schedule.selectedMonth);
  const dates = fillDateList(dateStr);
  dates.length = 7 * 5;
  const currentMonth = dayjs(dateStr).month();

  return (
    <div className={cn([className, styles._])} {...props}>
      <div className={styles.days}>
        {days.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>

      <div className={styles.dates}>
        {dates.map((date, index) => {
          const isCurrentMonth = dayjs(date).month() === currentMonth;
          const d = dayjs(date).date();
          const m = dayjs(date).month();
          const when = getWhen(date);
          const isWorkDay = dayjs(date).day() > 0 && dayjs(date).day() < 6;
          return (
            <div
              className={cn(
                styles.cell,
                !isCurrentMonth && styles.notCurrentMonth,
                styles[when],
                !isWorkDay && styles.dayoff
              )}
              key={index}
            >
              <div className={styles.cellHeader}>
                {d === 1 ? `${d} ${monthsCountable[m].toLowerCase()}` : d}
              </div>

              <div className={styles.cellContent}>
                {getTodayLessons(date).map((lesson) => (
                  <div
                    className={cn(
                      styles.lesson,
                      lesson.isDone && styles.done,
                      lesson.isMarked && styles.marked,
                      lesson.isPay && styles.pay
                    )}
                    key={lesson.id}
                  >
                    <div className={styles.lessonInner}>
                      <span className={styles.lessonTime}>
                        {getTimeFromDate(lesson.dateFrom, lesson.dateTo)}
                      </span>
                      <span className={styles.lessonName}>
                        {lesson.subject}
                      </span>
                      {lesson.isPay && (
                        <Icon className={styles.walletIcon} name="wallet" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
