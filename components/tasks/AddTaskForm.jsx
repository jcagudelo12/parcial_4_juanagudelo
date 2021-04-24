import { isEmpty } from "lodash";
import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Button, Input } from "react-native-elements";

import { addDocumentWithoutId, getCurrentUser } from "../../utils/actions";

export default function AddTaskForm({ toastRef, setLoading, navigation }) {
  const [formData, setFormData] = useState(defaultFormValues());
  const [errorName, setErrorName] = useState(null);

  const addTask = async () => {
    if (!validForm()) {
      return;
    }

    setLoading(true);
    const task = {
      name: formData.name,
      user: getCurrentUser().uid,
    };
    console.log(task);
    const responseAddDocument = await addDocumentWithoutId("tasks", task);
    setLoading(false);
    if (!responseAddDocument.statusResponse) {
      toastRef.current.show(
        "Error al grabar la tarea, por favor intenta más tarde.",
        3000
      );
      return;
    }

    navigation.navigate("tasks");
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
        title="Adicionar Terea"
        onPress={addTask}
        buttonStyle={styles.btnAddTask}
      />
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

const defaultFormValues = () => {
  return {
    name: "",
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
  btnAddTask: {
    margin: 20,
    backgroundColor: "#442484",
  },
});
