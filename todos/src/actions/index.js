// boas praticas usar aqui apenas para exportas as actions
// Sao as acoes que o usuario ira tomar

export const ADD_TODO = 'ADD_TODO';
// export const addTodo = text => ({ // funcao que recebe o que a action precisa pra funcionar
//     type: ADD_TODO,
//     text: text // equivalente a text: text | key:value
// });

// Adicionar nova lista
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

// Marcar done
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const toggleTodo = todoId => ({
    type: TOGGLE_TODO,
    todoId
});
