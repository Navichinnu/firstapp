import React, { useEffect } from "react";
import Child from "./child";
import Child2 from "./child2";
import DeatilsContext from "./detailsContext";
function App(){
    console.log(
        "satish ece"
    )
    var [count,setCount]=React.useState(0)
    var ref1=React.useRef();
    var ref2=React.useRef();
    var ref3=React.useRef();
    console.log(ref1)
    useEffect(()=>{
      ref1.current.focus();
    },[])
    function checkEnter(ev){
      console.log(ev.key)
      if(ev.key === 'Enter'){
        ref2.current.focus()
      }
    }
    function checkEnter2(em){
        if(em.key==='Enter'){
            ref3.current.focus();
        }
    }
     var mydetails={firstName:'MadhuSekhar',
        age:25
     }

    return (
        <DeatilsContext.Provider value={mydetails}>
        <div className="p-2 m-2 border border-3">
        <h1>parent component</h1>
        <input type="text" ref={ref1} onKeyUp={(e)=>{checkEnter(e)}}/>
        <br />
        <input type="text" ref={ref2} onKeyUp={(e)=>{checkEnter2(e)}} />
        <h1>Count:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <Child ref={ref3}></Child>
        <Child2></Child2>
        </div>
        </DeatilsContext.Provider>
        
)
}
export default App;