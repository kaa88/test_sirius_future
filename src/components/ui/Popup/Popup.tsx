import {
  ComponentPropsWithoutRef,
  MouseEvent,
  cloneElement,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import cn from "classnames";
import styles from "./Popup.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setActivePopup } from "../../../store/slices/uiSlice";
import Icon from "../Icon/Icon";

interface PopupProps extends ComponentPropsWithoutRef<"div"> {
  buttonEl: JSX.Element;
  contentEl: JSX.Element;
  wrapperClassName?: string;
}

export const Popup = ({
  className,
  buttonEl,
  contentEl,
  wrapperClassName,
  ...props
}: PopupProps): JSX.Element => {
  const id = useId();
  const dispatch = useAppDispatch();
  const isActive = useAppSelector((state) => state.ui.activePopup) === id;

  const preventWindowClose = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  const open = (e: MouseEvent<HTMLElement>) => {
    preventWindowClose(e);
    dispatch(setActivePopup(id));
  };
  const close = () => {
    dispatch(setActivePopup());
  };
  const toggle = (e: MouseEvent<HTMLElement>) => {
    isActive ? close() : open(e);
  };

  useEffect(() => {
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []); // eslint-disable-line

  const newButton = cloneElement(buttonEl, { onClick: toggle });

  const containerRef = useRef<HTMLDivElement>(null);
  const [wrapperOffset, setWrapperOffset] = useState(0);

  const containerPaddingRight = 50;
  const scrollbarWidth = 17;
  const popupTimer = 200;
  // эти константы можно расчитать из css... если останется время

  const resetWrapper = () => {
    close();
    setTimeout(() => {
      setWrapperOffset(0);
    }, popupTimer);
  };

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (el && isActive) {
      const { width, x } = el.getBoundingClientRect();
      const offset = Math.ceil(
        width + x - window.innerWidth + containerPaddingRight + scrollbarWidth
      );
      if (offset > 0 && !wrapperOffset) setWrapperOffset(offset);
    }
  }, [isActive]); // eslint-disable-line

  useLayoutEffect(() => {
    window.addEventListener("resize", resetWrapper);
    return () => window.removeEventListener("resize", resetWrapper);
  }, []);

  return (
    <div
      className={cn([className, styles._, isActive && styles.active])}
      {...props}
    >
      {newButton}

      <div className={cn(wrapperClassName, styles.wrapper)}>
        <div className={styles.pointer}>
          <Icon name="pointer" />
        </div>

        <div
          className={styles.container}
          style={{ transform: `translateX(-${wrapperOffset}px)` }}
          onClick={preventWindowClose}
          ref={containerRef}
        >
          <button className={styles.closeBtn} onClick={close}>
            <Icon name="cross" />
          </button>
          {contentEl}
        </div>
      </div>
    </div>
  );
};
