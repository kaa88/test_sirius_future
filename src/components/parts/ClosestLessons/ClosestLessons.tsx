import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./ClosestLessons.module.scss";

import { closestLessons } from "../../../api/other";

import { Button } from "../../ui/Button/Button";
import Icon from "../../ui/Icon/Icon";

interface ClosestLessonsProps extends ComponentPropsWithoutRef<"div"> {}

export const ClosestLessons = ({
  className,
  ...props
}: ClosestLessonsProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <p className={styles.title}>Ближайшие уроки</p>
      <div className={styles.list}>
        {closestLessons.map((item) => {
          const [d, m] = item.date.split(" ");
          return (
            <div className={styles.item} key={item.id}>
              <div className={styles.itemDate}>
                <span>{d}</span>
                <span>{m}</span>
              </div>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemTime}>{item.time}</span>
              <span className={styles.itemTeacher}>
                <Icon name="person" />
                <span>{item.teacher}</span>
              </span>
              <div className={styles.buttons}>
                <Button variant="light" size="small" disabled={item.disabled}>
                  Button
                </Button>
                <Button size="small">Button</Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.buttonWrapper}>
        <Button className={styles.mainButton}>Button</Button>
      </div>
    </div>
  );
};
