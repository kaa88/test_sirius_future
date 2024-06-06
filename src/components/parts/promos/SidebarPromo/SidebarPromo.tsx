import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./SidebarPromo.module.scss";

import image from "../../../../assets/img/present.svg";
import { Button } from "../../../ui/Button/Button";

interface SidebarPromoProps extends ComponentPropsWithoutRef<"div"> {}

export const SidebarPromo = ({
  className,
  ...props
}: SidebarPromoProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <p className={styles.title}>Учитесь бесплатно</p>
      <p className={styles.text}>
        Приводите друзей с детьми заниматься в Sirius Future и получайте
        подарки!
      </p>
      <Button className={styles.button} variant="green" size="small">
        Узнать
      </Button>
      <img className={styles.image} src={image} alt="" />
    </div>
  );
};
