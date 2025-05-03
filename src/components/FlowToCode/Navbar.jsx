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
  Delete02Icon,
  ArrowLeft02Icon
} from "hugeicons-react";
import { Link } from "react-router-dom";
import '../../styles/Navbar.css'
// import { toPng } from 'html-to-image';

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




export default function MinimalToolbar({ setSelectedShape, setShape, setIsEraserActive, setActiveTool, activeTool, setShowEditor, showEditor, setshowHam, showHam, setEdges, setNodes, setShowFrontPage }) {

  const handleClick = (tool) => {
    setActiveTool(tool.id);

    if (tool !== "pointer") {
      setShowFrontPage(false);
    }

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
  }

  const showhamdata = () => {
    setshowHam(!showHam);
  }

  const resetCanvas = () => {
    setEdges([]);
    setNodes([]);
    setshowHam(false)
  }

  const resethome = () => {
    resetCanvas();
    setShowFrontPage(true);
    setActiveTool("pointer");
    setshowHam(false)
  };


  return (
    <>



      <div className="relative flex justify-between items-center mt-4 z-1">

        <div className={`${showHam ? "block" : "hidden"} absolute top-[9vh] left-[1%] z-1`}>
          <ul className="hamnav flex flex-col gap-2 bg-gray-100 p-2 -mt-2 pb-2 w-[11rem] z-1">
            <li onClick={resethome} className="hover:bg-gray-300 p-2 font-normal rounded-md flex gap-2 justify-self-auto"  ><Home03Icon color="#000" /> Home</li>
            <Link className="hover:bg-gray-300 p-2 font-normal rounded-md flex gap-2 justify-self-auto" to="https://github.com/ashokkmt/SketchCode" target='_blank' rel="noopener noreferrer" > <Github01Icon color="#000" /> Github</Link>
            <Link onClick={resetCanvas} className="hover:bg-gray-300 p-2 font-normal rounded-md flex gap-2 justify-self-auto"> <Delete02Icon color="#000" /> Reset Canvas</Link>
            <Link to={"/"} className="hover:bg-gray-300 p-2 font-normal rounded-md flex gap-2 justify-self-auto"> <ArrowLeft02Icon color="#000" /> Back</Link>
          </ul>
        </div>


        <button onClick={() => { showhamdata() }} className="z-10 btn-ham hover:transform transition-all duration-300 ease-in-out cursor-pointer self-start bg-gray-100 hover:bg-gray-200 p-[.6rem]  ml-[1rem]"> {showHam ? <Cancel01Icon color="#000" /> : <Menu01Icon color="#000" />} </button>

        <div className="flex items-center gap-3 p-2 bg-white rounded-xl shadow border border-gray-200 w-fit mx-auto ">

          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => handleClick(tool)}
              className={`p-2 rounded-lg transition-all relative
          ${activeTool === tool.id
                  ? "bg-orange-300"
                  : "hover:bg-orange-100"}
            `}
            >
              {tool.icon}
            </button>
          ))}
        </div>
      </div>
      <button className="rotate-[90deg] z-999 hover:transform hover:scale-[1.05] hover:right-[-0%] active:scale-[0.98] transition-all duration-300 ease-in-out cursor-pointer self-start bg-gray-100 hover:bg-gray-200 p-[.6rem] rounded-2xl absolute top-[42vh] right-[-1%] pt-[1rem]" onClick={() => editorCode()}>{!showEditor ? <ArrowDownDoubleIcon color="#000" /> : <ArrowUpDoubleIcon color="#000" />}</button>
    </>
  );
}


