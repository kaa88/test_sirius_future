import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./MainPage.module.scss";

import { MainPromo } from "../../parts/promos/MainPromo/MainPromo";
import { Timer } from "../../parts/Timer/Timer";
import { GridButton } from "../../parts/GridButton/GridButton";
import { Balance } from "../../parts/Balance/Balance";
import { ClosestLessons } from "../../parts/ClosestLessons/ClosestLessons";

interface MainPageProps extends ComponentPropsWithoutRef<"div"> {}

export const MainPage = ({
  className,
  children,
  ...props
}: MainPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <MainPromo className={styles.promo} />
      <Timer className={styles.nextLesson} />
      <GridButton
        className={styles.homeworkBtn}
        title="Домашние задания"
        icon="homework"
        href="/homework"
      />
      <GridButton
        className={styles.reportskBtn}
        title="Отчеты от учителей"
        icon="report"
        href="/report"
      />
      <Balance className={styles.balance} />
      <ClosestLessons className={styles.closestLessons} />
    </div>
  );
};
