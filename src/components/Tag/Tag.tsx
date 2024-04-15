import * as React from "react";

interface TagProps {
  text: string;
  className?: string;
}

export default function Tag({ text, className = '' }: TagProps) {
  return (
    <div
      className={`flex gap-1 justify-center px-2 text-sm leading-5 text-white whitespace-nowrap rounded w-fit ${className}`}
    >
      <div className="font-medium">{text}</div>
    </div>
  );
}