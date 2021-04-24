import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/account/Login";
import Tasks from "../screens/tasks/Tasks";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
