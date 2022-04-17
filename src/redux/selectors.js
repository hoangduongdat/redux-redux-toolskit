import { createSelector } from "@reduxjs/toolkit"

// export const todoListSelector = (state) => {
//     const search =searchSelector(state)
//     const status=statusSelector(state)
//     const priority=prioritySelector(state)
//     if(status === 'All' )
//         return state.todoList.filter((todo) => todo.name.includes(search) && (priority.length <= 0 ? true : priority.includes(todo.priority) ))
//     else if(status === 'Completed'){
//         return state.todoList.filter((todo) => todo.name.includes(search) && todo.completed && (priority.length <= 0 ? true : priority.includes(todo.priority) ))
//     }
//     else {
//         return state.todoList.filter((todo) => todo.name.includes(search) && !todo.completed  && (priority.length <= 0 ? true : priority.includes(todo.priority) ))
//     }
// }


export const searchSelector = (state) => state.filters.search
export const statusSelector = (state) => state.filters.status
export const prioritySelector = (state) => state.filters.priority

export const todoListSelector = (state) => state.todoList 

const setStatus = (status)=>{
    return status==='Completed' ? true : false
}


export const todoRemaningSelector = createSelector(
    todoListSelector,
    searchSelector,
    statusSelector,
    prioritySelector,
    (todoList, search, status, priority) =>{
        if(status === 'All') 
        {
            return todoList.filter( todo =>
                todo.name.includes(search) && (priority.length <= 0 ? true : priority.includes(todo.priority))
            )
        }else {
            return todoList.filter( todo => 
                todo.name.includes(search) &&
                (priority.length <= 0 ? true : priority.includes(todo.priority)) &&
                todo.completed === setStatus(status)
            )
        }
            
        
})



