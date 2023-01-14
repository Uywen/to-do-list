import React, { useRef } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux';

// all the reducers that i have used for their particular function
import { addTodo} from '../store/reducer';
import { editTodo } from '../store/reducer';
import { removeTodo } from '../store/reducer';
import { completeTodo } from '../store/reducer';

// the data partaining to the to item will be in the todos array
const mapStateToProps = (state) =>{
    return{
        todos: state,
};
};

const mapDispatchProps = (dispatch) =>{
    return{
    todoAdd : (obj) => dispatch(addTodo(obj)),
    removeTodo :(id) => dispatch(removeTodo(id)),
    todoUpdate : (obj) => dispatch(editTodo(obj)),
    completeTodos: (obj) => dispatch(completeTodo(obj))
    };
};


const Todos = (props) => {

const [todo,setTodo] = useState("");

const inputRef = useRef(true);

const changeEdit = () =>{
    inputRef.current.disabled = false
    inputRef.current.focus();
}

// the function for when the add button is clicked
const handleChange = (e) =>{
    setTodo(e.target.value);
}
// will display the arrays with the data of the todo list in the console log in the todos array
console.log("props from store", props)
  return (
    <div className='AddTodos'>
<input type="text" onChange={(e)=>handleChange(e)} className='todo-input' />

{/* when the add button is clicked it will have the following in an array in the console log */}
<button className="add-btn" onClick={()=>props.todoAdd({
    id:Math.floor(Math.random()*1000),
    content:todo,
    completed: false
}
)
}>Add</button>
    <br/>
    <ul>
        {props.todos.map((content)=>{
        return( <li key={content.id}>
            {/* added a text area for the user to edit the text and see each individual piece */}
        <textarea ref={inputRef}
         disabled={inputRef} 
         defaultValue={content.content} 
         />
         {/* when the edit button is clicked the user can edit the list item */}
        <button onClick={()=>changeEdit()}>Edit</button> 

        {/* when the complete button is pressed the complete status changes to true */}
        <button onClick={() => props.completeTodos(content.id)}>complete</button>

        {/* when the delete button is pressed an item is deleted */}
        <button onClick={() => props.removeTodo(content.id)}>Delete</button>{""}</li>
        )
      })}
    </ul>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchProps)(Todos)