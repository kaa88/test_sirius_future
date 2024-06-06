import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./AccountMenu.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { PAGES } from "../../../../router/const";

import Icon from "../../../ui/Icon/Icon";

interface AccountMenuProps extends ComponentPropsWithoutRef<"div"> {}

export const AccountMenu = ({
  className,
  ...props
}: AccountMenuProps): JSX.Element => {
  const { pathname: currentPage } = useLocation();

  return (
    <nav className={cn([className, styles._])} {...props}>
      {items.map((item) => (
        <NavLink
          className={cn(
            styles.link,
            item.path === currentPage && styles.active
          )}
          to={item.path || PAGES.ERROR}
          key={item.title}
          tabIndex={item.path === currentPage ? -1 : undefined}
        >
          <span className={styles.icon}>
            <Icon name={item.icon} />
          </span>
          <span className={styles.title}>{item.title}</span>
        </NavLink>
      ))}
    </nav>
  );
};

interface MenuItem {
  icon: string;
  title: string;
  path?: string;
}

const items: MenuItem[] = [
  {
    icon: "home",
    title: "Главная",
    path: PAGES.MAIN,
  },
  {
    icon: "calendar",
    title: "Расписание",
    path: PAGES.SCHEDULE,
  },
  {
    icon: "wallet",
    title: "Оплата",
  },
  {
    icon: "prize",
    title: "Достижения",
  },
  {
    icon: "puzzle",
    title: "Тренажеры",
  },
  {
    icon: "folder",
    title: "Библиотека",
  },
  {
    icon: "headset",
    title: "Проверка связи",
  },
  {
    icon: "gear",
    title: "Настройки",
  },
  {
    icon: "question",
    title: "Вопросы",
  },
];
