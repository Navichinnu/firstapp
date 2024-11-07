import React, { useContext } from "react";
import App from "./App";
import child from "./child";
import DeatilsContext from "./detailsContext";
function Child2(){
    var details1=useContext(DeatilsContext);

    return (
        <div className="border border-4 p-2 m-4">
            <h1>this is grand child {details1.firstName}</h1>
        </div>
    )  
}
export default Child2;
