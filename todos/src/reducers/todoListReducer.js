import { ADD_TODO } from '../actions';

const todoListReducer = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            const newTodo = {
                text: action.text
            }
            return [...state , newTodo] // une um array com o outro no ES6
        default:
            return state;
    }
}

export default todoListReducer;
