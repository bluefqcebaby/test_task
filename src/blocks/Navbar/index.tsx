import { useDrag } from "react-dnd";
import Card from "../../components/card";
import { ItemTypes } from "../../item-types";
import sx from "classnames";
import TextAreaCard from "./text-area-card";
import FileInput from "../../components/file-input";
import FileInpCard from "./file-inp-card";

const NavBar = () => {
  return (
    <div
      className={sx(
        "flex-grow-0 border-blue-600 border flex gap-3 flex-col py-3 rounded px-5 h-min"
      )}
    >
      <p className="text-center font-semibold">Элементы</p>
      <TextAreaCard />
      <FileInpCard />
    </div>
  );
};

export default NavBar;
