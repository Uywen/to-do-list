import { createSlice } from "@reduxjs/toolkit";

// my initialstate
const initialState=[]

const todoReducer= createSlice({
    name:"todos",
    initialState,
    reducers:{
        // this allows me to add items to my to do list
        addTodo:(state,action) =>{
            state.push(action.payload);
            return state;
        },
        // this removes items from my todo list
        removeTodo:(state,action) =>{
            return state.filter((content) => content.id !== action.payload);
        },
        // this edits items on my todo list
        editTodo:(state,action) => {
            return state.map(todo => {
                if(todo.id === action.payload.id){
                    return{
                        ... todo,
                        content: action.payload.content,
                    }
                }
             
              return todo;

            
            });
            
            },
            // this allows my items to be completed and when they are complete is changed to true
            completeTodo:(state,action) =>{
                return state.map((todo) => {
                    if(todo.id === action.payload){
                        return{
                            ... todo,
                        completed:true
                        }
                    }
                 
                  return todo;
                })
    
        }
    }
})

export const {addTodo,removeTodo,editTodo,completeTodo} = todoReducer.actions;
export const reducer =todoReducer.reducer