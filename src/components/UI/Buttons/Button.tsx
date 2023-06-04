import clsx from "clsx";
import React from "react";

type Layout = "Desktop" | "Mobile";

interface IButton {
  children?: React.ReactNode;
  layout?: Layout;
}

export const Button: React.FC<IButton> = ({ children, layout }) => {
  return (
    <button
      className={clsx(
        `
        p-2
        rounded-xl
        bg-blue-400
        text-white
        hover:bg-blue-700
        cursor-pointer
        px-3
        py-2
        `,
        layout === "Mobile" ? "w-full" : "w-[100px]"
      )}
    >
      {children}
    </button>
  );
};
