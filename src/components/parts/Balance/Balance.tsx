import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./Balance.module.scss";

import { balance } from "../../../api/other";

import { Button } from "../../ui/Button/Button";

interface BalanceProps extends ComponentPropsWithoutRef<"div"> {}

export const Balance = ({ className, ...props }: BalanceProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <p className={styles.title}>Баланс занятий</p>
      <div className={styles.list}>
        {balance.map((item) => (
          <div className={styles.item} key={item.id}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemCount}>{item.count}</span>
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <Button className={styles.button}>Button</Button>
      </div>
    </div>
  );
};
