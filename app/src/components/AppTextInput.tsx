import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../utils/colors";

interface Props {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  [x: string]: any;
}

function AppTextInput({ icon, ...otherProps }: Props) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.icons.default} style={styles.icon} />}
      <TextInput placeholderTextColor={colors.text.secondary} style={styles.text} {...otherProps} />
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
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: colors.text.default,
    width: "100%",
  },
});

export default AppTextInput;
