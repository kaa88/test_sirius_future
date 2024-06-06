import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./ErrorPage.module.scss";

interface ErrorPageProps extends ComponentPropsWithoutRef<"div"> {}

export const ErrorPage = ({
  className,
  children,
  ...props
}: ErrorPageProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      {children || <p className={styles.text}>404</p>}
    </div>
  );
};
