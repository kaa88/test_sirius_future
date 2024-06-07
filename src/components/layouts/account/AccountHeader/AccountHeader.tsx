import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./AccountHeader.module.scss";
import { Greetings } from "../../../parts/Greetings/Greetings";
import { ChatButton } from "../../../parts/ChatButton/ChatButton";
import { User } from "../../../parts/User/User";
import { useLocation } from "react-router";
import { PAGES } from "../../../../router/const";

interface AccountHeaderProps extends ComponentPropsWithoutRef<"div"> {}

export const AccountHeader = ({
  className,
  ...props
}: AccountHeaderProps): JSX.Element => {
  const { pathname } = useLocation();
  const isGreetingsShown = pathname === PAGES.MAIN;

  return (
    <header className={cn([className, styles._])} {...props}>
      {isGreetingsShown && <Greetings className={styles.greetings} />}
      <ChatButton />
      <User />
    </header>
  );
};
