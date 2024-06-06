import styles from "./Button.module.scss";
import { ComponentPropsWithoutRef, memo } from "react";
import cn from "classnames";

import { Link } from "react-router-dom";

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  ComponentPropsWithoutRef<"a"> & {
    variant?: "default" | "dark" | "light" | "green" | "dashed";
    size?: "small" | "large";
    active?: boolean;
  };

export const Button = memo(
  ({
    variant = "default",
    size,
    href,
    className,
    children,
    active,
    disabled,
    ...props
  }: ButtonProps): JSX.Element => {
    const btnProps = {
      className: cn(
        className,
        styles._,
        styles[variant],
        !!size && styles[size],
        active && styles.active,
        disabled && styles.disabled
      ),
      disabled,
      tabIndex: disabled ? -1 : undefined,
      ...props,
    };

    return href ? (
      <Link to={href} {...btnProps}>
        {children}
      </Link>
    ) : (
      <button {...btnProps}>{children}</button>
    );
  }
);
