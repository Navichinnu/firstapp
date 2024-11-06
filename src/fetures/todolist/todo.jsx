import React, { useEffect } from "react";
import Todolist from "./todolist";
function Todo(props){
 useEffect(()=>{
    console.log('this is a mounting time')
     return ()=>{console.log('unmounting')}
 },[])
return(
    <div className="p-2 border border-5">
        {props.t}
             `   ` <button onClick={()=>{props.deleteTodo(props.i)}}>Delete</button>
    </div>
)

}
export default React.memo(Todo);