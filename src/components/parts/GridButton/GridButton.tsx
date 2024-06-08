import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./GridButton.module.scss";
import Icon from "../../ui/Icon/Icon";
import { Link } from "react-router-dom";

interface GridButtonProps extends ComponentPropsWithoutRef<"a"> {
  title: string;
  icon: string;
  href: string;
}

export const GridButton = ({
  className,
  title,
  icon,
  href,
  ...props
}: GridButtonProps): JSX.Element => {
  return (
    <Link className={cn([className, styles._])} to={href} {...props}>
      <span className={styles.title}>{title}</span>
      <span className={styles.icon}>
        <Icon name={icon} />
      </span>
    </Link>
  );
};
