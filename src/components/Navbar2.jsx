import {
  EraserIcon,
  ParallelogramIcon,
  DiamondIcon,
  Hold03Icon,
  Cursor02Icon,
  OvalIcon,
  SquareIcon,
  HexagonIcon,
  ArrowDownDoubleIcon,
  ArrowUpDoubleIcon,
  Menu01Icon,
  Cancel01Icon,
  Home03Icon,
  Github01Icon,
  HelpCircleIcon,
  Delete02Icon
} from "hugeicons-react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

const tools = [
  { id: "hand", icon: <Hold03Icon color="#000" />, hold: true },
  { id: "pointer", icon: <Cursor02Icon color="#000" />, pointer: true },
  { id: "circle", icon: <OvalIcon color="#000" />, shape: true },
  { id: "rectangle", icon: <SquareIcon color="#000" />, shape: true },
  { id: "parallelogram", icon: <ParallelogramIcon color="#000" />, shape: true },
  { id: "diamond", icon: <DiamondIcon color="#000" />, shape: true },
  { id: "hexagon", icon: <HexagonIcon color="#000" />, shape: true },
  { id: "eraser", icon: <EraserIcon color="#000" />, eraser: true },
];




export default function MinimalToolbar({ setSelectedShape, setShape, sendFlowBackend, setIsEraserActive, setActiveTool, activeTool, setShowEditor, showEditor, setshowHam, showHam }) {

  const handleClick = (tool) => {
    setActiveTool(tool.id);

    if (tool.shape) {
      setSelectedShape(true);
      setShape(tool.id);
      setIsEraserActive(false);
    } else if (tool.pointer || tool.hand) {
      setIsEraserActive(false);
    } else if (tool.eraser) {
      setIsEraserActive(true);
    }
  };


  const editorCode = () => {
    if (showEditor) {
      setShowEditor(false)
      return
    }
    setShowEditor(true)
    sendFlowBackend();
  }

  const showhamdata = () => {
    setshowHam(!showHam);
  }


  return (
    <>
      <div className={`${showHam ? "block" :  "hidden"} absolute top-[10%] left-[1%] z-20`}>
        <ul className="hamnav flex flex-col gap-2 bg-gray-100 p-1 pt-2 pb-2 w-[11rem]">
          <Link className="hover:bg-gray-300 p-1  rounded-md flex gap-2 justify-self-auto"><Home03Icon color="#000" />  Home</Link>
          <Link className="hover:bg-gray-300 p-1  rounded-md flex gap-2 justify-self-auto"> <Github01Icon color="#000" /> Github</Link>
          <Link className="hover:bg-gray-300 p-1  rounded-md flex gap-2 justify-self-auto"> <HelpCircleIcon color="#000" /> Help</Link>
          <Link className="hover:bg-gray-300 p-1  rounded-md flex gap-2 justify-self-auto"> <Delete02Icon color="#000" /> Reset </Link>
        </ul>
      </div>


      <div className="flex justify-between items-center mt-4 z-10">

        <button onClick={() => { showhamdata() }} className="btn-ham hover:transform transition-all duration-300 ease-in-out cursor-pointer self-start bg-gray-100 hover:bg-gray-200 p-[.6rem]  ml-[1rem]"> {showHam ? <Cancel01Icon color="#000" /> : <Menu01Icon color="#000" />} </button>

        <div className="flex items-center gap-3 p-2 bg-white rounded-xl shadow border border-gray-200 w-fit mx-auto ">

          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => handleClick(tool)}
              className={`p-2 rounded-lg transition-all relative
          ${activeTool === tool.id
                  ? "bg-indigo-200 text-indigo-600"
                  : "hover:bg-gray-100"}
            `}
            >
              {tool.icon}
            </button>
          ))}
        </div>
        <button className="rotate-[90deg] z-999 hover:transform hover:scale-[1.05] hover:right-[-0%] active:scale-[0.98] transition-all duration-300 ease-in-out cursor-pointer self-start bg-gray-100 hover:bg-gray-200 p-[.6rem] rounded-2xl absolute top-[45%] right-[-1%] pt-[1rem]" onClick={() => editorCode()}>{!showEditor ? <ArrowDownDoubleIcon color="#000" /> : <ArrowUpDoubleIcon color="#000" />}</button>

      </div>
    </>
  );
}
