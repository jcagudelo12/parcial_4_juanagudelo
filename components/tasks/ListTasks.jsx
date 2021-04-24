import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";

export default function ListTasks({ tasks, navigation }) {
  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(index) => index.toString()}
        onEndReachedThreshold={0.5}
        renderItem={(task) => <Task task={task} />}
      />
    </View>
  );
}

const Task = ({ task }) => {
  const { id, name, user } = task.item;

  const goTask = () => {
    console.log("Presioné la tarea: ", name);
  };
  return (
    <TouchableOpacity onPress={goTask}>
      <View style={styles.viewTask}>
        <View style={styles.viewTaskInformation}>
          <Text style={styles.taskTitle}>{name}</Text>
        </View>
      </View>
      <Divider style={styles.divider} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewTask: {
    flexDirection: "row",
    margin: 10,
  },
  viewTaskInformation: {
    width: "100%",
    paddingRight: 4,
  },
  taskTitle: {
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  divider: {
    backgroundColor: "#442484",
    margin: 10,
  },
});
