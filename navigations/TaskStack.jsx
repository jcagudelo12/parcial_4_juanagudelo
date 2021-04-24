import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/account/Login";
import Tasks from "../screens/tasks/Tasks";
import AddTask from "../screens/tasks/AddTask";
import ActionsTask from "../screens/tasks/ActionsTask";

const Stack = createStackNavigator();

export default function TaskStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ title: "Iniciar sesión" }}
        />
        <Stack.Screen
          name="tasks"
          component={Tasks}
          options={{ title: "Tareas" }}
        />
        <Stack.Screen
          name="add-task"
          component={AddTask}
          options={{ title: "Agregar tarea" }}
        />
        <Stack.Screen
          name="actions-task"
          component={ActionsTask}
          options={{ title: "Editar tarea" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
