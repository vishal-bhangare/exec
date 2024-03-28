import { ListRenderItemInfo, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { ReactNode } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Todo from "../entities/Todo";
import colors from "../../utils/colors";

interface Props {
  todo: ListRenderItemInfo<Todo>;
  renderLeftActions: () => ReactNode;
}

export default function ListItem({ todo, renderLeftActions }: Props) {
  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      <TouchableHighlight underlayColor={colors.background.hover}>
        <View style={styles.container}>
          <Text style={styles.title}>{todo.item.title}</Text>
          <Text style={styles.description}>{todo.item.description}</Text>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.subtle,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.default,
  },
  description: {
    fontSize: 14,
    color: colors.text.secondary,
  },
});
