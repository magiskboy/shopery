import classNames from "classnames";
import s from "./Button.module.css";
import { ComponentProps } from "react";

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  size = "medium",
  variant = "fill",
  fullWidth = false,
  className = "",
  ...rest
}) => {
  const isString = typeof children === "string";
  return isString ? (
    <button
      className={
        classNames({
          [s.button]: true,
          [s[size]]: true,
          [s[variant]]: true,
          [s.fullWidth]: fullWidth,
          [className]: true,
        })
      }
      {...rest}
    >
      {children}
    </button>
  ) : (
    <div
      className={
        classNames({
          [s[variant]]: true,
          [s.icon]: true,
        }) + ` flex justify-center items-center ${className}`
      }
    >
      {children}
    </div>
  );
};

interface Props extends ComponentProps<"button"> {
  size?: "small" | "medium" | "large";
  variant?: "fill" | "border" | "ghost";
  fullWidth?: boolean;
}
