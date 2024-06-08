import styles from "./Dropdown.module.scss";
import {
  ComponentPropsWithoutRef,
  MouseEvent,
  memo,
  useEffect,
  useId,
} from "react";
import cn from "classnames";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setActiveDropdown } from "../../../store/slices/uiSlice";
import Icon from "../Icon/Icon";
import { DropdownItem } from "../../../models/data";

interface DropdownProps
  extends Omit<ComponentPropsWithoutRef<"button">, "onChange"> {
  onChange?: (item: DropdownItem | null) => void;
  list?: DropdownItem[];
  selected?: DropdownItem["key"] | DropdownItem["value"] | null | undefined;
  title?: string;
  customList?: JSX.Element;
  children?: undefined;
}

type Evt = MouseEvent<HTMLButtonElement | HTMLAnchorElement>;

export const Dropdown = memo(
  ({
    className,
    onChange,
    list,
    selected,
    title,
    customList,
    disabled,
  }: DropdownProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const id = useId();
    const isDropActive =
      useAppSelector((state) => state.ui.activeDropdown) === id;

    const open = (e: Evt) => {
      e.stopPropagation();
      dispatch(setActiveDropdown(id));
    };
    const close = () => {
      dispatch(setActiveDropdown());
    };
    const toggle = (e: Evt) => {
      isDropActive ? close() : open(e);
    };
    const select = (key: DropdownItem["key"]) => {
      const selected = list?.find((item) => item.key === key);
      if (onChange) onChange(selected || null);
    };

    useEffect(() => {
      window.addEventListener("click", close);
      return () => window.removeEventListener("click", close);
    }, []); // eslint-disable-line

    useEffect(() => {
      if (disabled && isDropActive) close();
    }, [disabled]); // eslint-disable-line

    return (
      <div className={cn(className, styles._, isDropActive && styles.active)}>
        <button className={styles.button} onClick={toggle} disabled={disabled}>
          <span>{title}</span>
          <Icon className={styles.icon} name="chevron" />
        </button>
        <div className={styles.drop}>
          {customList || (
            <div className={styles.list}>
              {list?.map((item) => {
                const isActive =
                  item.key === selected || item.value === selected;
                return (
                  <button
                    type="button"
                    className={cn(styles.option, isActive && styles.active)}
                    onClick={() => select(item.key)}
                    tabIndex={isActive ? -1 : undefined}
                    key={String(item.key)}
                  >
                    {item.value}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
);
