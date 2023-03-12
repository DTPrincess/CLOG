import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function List({ navigation }) {
  const [clothes, setClothes] = useState([
    "니트 조끼",
    "배색 후드집업",
    "앙고라 털 니트",
    "아가일 가디건",
    //, "옷1", "옷2", "옷3", "옷4", "옷5", "옷6"
  ]);

  
  const doIt = () => {
    if(clothes[0]==="top"){
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
        <Text style={styles.season}>{doIt}</Text>
        <Text style={styles.category}>{doIt}</Text>
      </View>

      <ScrollView>
        {clothes.map((value, key) => (
          <TouchableOpacity style={styles.content} key={key}>
            <Text style={styles.clothes}>{value}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate("Add")}
        style={styles.plus}
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
  season: {
    fontSize: 48,
    fontWeight: "600",
    color: "white",
  },
  category: {
    marginLeft: 5,
    fontSize: 28,
    fontWeight: "600",
    color: "white",
  },
  content: {
    backgroundColor: "white",
    borderRadius: 30,
    marginHorizontal: 10,
    marginBottom: 12,
    paddingVertical: 17,
    paddingHorizontal: 17,
    alignItems: "center",
  },
  clothes: {
    fontSize: 18,
    fontWeight: "600",
  },
  plus: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 35,
  },
});