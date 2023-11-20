import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
import React from 'react';

function Header() {
    return (
        <header>
            hello from the Header!
        </header>
    );
}

export default Header;
