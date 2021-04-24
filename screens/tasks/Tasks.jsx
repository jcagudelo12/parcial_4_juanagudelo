import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { useFocusEffect } from "@react-navigation/native";
import firebase from "firebase/app";
import Loading from "../../components/Loading";
import { getMoreTasks, getTasks, getCurrentUser } from "../../utils/actions";
import { size } from "lodash";
import ListTasks from "../../components/tasks/ListTasks";

export default function Tasks({ navigation }) {
  const [user, setUser] = useState(null);
  const [startTask, setStartTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      userInfo ? setUser(true) : setUser(false);
    });
  }, []);

  useFocusEffect(
    useCallback(async () => {
      async function getData() {
        setLoading(true);
        const response = await getTasks(getCurrentUser().uid);
        if (response.statusResponse) {
          setStartTask(response.startTask);
          setTasks(response.tasks);
        }
        setLoading(false);
      }
      getData();
    }, [])
  );

  return (
    <View style={styles.viewBody}>
      <Text style={styles.userText}>
        <Text style={styles.welcomeText}>Bienvenido: </Text>
        {getCurrentUser().email}
      </Text>
      {size(tasks) > 0 ? (
        <ListTasks tasks={tasks} navigation={navigation} />
      ) : (
        <View style={styles.notFoundView}>
          <Text style={styles.notFoundText}>No hay tareas registradas.</Text>
        </View>
      )}
      {user && (
        <Icon
          type="material-community"
          name="plus"
          color="#442484"
          reverse
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("add-task")}
        />
      )}
      <Loading isVisible={loading} text="Cargando tareas..." />
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
  welcomeText: {
    fontWeight: "bold",
  },
  userText: {
    alignSelf: "center",
    marginVertical: 10,
  },
  notFoundView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
