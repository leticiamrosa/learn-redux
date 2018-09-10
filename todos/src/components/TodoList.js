import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TodoListItem from './TodoListItem';

import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
    <View>
    {/* Funcao map para listar = ng-repeat="text in todo.text" */}
       {todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
    </View>
);

const styles = StyleSheet.create({

})


const mapStateToProps = (state) => {
    const { todos } = state;
    return { todos };
}

export default connect(mapStateToProps)(TodoList);