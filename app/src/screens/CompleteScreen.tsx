import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import colors from "../../utils/colors";
import DummyData from "../../Dummy";
import ListItem from "../components/ListItem";
import AppButton from "../components/AppButton";

export default function CompleteScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons.Button
          name="playlist-plus"
          backgroundColor={colors.buttons.secondary.background}
          size={35}
          style={{ paddingRight: 0 }}
        />
        <Text style={styles.title}>Completed</Text>
      </View>
      <ScrollView
        style={styles.todos}
        contentContainerStyle={{
          rowGap: 10,
        }}
      >
        <FlatList
          style={styles.todos}
          contentContainerStyle={{
            gap: 10,
          }}
          data={DummyData.filter((todo) => todo.status)}
          keyExtractor={(todo) => todo._id}
          renderItem={(todo) => (
            <ListItem todo={todo} renderLeftActions={() => <View></View>} />
          )}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.default,
    color: colors.text.default,
    flex: 1,
    padding: 10,
    gap: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.text.default,
  },
  todos: {
    flex: 1,
  },
  footer: {},
  footerTitle: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.text.secondary,
  },
});
