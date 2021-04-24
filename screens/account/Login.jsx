import React from "react";
import { StyleSheet, View } from "react-native";
// import { Divider } from "react-native-elements";
import LoginForm from "../../components/account/LoginForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login() {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <LoginForm />
      </View>
      {/* <Divider style={styles.divider} /> */}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: "100%",
    marginBottom: 20,
  },
  container: {
    marginHorizontal: 40,
  },
  divider: {
    backgroundColor: "#442484",
    margin: 40,
  },
  register: {
    marginTop: 15,
    marginHorizontal: 10,
    alignSelf: "center",
  },
  btnRegister: {
    color: "#442484",
    fontWeight: "bold",
  },
});
