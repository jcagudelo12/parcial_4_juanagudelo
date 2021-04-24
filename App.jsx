import React from "react";
import TaskStack from "./navigations/TaskStack";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

export default function App() {
  return <TaskStack />;
}
