import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.body}>
        <Text style={styles.title}>CLOG</Text>
        <Text style={styles.subtitle}>나만의 옷장 기록</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("List")}
        style={styles.footer}
      >
        <Text style={styles.login}>게스트 로그인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 48,
    fontWeight: "600",
  },
  subtitle: {
    color: "white",
    fontWeight: "500",
  },
  footer: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 80,
    paddingVertical: 15,
    marginBottom: 45,
  },
  login: {
    fontSize: 16,
    fontWeight: "500",
  },
});
