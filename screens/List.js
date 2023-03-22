import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const STORAGE_KEY = "@Closet";

export default function List({ navigation, route }) {
  const [closet, setCloset] = useState({});

  useEffect(() => {
    loadClothes();
  }, []);

  const loadClothes = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    console.log(s);
    s !== null ? setCloset(JSON.parse(s)) : null;
  };

  const saveClothes = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  const deleteClothes = (key) => {
    Alert.alert("Delete", "정말 삭제하시겠습니까?", [
      { text: "아니옹..." },
      {
        text: "네!",
        style: "destructive",
        onPress: () => {
          const newClothes = { ...closet };
          delete newClothes[key];
          setCloset(newClothes);
          saveClothes(newClothes);
        },
      },
    ]);
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
        <Text style={styles.season}>{route.params.season}</Text>
        <Text style={styles.category}>{route.params.category}</Text>
      </View>

      <ScrollView>
        {Object.keys(closet).map((key) =>
          closet[key].season === route.params.season &&
          closet[key].category === route.params.category ? (
            <TouchableOpacity style={styles.content} key={key}>
              <Text style={styles.clothes}>{closet[key].name}</Text>
              <TouchableOpacity onPress={() => deleteClothes(key)}>
                <FontAwesome name="trash" size={18} color="lightgray" />
              </TouchableOpacity>
            </TouchableOpacity>
          ) : null
        )}
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
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 30,
    marginHorizontal: 10,
    marginBottom: 12,
    paddingVertical: 22,
    paddingHorizontal: 22,
    alignItems: "center",
  },
  clothes: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
  },
  plus: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 35,
  },
});
