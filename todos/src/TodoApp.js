import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStore } from 'redux';
import { Provider } from "react-redux";

import TodoForm from "./components/TodoForm.js";
import rootReducer from "./reducers";

import devToolsEnhancer from 'redux-devtools-extension';

const store = createStore(rootReducer, devToolsEnhancer);

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <TodoForm />
        </View>
      </Provider>
    );
  }
}

