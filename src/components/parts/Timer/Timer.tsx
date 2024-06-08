import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./Timer.module.scss";
import { Button } from "../../ui/Button/Button";

interface TimerProps extends ComponentPropsWithoutRef<"div"> {}

export const Timer = ({ className, ...props }: TimerProps): JSX.Element => {
  const time = [6, 12, 24];

  return (
    <div className={cn([className, styles._])} {...props}>
      <p className={styles.title}>Следующее занятие начнется через:</p>
      <p className={styles.time}>
        <span className={styles.number}>{time[0]}</span>д
        <span className={styles.number}>{time[1]}</span>ч
        <span className={styles.number}>{time[2]}</span>
        мин
      </p>
      <Button className={styles.button} variant="dashed" size="large">
        Button
      </Button>
    </div>
  );
};
