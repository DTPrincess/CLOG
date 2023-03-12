import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import List from "List";

export default function Home({ navigation }) {
  const [clothes, setClothes] = useState(["top", "Bottom", "Outer", "Acc"]);

  const doIt = () => {
    if(clothes[0]===""){
    setClothes("Top");
    }
    else if(clothes[1]==="Bottom"){
    setClothes("Bottom");
    }
    else if(clothes[2]==="Outer"){
    setClothes("Outer");
    }
    else{
    setClothes("Acc");
    }
  };


  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.menuBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.menuIcon}
        >
          <AntDesign name="left" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.seasonContainer}>
          <View style={styles.season}>
            <Text style={styles.seasonText}>Spring</Text>

            {clothes.map((value, key) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("List")}
                style={styles.clothes}
                key={key}
              >
                <Text style={styles.clothesText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.season}>
            <Text style={styles.seasonText}>Summer</Text>

            {clothes.map((value, key) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("List")}
                style={styles.clothes}
                key={key}
              >
                <Text style={styles.clothesText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.season}>
            <Text style={styles.seasonText}>Fall</Text>

            {clothes.map((value, key) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("List")}
                style={styles.clothes}
                key={key}
              >
                <Text style={styles.clothesText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.season}>
            <Text style={styles.seasonText}>Winter</Text>

            {clothes.map((value, key) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("List")}
                style={styles.clothes}
                key={key}
              >
                <Text style={styles.clothesText}>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
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
    flexDirection: "row",
    width: "100%",
    marginTop: 60,
    paddingHorizontal: 10,
  },

  menuIcon: {
    flex: 1,
  },

  body: {
    flex: 1,
    justifyContent: "center",
  },

  seasonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15,
    marginBottom: 40,
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
    paddingVertical: 1,
  },
});