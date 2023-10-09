import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const containerSelector = 'form *:has(> textarea)';
const buttonSelector = 'form *:has(> textarea) > button'

const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";

const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #${rootElement.id} {
  right: 50px;
  width: 4.6vh;
  height: 4.6vh;
  z-index: 99;
  }

  #mic {
    z-index: 100;
    left: 0px;
    top: 0px;
    right: 0px;
    border-radius: 5px;
  }
`;

window.onload = () => {
  const button = document.querySelector(buttonSelector);
  console.log(button);
  console.log(button.parentNode);

  rootElement.className = button.className.replace("right-3", "right-2");
  button.parentNode.insertBefore(rootElement, button);
  document.querySelector(containerSelector).appendChild(globalStyles);
  rootElement.innerHTML = globalStyles.innerHTML;


  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

