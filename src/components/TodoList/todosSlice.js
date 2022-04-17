// const initState = [
//     {id: '1', name: 'Learn Redux' , completed : false, priority: "High"},
//     {id: '2', name: 'Learn ReacJS' , completed : false, priority: "Low"},
//     {id: '3', name: 'Learn JavaScript' , completed : true, priority: "Medium"}
// ]

// const todoListReducer = (state =initState, action) => {
//     switch (action.type) {
//         case 'todoList/completedTodo' :
//             {
//                 const newState=[...state]
//                 newState.forEach(todo =>{
//                     if(todo.id === action.payload) {
//                         todo.completed=!todo.completed
//                     }
//                 })
//                 return newState
//             }
//         case 'todoList/addTodo' :
//             return  [...state, action.payload]
//         default: return state
//     }
// }

// export default todoListReducer

import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name:'todoList',
    initialState: [
        {id: '1', name: 'Learn Redux' , completed : false, priority: "High"},
        {id: '2', name: 'Learn ReacJS' , completed : false, priority: "Low"},
        {id: '3', name: 'Learn JavaScript' , completed : true, priority: "Medium"}
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        completedTodo: (state, action) => {
            state.forEach(todo =>{
                if(todo.id===action.payload) todo.completed = !todo.completed
            })
        }
    }
})

export default todosSlice