import { ADD_TODO, TOGGLE_TODO} from '../actions/index';

let nextId = 1;

const todoListReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            const newTodo = {
                id: nextId++,
                text: action.text,
                done: false,
            }
            return [...state, newTodo]
        case 'TOGGLE_TODO':
            action.todoId
            // Podemos utilizar o metodo map, pois ele ira retornar sempre correto
            return state.map(todo => {
                if (todo.id === action.todoId)
                    // return Object.assigng({}, todo, { done: !todo.done }) // O --> ! <-- eh utilizado para negacao.
                    return {
                        ...todo,
                        done: !todo.done
                    };
                return todo; // caso nao altere o meu state, preciso retornar o que recebi
            });
        default:
            return state;
    }
}

export default todoListReducer;
