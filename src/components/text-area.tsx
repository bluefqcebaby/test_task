import sx from "classnames";
import { ChangeEvent, FC, TextareaHTMLAttributes, useRef } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: FC<Props> = ({ onChange, ...props }) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  return (
    <label className="w-[300px]">
      <textarea
        ref={ref}
        rows={1}
        className={sx(
          "resize-none rounded border border-blue-600 border-dotted outline-none p-3",
          "min-h-[96px] w-full text-black placeholder:text-gray400"
        )}
        placeholder="Введите текст"
        {...props}
      />
    </label>
  );
};

export default TextArea;
