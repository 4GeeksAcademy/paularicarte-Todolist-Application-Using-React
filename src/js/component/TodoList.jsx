import React, { useState } from "react";
import Message from "./Message.jsx";
import Delete from "./Delete.jsx";


const TodoList = ()=>{

    const [inputValue, setInputValue]= useState('');
    const [todoList, setTodoList]= useState([]);

    const createTodo= ()=>{
        setTodoList([...todoList, inputValue]);
        setInputValue('');
    }
    

    return ( 
       
        <> 
            <input 
                type = "text" 
                value = {inputValue}
                onChange ={(e) => {setInputValue(e.target.value)}} 
                onKeyDown ={(e) => {if(e.key==='Enter'){createTodo()}
            }}
            /> 
            <ul>
                {
                    todoList.length === 0 ? <Message/> : todoList.map((item, index) => (
                        <>
                            <div>
                                <li key = {index}> {item} </li>
                                <Delete/ >
                            </div>
                        </>
                     )
                    )
                }

            </ul>

        </>
        
    );
}

export default TodoList;