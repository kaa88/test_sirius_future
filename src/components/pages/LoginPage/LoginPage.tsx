import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FormEvent,
  useState,
} from "react";
import cn from "classnames";
import styles from "./LoginPage.module.scss";

import logo from "../../../assets/img/logo2.svg";
import { InputText } from "../../ui/InputText/InputText";
import { InputPassword } from "../../ui/InputPassword/InputPassword";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import { Button } from "../../ui/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { PAGES } from "../../../router/const";
import { useAppDispatch } from "../../../store/hooks";
import { setActiveUser } from "../../../store/slices/userSlice";

type IFormState = {
  [key: string]: {
    isValid: boolean;
    value?: string;
    checked?: boolean;
  };
};

interface LoginPageProps extends ComponentPropsWithoutRef<"div"> {}

export const LoginPage = ({
  className,
  ...props
}: LoginPageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const defaultState: IFormState = {
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
    checkbox: {
      checked: false,
      isValid: false,
    },
  };

  const [formState, setFormState] = useState(defaultState);
  const [showErrors, setShowErrors] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      email: {
        ...formState.email,
        isValid: !!e.currentTarget.value,
        value: e.currentTarget.value,
      },
    });
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      password: {
        ...formState.password,
        isValid: !!e.currentTarget.value,
        value: e.currentTarget.value,
      },
    });
  };
  const handleChkboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      checkbox: {
        ...formState.checkbox,
        isValid: e.currentTarget.checked,
        checked: e.currentTarget.checked,
      },
    });
  };

  let isFormValid = true;
  for (let key in formState) {
    if (!formState[key].isValid) isFormValid = false;
  }

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      dispatch(setActiveUser("aidj2j2"));
      navigate(PAGES.MAIN);
    } else setShowErrors(true);
  };

  const [lang, setLang] = useState(false);

  return (
    <div className={cn([className, styles._])} {...props}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <h2 className={styles.title}>Вход в Sirius Future</h2>

      <form className={styles.form} action="#" onSubmit={submit}>
        <InputText
          className={styles.inputText}
          value={formState.email.value}
          onChange={handleEmailChange}
          placeholder="E-mail"
          state={!formState.email.isValid && showErrors ? "error" : undefined}
        />
        <InputPassword
          className={styles.inputPassword}
          value={formState.password.value}
          onChange={handlePasswordChange}
          placeholder="Пароль"
          state={
            !formState.password.isValid && showErrors ? "error" : undefined
          }
        />
        <Checkbox
          className={styles.checkbox}
          checked={formState.checkbox.checked}
          onChange={handleChkboxChange}
          state={
            !formState.checkbox.isValid && showErrors ? "error" : undefined
          }
          clickableLabel
        >
          Запомнить меня
        </Checkbox>

        <div className={styles.mainButtons}>
          <Button variant="dark" size="large">
            Войти
          </Button>
          <Link className={styles.link} to={PAGES.ERROR}>
            Я забыл пароль
          </Link>
          <Link className={styles.link} to={PAGES.ERROR}>
            Войти как тренер
          </Link>
        </div>

        <div className={styles.register}>
          <p>Нет аккаунта?</p>
          <Link className={styles.link} to={PAGES.ERROR}>
            Зарегистрироваться
          </Link>
        </div>
      </form>

      <div className={styles.language}>
        {languages.map((l, i) => (
          <button
            className={cn(lang === l && styles.active)}
            type="button"
            onClick={() => setLang(!lang)}
            key={i}
          >
            {l ? "EN" : "RU"}
          </button>
        ))}
      </div>
    </div>
  );
};

const languages = [false, true];
