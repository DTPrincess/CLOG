import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [clothes, setClothes] = useState(["top", "Bottom", "Outer", "Acc"]);

  return (
    <View style={styles.container}>
          <StatusBar style="light" />

          <View style={styles.header}>
          
                  <TouchableOpacity style={styles.notification}>
                      <Ionicons name="notifications" size={35} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity  onPress={() => navigation.navigate("Info")} style={styles.user}>
                      <FontAwesome name="user-circle-o" size={35} color="white" />
                  </TouchableOpacity>
              </View>

          <View style={styles.body}>

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

              </View>
              <View style={styles.season}>
                  <Text style={styles.seasonText}>Fall</Text>


                  {clothes.map((value, key) => (
                      <TouchableOpacity style={styles.clothes} key={key}>
                          <Text style={styles.clothesText}>{value}</Text>
                      </TouchableOpacity>
                  ))}
              </View>


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

  header: {
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
    alignItems: "center",
    marginTop: 20,
    marginBottom: 35,
  },
});