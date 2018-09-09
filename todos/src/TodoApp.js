import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TodoForm from "./components/TodoForm.js";

export default class TodoApp extends React.Component {
  render() {
    return (
      <View>
        <TodoForm />
      </View>
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
