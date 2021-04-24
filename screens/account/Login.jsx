import React from "react";
import { Image, StyleSheet, View } from "react-native";
import LoginForm from "../../components/account/LoginForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../assets/logo.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.container}>
        <LoginForm />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    width: "100%",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    marginHorizontal: 40,
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
