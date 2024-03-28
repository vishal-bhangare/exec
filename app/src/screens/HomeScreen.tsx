import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import PendingScreen from "./PendingScreen";
import AddTodoScreen from "./AddTodoScreen";
import CompleteScreen from "./CompleteScreen";
import WelcomeScreen from "./WelcomeScreen";

export default function HomeScreen() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({});
