import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
<<<<<<< HEAD
=======
import { FontAwesome } from "@expo/vector-icons";
>>>>>>> 81679785df191f6a8cb6e362475fe82b572b1679

export default function Home({ navigation }) {
  const [clothes, setClothes] = useState(["top", "Bottom", "Outer", "Acc"]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.menubar}>
        <TouchableOpacity style={styles.notification}>
          <Ionicons name="notifications" size={35} color="white" />
        </TouchableOpacity>

<<<<<<< HEAD
        <TouchableOpacity  onPress={() => navigation.navigate("Info")}>
          <Ionicons name="person" size={40} color="white" />
=======
        <TouchableOpacity style={styles.user}>
          <FontAwesome name="user-circle-o" size={35} color="white" />
>>>>>>> 81679785df191f6a8cb6e362475fe82b572b1679
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
<<<<<<< HEAD
        <View style={styles.season2}>
          <View style={styles.body2}>
            <Text style={styles.season}>Spring </Text>
=======
        <View style={styles.seasonContainer}>
          <View style={styles.season}>
            <Text style={styles.seasonText}>Spring</Text>

            {clothes.map((value, key) => (
              <TouchableOpacity style={styles.clothes} key={key}>
                <Text style={styles.clothesText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.season}>
            <Text style={styles.seasonText}>Summer</Text>

            {clothes.map((value, key) => (
              <TouchableOpacity style={styles.clothes} key={key}>
                <Text style={styles.clothesText}>{value}</Text>
              </TouchableOpacity>
            ))}
>>>>>>> 81679785df191f6a8cb6e362475fe82b572b1679
          </View>

          <View style={styles.season}>
            <Text style={styles.seasonText}>Fall</Text>

<<<<<<< HEAD
        <View style={styles.season2}>
          <View style={styles.body2}>
            <Text style={styles.season}>Summer</Text>
          </View>

          {clothes.map((value, key) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("List")}
              style={styles.list}
              key={key}
            >
              <Text style={styles.list}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.season2}>
          <View style={styles.body2}>
            <Text style={styles.season}>Fall</Text>
=======
            {clothes.map((value, key) => (
              <TouchableOpacity style={styles.clothes} key={key}>
                <Text style={styles.clothesText}>{value}</Text>
              </TouchableOpacity>
            ))}
>>>>>>> 81679785df191f6a8cb6e362475fe82b572b1679
          </View>

<<<<<<< HEAD
        <View style={styles.season2}>
          <View style={styles.body2}>
            <Text style={styles.season}>Winter</Text>
          </View>
          {clothes.map((value, key) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("List")}
              style={styles.list}
              key={key}
            >
              <Text style={styles.list}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.plus}
          onPress={() => navigation.navigate("List")}
        >
          <AntDesign name="pluscircle" size={70} color="white" />
=======
          <View style={styles.season}>
            <Text style={styles.seasonText}>Winter</Text>

            {clothes.map((value, key) => (
              <TouchableOpacity style={styles.clothes} key={key}>
                <Text style={styles.clothesText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <AntDesign name="pluscircle" size={60} color="white" />
>>>>>>> 81679785df191f6a8cb6e362475fe82b572b1679
        </TouchableOpacity>
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

<<<<<<< HEAD
  header: {
    paddingTop: 50,
    paddingLeft: 280,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  body: {
    backgroundColor: "black",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
    marginTop: 60,
    justifyContent: "space-evenly",
  },

  body2: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  season2: {
    flexDirection: "column",
=======
  menubar: {
    justifyContent: "flex-end",
    flexDirection: "row",
    width: "100%",
    marginTop: 60,
    paddingRight: 15,
  },

  notification: {
    paddingHorizontal: 3,
  },

  user: {
    paddingHorizontal: 3,
  },

  body: {
    flex: 1,
    justifyContent: "center",
  },

  seasonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15,
>>>>>>> 81679785df191f6a8cb6e362475fe82b572b1679
  },

  season: {
    flexDirection: "column",
    flexBasis: "50%",
    flexWrap: "nowrap",
    paddingVertical: 10,
  },

  seasonText: {
    fontSize: 45,
    fontWeight: "600",
    color: "white",
  },

  clothes: {
    marginVertical: 1,
  },

  clothesText: {
    color: "white",
    fontSize: 27,
    fontWeight: "600",
  },

  footer: {
<<<<<<< HEAD
    marginTop: 90,
    paddingLeft: 150,
    backgroundColor: "black",
  },

  plus: {
    borderRadius: 60,
    justifyContent: "center",
=======
    alignItems: "center",
    marginTop: 20,
    marginBottom: 35,
>>>>>>> 81679785df191f6a8cb6e362475fe82b572b1679
  },
});
