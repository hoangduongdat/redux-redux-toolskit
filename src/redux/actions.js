
export const addTodo= (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    } 
}

export const searchTodo= (data) => {
    return {
        type: 'filters/searchTodo',
        payload: data
    } 
}

export const priorityTodo= (data) => {
    return {
        type: 'filters/priorityTodo',
        payload: data
    } 
}

export const statusTodo= (data) => {
    return {
        type: 'filters/statusTodo',
        payload: data
    } 
}

export const completedTodo= (data) => {
    return {
        type: 'todoList/completedTodo',
        payload: data
    } 
}