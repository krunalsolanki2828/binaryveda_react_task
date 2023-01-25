const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
    todos: [],
}
/** cart slice for redux */
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        changeStatus: (state, action) => {
            const { id, isCompleted } = action.payload;
            const index = state.todos.findIndex(item => item.id === id);
            if(index !== -1) {
                state.todos[index].isCompleted = isCompleted;
            }
        }
    }
})

export const { addTodo, changeStatus } = todoSlice.actions;


export default todoSlice.reducer;
