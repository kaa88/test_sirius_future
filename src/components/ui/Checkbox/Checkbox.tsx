import styles from "./Checkbox.module.scss";
import { ComponentPropsWithoutRef, forwardRef, memo, useId } from "react";
import cn from "classnames";

import Icon from "../Icon/Icon";

interface CheckboxProps extends ComponentPropsWithoutRef<"input"> {
  clickableLabel?: boolean;
  state?: "default" | "success" | "error";
  disabled?: boolean;
}

export const Checkbox = memo(
  forwardRef<HTMLInputElement, CheckboxProps>(
    (
      { clickableLabel, state, disabled, className, children, ...props },
      ref
    ): JSX.Element => {
      const elemId = useId();

      return (
        <div
          className={cn(
            className,
            styles.wrapper,
            styles.checkbox,
            styles[state || ""],
            disabled && styles.disabled
          )}
        >
          <div className={styles.box}>
            <input
              id={clickableLabel ? elemId : undefined}
              type="checkbox"
              ref={ref}
              disabled={disabled}
              {...props}
            />
            <div className={styles.customCheckbox}>
              <Icon className={styles.icon} name="check" />
            </div>
          </div>

          <label htmlFor={elemId}>{children}</label>
        </div>
      );
    }
  )
);
