import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Add({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.add}>Add</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.image}>
          <TouchableOpacity style={styles.addImage}>
            <AntDesign name="pluscircle" size={60} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Season</Text>
            <TextInput
              placeholder={"추후 checkbox로 변경"}
              style={styles.textinput}
            />
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Category</Text>
            <TextInput
              placeholder={"추후 checkbox로 변경"}
              style={styles.textinput}
            />
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Name</Text>
            <TextInput style={styles.textinput} />
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Brand</Text>
            <TextInput style={styles.textinput} />
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Price</Text>
            <TextInput style={styles.textinput} />
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Date</Text>
            <TextInput style={styles.textinput} />
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Wear</Text>
            <TextInput style={styles.textinput} />
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Washed</Text>
            <TextInput
              placeholder={"추후 checkbox로 변경"}
              style={styles.textinput}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.plus}>
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
    marginTop: 60,
    marginBottom: 15,
    paddingLeft: 15,
  },

  add: {
    fontSize: 48,
    fontWeight: "600",
    color: "white",
  },

  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    justifyContent: "center",
    alignitems: "center",
    width: 200,
    height: 200,
    backgroundColor: "white",
    borderRadius: 30,
  },

  addImage: {
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    marginTop: 10,
  },

  category: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "baseline",
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
  },

  categoryText: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    marginRight: 10,
  },

  textinput: {
    color: "white",
    borderBottomColor: "white",
    borderWidth: 2,
    width: 230,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  plus: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 35,
  },
});
