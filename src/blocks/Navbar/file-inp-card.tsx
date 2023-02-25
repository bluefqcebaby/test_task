import { useDrag } from "react-dnd";
import Card from "../../components/card";
import { ItemTypes } from "../../item-types";

const FileInpCard = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ELEMENT,
    item: { id: ItemTypes.FILE_INPUT },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return <Card label="File" ref={drag} isDragging={isDragging} />;
};

export default FileInpCard;
