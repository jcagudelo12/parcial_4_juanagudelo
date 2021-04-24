import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Toast from "react-native-easy-toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "../../components/Loading";

import AddTaskForm from "../../components/tasks/AddTaskForm";

export default function AddTask({ navigation }) {
  const toastRef = useRef();
  const [loading, setLoading] = useState(false);
  return (
    <KeyboardAwareScrollView>
      <AddTaskForm
        toastRef={toastRef}
        setLoading={setLoading}
        navigation={navigation}
      />
      <Loading isVisible={loading} text="Creando tarea..." />
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
