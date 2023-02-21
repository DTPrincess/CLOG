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
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Add({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.home}
        >
          <Entypo name="home" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.notification}>
          <Ionicons name="notifications" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Info")}
          style={styles.user}
        >
          <FontAwesome name="user-circle-o" size={35} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.add}>Add</Text>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <View style={styles.image}>
            <TouchableOpacity style={styles.addImage}>
              <AntDesign name="pluscircle" size={60} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.category}>
              <Text style={styles.categoryText}>Season</Text>
              <BouncyCheckbox
                onPress={() => {}}
                fillColor="white"
                unfillColor="black"
                text="Spring"
                textStyle={{
                  textDecorationLine: "none",
                }}
              />
              <BouncyCheckbox
                onPress={() => {}}
                fillColor="white"
                unfillColor="black"
                text="Summer"
                textStyle={{
                  textDecorationLine: "none",
                }}
              />
            </View>
            <View style={styles.category}>
              <Text style={styles.categoryText}> </Text>
              <BouncyCheckbox
                onPress={() => {}}
                fillColor="white"
                unfillColor="black"
                text="Fall"
                textStyle={{
                  textDecorationLine: "none",
                }}
              />
              <BouncyCheckbox
                fillColor="white"
                unfillColor="black"
                text="Winter"
                textStyle={{
                  textDecorationLine: "none",
                }}
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  menuBar: {
    //justifyContent: "flex-end",
    flexDirection: "row",
    width: "100%",
    marginTop: 60,
    paddingHorizontal: 15,
  },

  home: {
    flex: 1,
    paddingHorizontal: 3,
  },

  notification: {
    paddingHorizontal: 3,
  },

  user: {
    paddingHorizontal: 3,
  },

  header: {
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
    fontSize: 16,
    borderBottomColor: "white",
    borderWidth: 2,
    width: 220,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },

  plus: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 35,
  },
});
