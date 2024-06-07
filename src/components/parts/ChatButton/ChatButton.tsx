import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./ChatButton.module.scss";

import image from "../../../assets/img/chat.svg";
import { Popup } from "../../ui/Popup/Popup";

interface ChatButtonProps extends ComponentPropsWithoutRef<"button"> {}

export const ChatButton = ({
  className,
  ...props
}: ChatButtonProps): JSX.Element => {
  const msgCount = 2;

  const buttonEl = (
    <button className={cn([className, styles._])} type="button" {...props}>
      <img src={image} alt="" />
      <span className={styles.bubble}>{msgCount}</span>
    </button>
  );

  const contentEl = <p>Чат: {msgCount} сообщения</p>;

  return <Popup buttonEl={buttonEl} contentEl={contentEl} />;
};
