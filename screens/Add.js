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

export default function Add( {navigation}) {
  return (
    <ScrollView>
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

      <View style={styles.container3}>
        <Text style={styles.category}>Season</Text>
        <TextInput placeholder={"추후 checkbox로 변경"} style={styles.textinput}/>
        <Text style={styles.category}>Category</Text>
        <TextInput placeholder={"추후 checkbox로 변경"} style={styles.textinput}/>
        <Text style={styles.category}>Name</Text>
        <TextInput style={styles.textinput}/>
        <Text style={styles.category}>Brand</Text>
        <TextInput style={styles.textinput}/>
        <Text style={styles.category}>Price</Text>
        <TextInput style={styles.textinput}/>
        <Text style={styles.category}>Date</Text>
        <TextInput style={styles.textinput}/>
        <Text style={styles.category}>Wear</Text>
        <TextInput style={styles.textinput}/>
        <Text style={styles.category}>Washed</Text>
        <TextInput placeholder={"추후 checkbox로 변경"} style={styles.textinput}/>
        </View>

      <TouchableOpacity 
        style={styles.plus}
        >
        <AntDesign name="pluscircle" size={60} color="white" />
      </TouchableOpacity>
    </View>
    </ScrollView>
    
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

  container3: {
    flex:1,
    marginTop: 30,
    backgroundColor: "black",
    flexDirection:"row",
    flexWrap: "wrap",
    alignItems: "flex-start",
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
    alignItems : "center",
    width: "40%",
    height: "13%",
    alignItems: "flex-start",
  },
  plus: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 35,
  },
  
  picture: {
    alignitems: "center",
    width:200,
    height:190,
    flex:0.8,
    backgroundColor:"white",
    borderRadius:30,
  },

    pictureplus: {
    alignItems: "center",
    marginTop: 55,
  },

  textinput : {
    backgroundColor:"white",
    borderRadius:30,
    paddingVertical: 5,
    paddingHorizontal:10,
    width: "50%",
    marginTop: 5,
  }
  
});