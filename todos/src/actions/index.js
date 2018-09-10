// boas praticas usar aqui apenas para exportas as actions

const ADD_TODO = 'ADD_TODO';
// export const addTodo = text => ({ // funcao que recebe o que a action precisa pra funcionar
//     type: ADD_TODO,
//     text: text // equivalente a text: text | key:value
// });

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

