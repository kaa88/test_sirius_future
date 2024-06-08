import { ComponentPropsWithoutRef } from "react";
import dayjs from "dayjs";
import cn from "classnames";
import styles from "./MonthSelector.module.scss";

import { monthFormat, months } from "../dayjs";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setSelectedMonth } from "../../../../store/slices/scheduleSlice";

import Icon from "../../../ui/Icon/Icon";

interface MonthSelectorProps extends ComponentPropsWithoutRef<"div"> {}

export const MonthSelector = ({
  className,
  children,
  ...props
}: MonthSelectorProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const date = dayjs(useAppSelector((state) => state.schedule.selectedMonth));
  const monthIndex = date.month();
  const year = date.year();

  const prev = () => {
    dispatch(setSelectedMonth(date.subtract(1, "month").format(monthFormat)));
  };
  const next = () => {
    dispatch(setSelectedMonth(date.add(1, "month").format(monthFormat)));
  };

  return (
    <div className={cn([className, styles._])} {...props}>
      <button className={styles.prevBtn} onClick={prev}>
        <Icon name="arrow" />
      </button>
      <div className={styles.text}>{`${months[monthIndex]} ${year}`}</div>
      <button className={styles.nextBtn} onClick={next}>
        <Icon name="arrow" />
      </button>
    </div>
  );
};
