import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  useId,
  useRef,
  useState,
  MouseEvent,
} from "react";
import sx from "classnames";

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  onChange: (file: File | null) => void;
}

const FileInput: FC<Props> = ({ onChange: onFileChange, ...props }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;

    const file = files[0];

    const src = URL.createObjectURL(file);

    setImageSrc(src);

    onFileChange(file);
  };
  const handleClick = () => {
    if (!ref.current) return;
    ref.current.click();
  };
  const deleteImage = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setImageSrc("");
    onFileChange(null);
    if (!ref.current) return;
    ref.current.value = "";
  };
  return (
    <div
      className="relative w-[300px] h-[150px] block group"
      onClick={handleClick}
    >
      <div className="cursor-pointer w-full h-full rounded border border-blue-600 border-dotted flex items-center justify-center">
        {!imageSrc && <p>Выберите изображение</p>}
      </div>
      {imageSrc && (
        <>
          <img
            src={imageSrc}
            alt="image preview"
            className={sx(
              "absolute w-[99%] h-[99%] object-fill",
              "top-1/2 rounded left-1/2 -translate-x-1/2",
              "-translate-y-1/2"
            )}
          />
          <div
            onClick={deleteImage}
            className={sx(
              "absolute w-[99%] h-[99%] bg-white/40 opacity-0 -translate-y-1/2 transition-opacity",
              "top-1/2 rounded left-1/2 -translate-x-1/2 group-hover:opacity-100",
              "flex items-center justify-center text-5xl select-none cursor-pointer"
            )}
          >
            ✖
          </div>
        </>
      )}
      <input
        type="file"
        ref={ref}
        className="hidden"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default FileInput;
