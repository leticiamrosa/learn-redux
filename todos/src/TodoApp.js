import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import TodoForm from "./components/TodoForm.js";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

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

// const styles = StyleSheet.create({
//   container: {
//     flex: 0,
//     height: 80,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 30,
//     backgroundColor: '#f2f2f2',
//   },
//   headerTitle: {
//     color: "#f2f2f2",
//     fontWeight: "500",
//     fontSize: 24
//   },
//   content: {
//       flex: 1,
//       backgroundColor: '#eee',
//   }
// });
