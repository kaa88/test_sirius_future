import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./SchedulePage.module.scss";

import { Button } from "../../ui/Button/Button";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import { Calendar } from "../../parts/calendar/Calendar/Calendar";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSelectedSubject } from "../../../store/slices/scheduleSlice";

interface SchedulePageProps extends ComponentPropsWithoutRef<"div"> {}

export const SchedulePage = ({
  className,
  children,
  ...props
}: SchedulePageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { subjects, selectedSubject } = useAppSelector(
    (state) => state.schedule
  );

  return (
    <div className={cn([className, styles._])} {...props}>
      <div className={styles.header}>
        <div className={styles.drop}>
          <Dropdown
            onChange={(item) => dispatch(setSelectedSubject(item))}
            list={subjects}
            selected={selectedSubject?.key}
            title={selectedSubject?.value || "Выбрать предмет"}
          />
        </div>
        <Button className={styles.headerButton}>Изменить расписание</Button>
      </div>

      <div className={styles.calendar}>
        <Calendar />
      </div>
    </div>
  );
};
