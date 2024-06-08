import { ComponentPropsWithoutRef, memo } from "react";
import cn from "classnames";
import styles from "./Calendar.module.scss";
import { CalendarBoard } from "../CalendarBoard/CalendarBoard";
import { MonthSelector } from "../MonthSelector/MonthSelector";
import { Button } from "../../../ui/Button/Button";
import Icon from "../../../ui/Icon/Icon";
import { useAppDispatch } from "../../../../store/hooks";
import { setSelectedMonth } from "../../../../store/slices/scheduleSlice";
import dayjs from "dayjs";
import { monthFormat } from "../dayjs";

interface CalendarProps extends ComponentPropsWithoutRef<"div"> {}

export const Calendar = memo(
  ({ className, ...props }: CalendarProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const setToday = () => {
      dispatch(setSelectedMonth(dayjs().format(monthFormat)));
    };

    return (
      <div className={cn([className, styles._])} {...props}>
        <div className={styles.header}>
          <MonthSelector className={styles.monthSelector} />
          <Button
            className={styles.todayButton}
            variant="light"
            size="small"
            onClick={setToday}
          >
            Сегодня
          </Button>
          <button className={styles.questionButton}>
            <Icon name="question" />
          </button>
        </div>
        <CalendarBoard className={styles.board} />
      </div>
    );
  }
);
