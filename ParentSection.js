import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ParentSection() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <StatusBar style="auto" />
      <View>
        <Text>This is PARENT section</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7A7CA",
    alignItems: "center",
    justifyContent: "center",
  },
});
