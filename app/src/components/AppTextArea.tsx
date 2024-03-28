import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../utils/colors";

interface Props {
  numberOfLines: number;
  [x: string]: any;
}

function AppTextarea({ numberOfLines, ...otherProps }: Props) {
  return (
    <View style={styles.container}>
      <TextInput multiline={true} numberOfLines={numberOfLines} placeholderTextColor={colors.text.secondary} style={styles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.element,
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: colors.text.default,
    width: "100%",
    maxHeight: 200,
  },
});

export default AppTextarea;
