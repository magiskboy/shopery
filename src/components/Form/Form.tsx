import classNames from "classnames";
import React, { ComponentProps, FormEventHandler, useState } from "react";

type InputProps = {
  label?: string;
  layout?: "horizontal" | "vertical";
  className?: string;
} & ComponentProps<"input">;

export const Input: React.FC<InputProps> = ({
  label,
  layout = "horizontal",
  className = "",
  ...rest
}) => {
  return (
    <div
      className={
        classNames({
          flex: true,
          "flex-col": layout === "vertical",
          "justify-center": true,
          "items-center": true,
          "gap-3": true,
          relative: true,
        }) +
        " " +
        className
      }
    >
      {label && <div className="font-bold">{label}</div>}
      <input
        className="m-0 px-4 py-3.5 pr-10 bg-white rounded-md border border-solid border-neutral-200 max-md:flex-wrap w-full outline-none focus:border-green-500"
        {...rest}
      />
      <div className="absolute right-2 text-2xl"></div>
    </div>
  );
};
