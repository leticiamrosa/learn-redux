import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const TodoListItem = ({ todo, onPressTodo }) => (
    <TouchableOpacity onPress={onPressTodo}>
      <View style={styles.line}>
        {/* We can find image from device user, with comp image */}
        <Text style={styles.textPeople}>
            { todo.text }
        </Text>
      </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  line: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#f7f7f7'
  },
  textPeople: {
    flex: 7,
    color: "#1b2834",
    fontSize: 24,
    paddingLeft: 16,
    fontWeight: "500"
  },
});

export default TodoListItem;
