import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./Logo.module.scss";

import { Link } from "react-router-dom";
import { PAGES } from "../../../router/const";

import logo from "./../../../assets/img/logo.svg";

interface LogoProps extends ComponentPropsWithoutRef<"a"> {}

export const Logo = ({
  className,
  children,
  ...props
}: LogoProps): JSX.Element => {
  return (
    <Link className={cn([className, styles._])} to={PAGES.MAIN} {...props}>
      <img src={logo} alt="logo" />
    </Link>
  );
};
