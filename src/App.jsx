import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MainBody from "./components/MainBody";
import HoverComponent from "./components/HoverComponent";
import { ancestorExistsByID } from "./utils/utilities";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showHover, setShowHover] = useState(false);
  const [hoverAxis, setHoverAxis] = useState({ xAxis: 0, yAxis: 0 });
  useEffect(() => {
    initializeDOMHightlight();
    return () => {};
  }, []);

  const initializeDOMHightlight = () => {
    document.addEventListener("mouseover", domMouseOver, true);
    document.addEventListener("mouseout", domMouseOut, true);
  };

  const domMouseOver = async (e) => {
    if (ancestorExistsByID(e.target, "hover-component")) return;
    const elBoundingRect = e.target.getBoundingClientRect();

    setHoverAxis({
      yAxis: Math.round(window.scrollY + elBoundingRect.bottom),
      xAxis: Math.round(window.scrollX + elBoundingRect.left),
    });
    setShowHover(true);
    document.querySelectorAll(".focused-element").forEach((elTarget, idx) => {
      elTarget.classList.remove("focused-element");
      elTarget.removeAttribute("data-personal-target");
      elTarget.setAttribute("contentEditable", false);
    });

    e.target.classList.add("focused-element");
    e.target.setAttribute("data-personal-target", true);
    e.target.setAttribute("contentEditable", true);
  };

  const domMouseOut = async (e) => {};

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
        <MainBody />
        {showHover && (
          <HoverComponent xAxis={hoverAxis.xAxis} yAxis={hoverAxis.yAxis} />
        )}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
