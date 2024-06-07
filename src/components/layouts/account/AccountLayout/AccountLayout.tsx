import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./AccountLayout.module.scss";
import { AccountHeader } from "../AccountHeader/AccountHeader";
import { AccountSidebar } from "../AccountSidebar/AccountSidebar";
import { Outlet } from "react-router";

interface AccountLayoutProps extends ComponentPropsWithoutRef<"div"> {}

export const AccountLayout = ({
  className,
  children,
  ...props
}: AccountLayoutProps): JSX.Element => {
  return (
    <div className={cn([className, styles._])} {...props}>
      <AccountHeader className={styles.header} />
      {/* <AccountSidebar className={styles.sidebar} /> */}
      <main className={styles.main}>
        <div className={styles.content}>{children || <Outlet />}</div>
      </main>
    </div>
  );
};
