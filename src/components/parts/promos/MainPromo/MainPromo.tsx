import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./MainPromo.module.scss";

interface MainPromoProps extends ComponentPropsWithoutRef<"div"> {}

export const MainPromo = ({
  className,
  children,
  ...props
}: MainPromoProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      {children}
    </div>
  );
};
