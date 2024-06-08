import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./User.module.scss";

import { Link } from "react-router-dom";
import { PAGES } from "../../../router/const";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setActiveUser } from "../../../store/slices/userSlice";

import Icon from "../../ui/Icon/Icon";
import { Popup } from "../../ui/Popup/Popup";

import photo1 from "../../../assets/img/user1.png";
import photo2 from "../../../assets/img/user2.png";

const photos: { [key: string]: string } = {
  "1": photo1,
  "2": photo2,
};

interface UserProps extends ComponentPropsWithoutRef<"button"> {}

export const User = ({ className, ...props }: UserProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const { users, activeUser } = useAppSelector((state) => state.user);

  let buttonImage = "";
  users.forEach((u) => {
    if (u.id === activeUser) buttonImage = photos[u.photo];
  });

  const buttonEl = (
    <button className={cn([className, styles._])} type="button" {...props}>
      <span className={styles.buttonImage}>
        {buttonImage ? (
          <img src={buttonImage} alt="" />
        ) : (
          <span className={styles.placeholder}>
            <Icon name="person" />
          </span>
        )}
      </span>
      <span className={styles.dropIcon}>
        <Icon name="chevron" />
      </span>
    </button>
  );

  const contentEl = (
    <div className={styles.content}>
      <p className={styles.title}>Смена пользователя</p>

      <div className={styles.userList}>
        {users.map((u) => (
          <button
            className={cn(styles.user, u.id === activeUser && styles.active)}
            onClick={() => dispatch(setActiveUser(u.id))}
            key={u.id}
          >
            <div className={styles.userPhoto}>
              <img src={photos[u.photo]} alt="" />
            </div>
            <div className={styles.userInfo}>
              <p className={styles.userName}>{u.name}</p>
              <p className={styles.currentUser}>Это вы</p>
            </div>
          </button>
        ))}
      </div>

      <Link
        className={styles.quitButton}
        to={PAGES.ROOT}
        onClick={() => dispatch(setActiveUser(null))}
      >
        <span>Выход</span>
        <span>
          <Icon name="exit" />
        </span>
      </Link>
    </div>
  );

  return (
    <Popup
      buttonEl={buttonEl}
      contentEl={contentEl}
      wrapperClassName={styles.popupWrapper}
    />
  );
};
