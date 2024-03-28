import React, { ReactNode } from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ViewStyle } from "react-native";

interface Props {
  children: ReactNode;
  style?: ViewStyle;
}

export default function Screen({ children, style }: Props) {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
