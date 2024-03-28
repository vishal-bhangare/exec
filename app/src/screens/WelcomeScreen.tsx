import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../utils/colors";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

export default function WelcomeScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.loginContainer}>
        <AppTextInput icon="security" />
        <AppButton title={"Open"} onPress={() => {}} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background.default,
    padding: 10,
  },
  logoContainer: {
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    flexGrow: 3,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: colors.text.default,
  },
});
