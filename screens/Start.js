import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import title from '../assets/title.png';
import start from '../assets/start.png';
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
        <Image style={styles.title} source={title} />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
      >
        <Image style={styles.start} source={start} />
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
    height: 250,
    width: 250,
  },

  start: {
    //backgroundColor: "yellow",
    height: 100,
    width: 250,
    marginBottom: 25,
  },
  login: {
    fontSize: 16,
    fontWeight: "500",
  },
});
