import React from "react";
import { classNames } from "../../../lib/helper";

interface ButtonParams {
  children: JSX.Element | string;
  type?: "button" | "submit" | "reset";
  samePadding?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({
  children,
  type = "button",
  samePadding = false,
  secondary = false,
  tertiary = false,
  onClick,
  className,
}: ButtonParams) {
  let buttonStyle =
    "w-full text-white-100 bg-primary hover:bg-primary-dark font-medium rounded-lg text-sm px-5 px-5 py-2.5";

  if (secondary) {
    buttonStyle =
      "w-full text-white-100 bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 px-5 py-2.5";
  }

  if (tertiary) {
    buttonStyle =
      "text-primary hover:bg-gray-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center";
  }

  if (samePadding) {
    buttonStyle = classNames(buttonStyle, "px-2.5");
  }

  buttonStyle = classNames(buttonStyle, className ? className : "");

  return (
    <button type={type} onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
}
