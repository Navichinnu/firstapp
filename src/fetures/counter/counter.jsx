import React, { useEffect, useState } from "react";
 function Counter(){

    var [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("this is a mounting time ")
    },[])
    useEffect(()=>{
        console.log("this is a change detection time and update the state variable");
    })
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
    return(
        <div className="p-5 border border-5">
        <h1>Count:{count}</h1>
        <button onClick={()=>{inc()}}>Increament</button>
        <button onClick={()=>{dec()}}>Dercrement</button>
        </div>
    )
 }
 export default Counter;