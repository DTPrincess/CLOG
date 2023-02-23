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
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Add({ navigation }) {
  //추가할 옷 데이터↓↓ (date, wear 추후에 구현 예정)
  const [data, setData] = useState({
    season: "",
    category: "",
    name: "",
    brand: "",
    price: 0,
  });

  const checkboxStyles = {
    fillColor: "white",
    unfillColor: "black",
    textStyle: {
      textDecorationLine: "none",
    },
    width: "50%",
    paddingBottom: 7,
  };

  const seasons = [
    {
      id: 0,
      text: "Spring",
      ...checkboxStyles,
    },
    {
      id: 1,
      text: "Summer",
      ...checkboxStyles,
    },
    {
      id: 2,
      text: "Fall",
      ...checkboxStyles,
    },
    {
      id: 3,
      text: "Winter",
      ...checkboxStyles,
    },
  ];

  const clothes = [
    {
      id: 0,
      text: "Top",
      ...checkboxStyles,
    },
    {
      id: 1,
      text: "Bottom",
      ...checkboxStyles,
    },
    {
      id: 2,
      text: "Outer",
      ...checkboxStyles,
    },
    {
      id: 3,
      text: "Acc",
      ...checkboxStyles,
    },
  ];

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
              <BouncyCheckboxGroup data={seasons} style={styles.checkbox} />
            </View>
            <View style={styles.category}>
              <Text style={styles.categoryText}>Category</Text>
              <BouncyCheckboxGroup data={clothes} style={styles.checkbox} />
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
              <BouncyCheckbox
                onPress={() => {}}
                fillColor="white"
                unfillColor="black"
                style={{
                  flex: 1,
                  marginLeft: 15,
                }}
                disableText
                textStyle={{
                  textDecorationLine: "none",
                }}
                innerIconStyle={{
                  borderRadius: 0,
                }}
                iconStyle={{
                  borderRadius: 0,
                }}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.plus}>
          <Ionicons name="checkmark-circle" size={75} color="white" />
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
    width: "70%",
    paddingBottom: 5,
    paddingHorizontal: 5,
  },

  plus: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 35,
  },

  checkbox: {
    width: "70%",
    flexWrap: "wrap",
  },
});
