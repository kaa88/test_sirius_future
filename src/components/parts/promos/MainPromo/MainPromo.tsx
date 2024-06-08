import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./MainPromo.module.scss";

import image from "../../../../assets/img/SF_2 1.png";

interface MainPromoProps extends ComponentPropsWithoutRef<"button"> {}

export const MainPromo = ({
  className,
  children,
  ...props
}: MainPromoProps): JSX.Element => {
  return (
    <button className={cn([className, styles._])} {...props}>
      <span className={styles.title}>
        До 31 декабря любой курс со скидкой 20%
      </span>
      <span className={styles.text}>
        До конца года у вас есть уникальная возможность воспользоваться нашей
        новогодней скидкой 20% на любой курс!
      </span>
      <img className={styles.image} src={image} alt="" />
    </button>
  );
};
