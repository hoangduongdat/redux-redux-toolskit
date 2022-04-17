// const initState = {
//     search: '',
//     status: 'All',
//     priority: []
// }

// const filtersReducer = (state =initState, action) => {
//     switch (action.type) {
//         case 'filters/searchTodo':
//             return {              
//                 ...state,
//                 search: action.payload
//             }
//         case 'filters/statusTodo' :
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filters/priorityTodo' :
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         default: return state
//     }
// }

// export default filtersReducer


import { createSlice } from "@reduxjs/toolkit";

 const filtersSlice= createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        searchTodo: (state, action) => {
            state.search=action.payload;
        },
        statusTodo: (state, action) => {
            state.status=action.payload;
        },
        priorityTodo: (state,action) => {
            state.priority=action.payload;
        }
    }
})
export default filtersSlice