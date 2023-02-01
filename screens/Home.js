import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [clothes, setClothes] = useState(["Top", "Bottom", "Outer", "Acc"]);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="notification" size={40} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
        <Ionicons name="person" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.season2}>
          <Text style={styles.season}>Spring </Text>

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
          <Text style={styles.season}>Summer</Text>
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
          <Text style={styles.season}>Fall</Text>
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
          <Text style={styles.season}>Winter</Text>
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
          </TouchableOpacity>
        </View>
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
    paddingLeft:280,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent:'space-between',
  },

  body: {
    backgroundColor: "black",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
    marginTop:60,
    justifyContent:'space-evenly',
  },

  season2: {
    flexDirection: "column",

  },

  season: {
    fontSize: 50,
    fontWeight: "500",
    float: "left",
    color: "white",
  },

  list: {
    fontSize: 40,
    fontWeight: "350",
    color: "white",
  },

  footer: {
    marginTop:90,
    paddingLeft:150,
    backgroundColor: "black",

  },

  plus: {
    borderRadius: 60,
    justifyContent:'center',
  },
});
