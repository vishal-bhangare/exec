import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../utils/colors";

export default function ListItemDoneAction({ onPress }: { onPress: () => void }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="check" size={30} color={colors.icons.success} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.success,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
