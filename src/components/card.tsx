import { FC, forwardRef } from "react";
import sx from "classnames";

interface Props {
  label: string;
  isDragging: boolean;
}

const Card = forwardRef<HTMLDivElement, Props>(({ label, isDragging }, ref) => {
  return (
    <div
      ref={ref}
      className={sx(
        "select-none p-3 rounded border border-dotted text-center min-w-[100px]",
        "border-blue-600 hover:bg-blue-100 transition cursor-pointer",
        { "opacity-40": isDragging }
      )}
    >
      {label}
    </div>
  );
});

export default Card;
