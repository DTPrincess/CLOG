import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [clothes, setClothes] = useState(["Top", "Bottom", "Outer", "Acc"]);

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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("List", {
              season: "All",
            })
          }
          style={styles.All}
        >
          <Text style={styles.seasonText}>All</Text>
        </TouchableOpacity>
        <View style={styles.seasonContainer}>
          <View style={styles.season}>
            <Text style={styles.seasonText}>Spring</Text>

            {clothes.map((value, key) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("List", {
                    season: "Spring",
                    category: value,
                  })
                }
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
                onPress={() =>
                  navigation.navigate("List", {
                    season: "Summer",
                    category: value,
                  })
                }
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
                onPress={() =>
                  navigation.navigate("List", {
                    season: "Fall",
                    category: value,
                  })
                }
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
                onPress={() =>
                  navigation.navigate("List", {
                    season: "Winter",
                    category: value,
                  })
                }
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

  All: {
    alignSelf: "center",
    //marginHorizontal: 15,
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
