import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import Toast from "react-native-easy-toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "../../components/Loading";

import ActionsTaskForm from "../../components/tasks/ActionsTaskForm";

export default function ActionsTask({ navigation, route }) {
  const toastRef = useRef();
  return (
    <KeyboardAwareScrollView>
      <ActionsTaskForm
        toastRef={toastRef}
        navigation={navigation}
        route={route}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({});
