import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import title from '../assets/title.png';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.body}>
        <Image style={styles.image} source={title} />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.footer}
      >
        <Text style={styles.login}>시작하기</Text>
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

  image: {
    height: 220,
    width: 220,
  },

  footer: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginBottom: 45,
  },
  login: {
    fontSize: 16,
    fontWeight: "500",
  },
});
