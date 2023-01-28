import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.notification}>
          <AntDesign name="notification" size={40} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.mypage}>
          <AntDesign name="meh" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.season}>Spring </Text>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Top</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Bottom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Outer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Acc</Text>
        </TouchableOpacity>

        <Text style={styles.season}>Summer</Text>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Top</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Bottom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Outer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Acc</Text>
        </TouchableOpacity>

        <Text style={styles.season}>Fall</Text>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Top</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Bottom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Outer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Acc</Text>
        </TouchableOpacity>

        <Text style={styles.season}>Winter</Text>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Top</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Bottom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Outer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <Text style={styles.list}>Acc</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.plus}
        onPress={() => navigation.navigate("List")}
      >
        <AntDesign name="pluscircle" size={60} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  header: {
    paddingTop: 50,
    backgroundColor: "black",
  },

  notification: {
    paddingLeft: 250,
  },

  mypage: {
    paddingLeft: 290,
  },

  body: {
    paddingTop: 10,
    paddingBottom: 80,
    backgroundColor: "black",
  },

  season: {
    fontSize: 30,
    fontWeight: "600",
    float: "left",
    color: "white",
  },

  list: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },

  plus: {
    backgroundcolor: "white",
    borderRadius: 60,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 40,
    alignItems: "center",
  },
});
