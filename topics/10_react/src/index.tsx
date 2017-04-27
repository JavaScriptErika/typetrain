import * as React from "react";
import * as ReactDOM from "react-dom";

import {Home} from "./components/Home";

ReactDOM.render(
    <Home
        name={"Lev"} 
        age={87} 
    />,
    document.getElementById("app")
);