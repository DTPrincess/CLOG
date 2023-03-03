import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [clothes, setClothes] = useState(["top", "Bottom", "Outer", "Acc"]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.menuBar}>
        <TouchableOpacity style={styles.home}>
          <Entypo name="home" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuIcon}>
          <Ionicons name="notifications" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Info")}
          style={styles.menuIcon}
        >
          <FontAwesome name="user-circle-o" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Menu")}
          style={styles.menuIcon}
        >
          <Feather name="menu" size={35} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyText}>온도 / 날씨</Text>
      </View>
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

  menuBar: {
    //justifyContent: "flex-end",
    flexDirection: "row",
    width: "100%",
    marginTop: 60,
    paddingHorizontal: 10,
  },

  home: {
    flex: 1,
    paddingHorizontal: 3,
  },

  menuIcon: {
    paddingHorizontal: 3,
  },

  body: {
    flex: 1,
    justifyContent: "center",
  },

  bodyText: {
    color: "white",
  },
});
