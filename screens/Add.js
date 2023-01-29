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

export default function Add( {navigation}) {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.add}>Add</Text>
      </View>
     <View style={styles.container2}>
       <View style={styles.picture}>
        <TouchableOpacity 
        style={styles.pictureplus}
        >
        <AntDesign name="pluscircle" size={60} color="black" />
      </TouchableOpacity>
       </View>
      </View>
      

      <View>
        <Text style={styles.category}>Season</Text>
        <Text style={styles.category}>Category</Text>
        <Text style={styles.category}>Name</Text>
        <Text style={styles.category}>Brand</Text>
        <Text style={styles.category}>Price</Text>
        <Text style={styles.category}>Date</Text>
        <Text style={styles.category}>Wear</Text>
        <Text style={styles.category}>Washed</Text>
      </View>

      <TouchableOpacity 
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
  
  container2: {
    flex:1,
    backgroundcolor:"black",
    alignItems : "center",
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
  category: {
    marginLeft: 5,
    fontSize: 28,
    fontWeight: "400",
    color: "white",
  },
  plus: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 35,
  },
  
  picture: {
    alignitems: "center",
    width:200,
    height:200,
    flex:0.8,
    backgroundColor:"white",
    borderRadius:30,
  },

    pictureplus: {
    alignItems: "center",
    marginTop: 55,
  },
  
});
