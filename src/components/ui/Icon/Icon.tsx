import type { ComponentPropsWithoutRef } from "react";

import iconSprite from "../../../assets/icons/icon-sprite.svg";

import styles from "./Icon.module.scss";

interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  name: string;
  size?: string;
  children?: undefined;
}

const Icon = ({
  className = "",
  name,
  size,
  style = {},
  ...props
}: IconProps): JSX.Element => {
  const path = `${iconSprite}#${name}`;
  const innerStyle = { ...style };

  if (size) {
    innerStyle.width = size;
    innerStyle.height = size;
  }

  return (
    <svg
      className={`${className} ${styles.svg}`}
      name={name}
      style={innerStyle}
      {...props}
    >
      <use href={path}></use>
    </svg>
  );
};

export default Icon;
