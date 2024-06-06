import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./AccountSidebar.module.scss";

import { AccountMenu } from "../AccountMenu/AccountMenu";
import { SidebarPromo } from "../../../parts/promos/SidebarPromo/SidebarPromo";
import { Logo } from "../../../ui/Logo/Logo";

interface AccountSidebarProps extends ComponentPropsWithoutRef<"div"> {}

export const AccountSidebar = ({
  className,
  ...props
}: AccountSidebarProps): JSX.Element => {
  return (
    <aside className={cn([className, styles._])} {...props}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <div className={styles.menu}>
          <AccountMenu />
        </div>
        <div className={styles.footer}>
          <SidebarPromo />
        </div>
      </div>
    </aside>
  );
};
