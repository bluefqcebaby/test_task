import FileInput from "../../components/file-input";
import TextArea from "../../components/text-area";
import sx from "classnames";
import { ReactNode, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../item-types";

const WorkSpace = () => {
  const [workItems, setWorkItems] = useState<ReactNode[]>([]);
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    collect: (monitor) => ({ isOver: monitor.isOver() }),
    drop(item: any) {
      if (!item.id) return;
      switch (item.id) {
        case ItemTypes.FILE_INPUT:
          setWorkItems((prev) => [
            ...prev,
            <FileInput onChange={(file) => console.log(file)} />,
          ]);
          break;
        case ItemTypes.TEXTAREA:
          setWorkItems((prev) => [...prev, <TextArea />]);
          break;
      }
    },
  });
  return (
    <div
      className={sx(
        "border-blue-600 border grow, relative w-full min-h-[300px]",
        "flex gap-3 flex-col p-3 rounded h-min items-center justify-start"
      )}
      ref={drop}
    >
      {isOver && (
        <div className="absolute w-full h-full bg-white opacity-70 z-50 flex justify-center items-center">
          <p>Бросайте</p>
        </div>
      )}
      <p className="text-center font-semibold">Рабочая зона</p>
      {workItems.map((elem, i) => (
        <div key={i}>{elem}</div>
      ))}
    </div>
  );
};

export default WorkSpace;
