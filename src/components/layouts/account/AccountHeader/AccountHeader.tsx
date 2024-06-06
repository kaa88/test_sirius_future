import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./AccountHeader.module.scss";

interface AccountHeaderProps extends ComponentPropsWithoutRef<"div"> {}

export const AccountHeader = ({
  className,
  children,
  ...props
}: AccountHeaderProps): JSX.Element => {
  return (
    <header className={cn([className, styles._])} {...props}>
      header
    </header>
  );
};
