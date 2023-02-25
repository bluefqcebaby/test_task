import { useState } from "react";
import sx from "classnames";
import FileInput from "./components/file-input";
import TextArea from "./components/text-area";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NavBar from "./blocks/Navbar";
import WorkSpace from "./blocks/Workspace";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-min-screen w-full flex items-center justify-center my-5">
        <div className="flex gap-3 w-1/2">
          <NavBar />
          <WorkSpace />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
