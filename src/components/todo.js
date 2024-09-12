import React from "react";

function Todo(){
    return(
        <div>
        <h1 style={{textAlign: 'center', color:'darkblue'}}>My To-do List</h1>
        <div  style={{textAlign: 'center'}}>
            <input type="text"  placeholder="Add a new task" style={{padding:"5px"}}/>
            <button style={{backgroundColor:"darkblue"}}>Add</button>
        </div>
        <ul style={{listStyleType:"circle", paddingLeft:"20px"}}></ul>
    </div>
    );
    
}

export default Todo;