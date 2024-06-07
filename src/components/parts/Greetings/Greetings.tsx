import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./Greetings.module.scss";
import { useAppSelector } from "../../../store/hooks";

interface GreetingsProps extends ComponentPropsWithoutRef<"div"> {}

export const Greetings = ({ className, ...props }: GreetingsProps) => {
  const { users, activeUser } = useAppSelector((state) => state.user);
  let name = "";
  users.forEach((u) => {
    if (u.id === activeUser) name = u.name;
  });

  return name ? (
    <div className={cn([className, styles._])} {...props}>
      Добро пожаловать, <span className={styles.user}>{name}</span>!
    </div>
  ) : null;
};
