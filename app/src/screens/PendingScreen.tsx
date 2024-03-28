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

import ListItem from "../components/ListItem";
import AppButton from "../components/AppButton";
import DummyData from "../../Dummy";
import ListItemDoneAction from "../components/ListItemDoneAction";

export default function PendingScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Todos</Text>
        <MaterialCommunityIcons.Button
          name="playlist-check"
          backgroundColor={colors.buttons.secondary.background}
          size={35}
          style={{ paddingRight: 0 }}
        />
      </View>
      <FlatList
        style={styles.todos}
        contentContainerStyle={{
          gap: 10,
        }}
        data={DummyData.filter((todo) => !todo.status)}
        keyExtractor={(todo) => todo._id}
        renderItem={(todo) => (
          <ListItem
            todo={todo}
            renderLeftActions={() => <ListItemDoneAction onPress={() => {}} />}
          />
        )}
      />

      {/* <ScrollView
        style={styles.todos}
        contentContainerStyle={{
          rowGap: 10,
        }}
      >
        
        {DummyData.filter((todo) => !todo.status).map((todo, i) => (
          <ListItem todo={todo} key={todo._id} />
        ))}
      </ScrollView> */}
      <View style={styles.footer}>
        <AppButton title="Add New" onPress={() => {}} />
      </View>
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
