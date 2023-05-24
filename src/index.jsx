import React from "react";
import ReactDOM from "react-dom/client";
import "https://kit.fontawesome.com/6b203b1712.js";
import "./index.css";
import Start from "./start";

function Page () {
    return (
        <React.StrictMode>
            <Start />
        </React.StrictMode>
    )
}


const DOM = ReactDOM.createRoot(document.getElementById("root"));
DOM.render(<Page />);
