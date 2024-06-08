import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./AuthLayout.module.scss";
import { Outlet } from "react-router";

interface AuthLayoutProps extends ComponentPropsWithoutRef<"div"> {}

export const AuthLayout = ({
  className,
  children,
  ...props
}: AuthLayoutProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <div className={styles.content}>{children || <Outlet />}</div>
    </div>
  );
};
