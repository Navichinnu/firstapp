import React, { useState } from "react";
import Todo from "./todo";
function Todolist(){
    var [todos,setTodos]=useState(['pay rent','buy car','buy house'])
    var [newTodo,setNewTodo]=useState('')
    function updateNewTodo(e){
         console.log(e)
         setNewTodo(e.target.value)
    }
    function addTodo(){
        setTodos([...todos,newTodo])
    }
     var deleteTodo=React.useCallback(function(ind){
      var temp=[...todos]
      temp.splice(ind,1)
      setTodos([...temp])
     },[])
    return(
        <div className="p-2 border border-4 ">
            <input type="text" onKeyUp={(e)=>{updateNewTodo(e)}}/>
            <button onClick={()=>{addTodo()}}>add</button>
            {
            
            todos.map((todo,i)=>{
           return  <Todo key ={i} t ={todo} deleteTodo={deleteTodo}i={i}> </Todo>
            })
        }
        </div>
    )
}
export default Todolist;