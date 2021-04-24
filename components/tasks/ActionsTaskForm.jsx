import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { StyleSheet, ScrollView, View, Alert } from "react-native";
import { Button, Input } from "react-native-elements";

import {
  updateDocument,
  deleteDocument,
  getCurrentUser,
} from "../../utils/actions";

import Loading from "../Loading";

export default function ActionsTaskForm({ toastRef, navigation, route }) {
  const { id, name } = route.params;
  const [formData, setFormData] = useState(defaultFormValues(name));
  const [errorName, setErrorName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [textLoading, setTextLoading] = useState();

  const editTask = async () => {
    if (!validForm()) {
      return;
    }

    setLoading(true);
    setTextLoading("Actualizando tarea...");
    const responseUpdateDocument = await updateDocument("tasks", id, {
      name: formData.name,
    });
    setLoading(false);
    if (!responseUpdateDocument.statusResponse) {
      toastRef.current.show(
        "Error al editar la tarea, por favor intenta más tarde.",
        3000
      );
      return;
    }

    navigation.navigate("tasks");
  };

  const deleteTask = async () => {
    if (!validForm()) {
      return;
    }
    Alert.alert("Esta seguro de eliminar la tarea: ", formData.name, [
      {
        text: "NO",
        style: "cancel",
      },
      {
        text: "SI",
        onPress: async () => {
          setLoading(true);
          setTextLoading("Eliminando tarea...");
          const responseDeleteDocument = await deleteDocument("tasks", id);
          setLoading(false);
          if (!responseDeleteDocument.statusResponse) {
            toastRef.current.show(
              "Error al eliminar la tarea, por favor intenta más tarde.",
              3000
            );
            return;
          }
          navigation.navigate("tasks");
        },
      },
    ]);
  };

  const validForm = () => {
    clearErrors();
    let isValid = true;

    if (isEmpty(formData.name)) {
      setErrorName("Debes ingresar el nombre de la tarea.");
      isValid = false;
    }
    return isValid;
  };

  const clearErrors = () => {
    setErrorName(null);
  };

  return (
    <ScrollView style={styles.viewContainer}>
      <FormAdd
        formData={formData}
        setFormData={setFormData}
        errorName={errorName}
      />

      <Button
        title="Editar Tarea"
        onPress={editTask}
        buttonStyle={styles.btnEditTask}
      />
      <Button
        title="Completar Tarea"
        onPress={deleteTask}
        buttonStyle={styles.btnDeleteTask}
      />
      <Loading isVisible={loading} text={textLoading} />
    </ScrollView>
  );
}

const FormAdd = ({ formData, setFormData, errorName }) => {
  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };
  return (
    <View style={styles.viewForm}>
      <Input
        placeholder="Nombre de la tarea..."
        defaultValue={formData.name}
        onChange={(e) => onChange(e, "name")}
        multiline
        containerStyle={styles.textArea}
        errorMessage={errorName}
      />
    </View>
  );
};

const defaultFormValues = (name) => {
  return {
    name: name,
    user: "",
  };
};

const styles = StyleSheet.create({
  viewContainer: {
    height: "100%",
    marginTop: "50%",
  },
  viewForm: {
    marginHorizontal: 10,
  },
  textArea: {
    height: 100,
    width: "100%",
  },
  btnEditTask: {
    margin: 20,
    backgroundColor: "#442484",
  },
  btnDeleteTask: {
    margin: 20,
    backgroundColor: "red",
  },
});
