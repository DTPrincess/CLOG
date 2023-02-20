import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.mypage}>
        <Text style={styles.title}> CLOG</Text>
        <Text style={styles.title1}> MYPAGE</Text>
      </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" size={45} color="white" />
        </TouchableOpacity>
      </View>


      <View style={styles.body}>
        <View style={styles.pic}>
          <TouchableOpacity>
            <AntDesign name="picture" size={40} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.Info}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.email}>E-mail</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        <Text style={styles.heart}> My ♥</Text>
        <Text style={styles.list}> 내 게시물</Text>
        <Text style={styles.codi}> 코디</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  mypage:{
    marginTop: 50,


  },
  header: {

    paddingLeft: 28,

    flexDirection: "row",
    color: "white",
  },

  title: {
    paddingLeft: 20,
    flexDirection: "row",
    color: "white",
    fontSize: 25,
    fontWeight: "700",
  },

  title1: {

    paddingLeft: 8,
    flexDirection: "row",
    color: "white",
    fontSize: 25,
    fontWeight: "700",
  },

  body: {
    flexDirection: "row",
  },

  pic: {
    marginTop: 60,
    marginLeft: 10,
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 40,
  },

  Info: {
    marginTop: 60,
    marginLeft: 20,
    justifyContent: "space-evenly",
  },

  name: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
  },

  email: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
  },

  footer: {
    height: 250,
    justifyContent: "space-between",
  },

  line: {
    flex: 1,
  },
  heart: {
    color: "white",
    fontWeight: "800",
    fontSize: 25,
  },

  list: {
    color: "white",
    fontWeight: "900",
    fontSize: 25,
  },

  codi: {
    color: "white",
    fontWeight: "900",
    fontSize: 25,
  },

  separator: {
    Color: "white",
    height: 10,
  },
});
