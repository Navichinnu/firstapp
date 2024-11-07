import React, { useContext } from "react";
import Child2 from "./child2";
import DeatilsContext from "./detailsContext";
function Child(props,mref){
    console.log(mref)
    var [x,setX]=React.useState([10,20])
    var details=useContext(DeatilsContext);
    return(
        <div className="p-2 m-2 border border-3">
            <input type="text" ref={mref} />
            {details.firstName}
          <h1>Child:{x} {details.firstName}</h1>
          <Child2></Child2>
        </div>
    )
}
export default React.forwardRef(Child);