import React from "react";
import styled from "styled-components";

const HoverComponent = ({ xAxis, yAxis }) => {
  const updateElement = (e, newTag) => {
    let newElement = document.createElement(newTag);

    let targetElement = document.querySelector('[data-personal-target="true"]');
    newElement.innerHTML = targetElement.innerHTML;
    targetElement.parentNode.replaceChild(newElement, targetElement);

    newElement.classList.add([...targetElement.classList].join(" "));
    newElement.setAttribute("data-personal-target", true);
  };
  return (
    <div
      id="hover-component"
      style={{
        top: yAxis,
        left: xAxis,
        width: "fit-content",
        position: "absolute",
        backgroundColor: "#ddd",
      }}
    >
      <HoverWidget>
        <button
          onClick={(e) => {
            updateElement(e, "H1");
          }}
        >
          H1
        </button>
        <button
          onClick={(e) => {
            updateElement(e, "H2");
          }}
        >
          H2
        </button>
        <button
          onClick={(e) => {
            updateElement(e, "H3");
          }}
        >
          H3
        </button>
        <button
          onClick={(e) => {
            updateElement(e, "H4");
          }}
        >
          H4
        </button>
        <button
          onClick={(e) => {
            updateElement(e, "H5");
          }}
        >
          H5
        </button>
        <button
          onClick={(e) => {
            updateElement(e, "H6");
          }}
        >
          H6
        </button>
        <button
          onClick={(e) => {
            updateElement(e, "p");
          }}
        >
          P
        </button>
        <button
          onClick={(e) => {
            updateElement(e, "div");
          }}
        >
          div
        </button>
      </HoverWidget>
    </div>
  );
};

export default HoverComponent;

const HoverWidget = styled.div`
  width: fit-content;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 1rem;
`;
