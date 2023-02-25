import { useDrag } from "react-dnd";
import Card from "../../components/card";
import { ItemTypes } from "../../item-types";

const TextAreaCard = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ELEMENT,
    item: { id: ItemTypes.TEXTAREA },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      daun: monitor.didDrop,
    }),
  }));

  return <Card label="Text Area" ref={drag} isDragging={isDragging} />;
};

export default TextAreaCard;
