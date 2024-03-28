import { Button, StyleSheet, Switch, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

import Screen from "../components/Screen";
import colors from "../../utils/colors";
import AppTextInput from "../components/AppTextInput";
import AppTextarea from "../components/AppTextArea";
import AppButton from "../components/AppButton";

export default function AddTodoScreen() {
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Low",
        value: "Low",
      },
      {
        id: "2",
        label: "Medium",
        value: "Medium",
      },
      {
        id: "3",
        label: "High",
        value: "High",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();

  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Add new Todo</Text>
      <View style={styles.form}>
        <AppTextInput placeholder="Title" />
        <AppTextarea numberOfLines={2} placeholder="Description" />
        <View style={styles.priority}>
          <Text style={styles.priorityTitle}>Priority:</Text>
          <RadioGroup
            containerStyle={styles.priorities}
            labelStyle={{ color: "white" }}
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
          />
        </View>
        <View style={styles.actionBtns}>
          <AppButton style={styles.addBtn} title={"Add"} onPress={() => {}} />
          <AppButton
            title={"Cancel"}
            onPress={() => {}}
            style={styles.cancelBtn}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
    padding: 12,
  },
  title: {
    fontSize: 24,
    color: colors.text.default,
    fontWeight: "700",
    paddingVertical: 20,
  },
  form: {
    flex: 1,
    gap: 10,
  },
  priority: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  priorityTitle: {
    fontSize: 18,
    color: colors.text.default,
  },
  priorities: {
    // flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  actionBtns: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    gap: 10,
  },
  addBtn: {
    flexGrow: 1,
  },
  cancelBtn: { flexGrow: 1 },
});
