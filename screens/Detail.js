import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import * as ImagePicker from "expo-image-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@Closet";
//수정 불가 (추후에 수정 기능 추가)
export default function Detail({ navigation, route }) {
  const [season, setSeason] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [wear, setWear] = useState(0);
  const [washed, setWashed] = useState(false);

  //추가할 옷 이미지
  const [image, setImage] = useState(null);

  const [closet, setCloset] = useState(null);

  useEffect(() => {
    loadClothes();
  }, []);

  useEffect(() => {
    if (closet) {
      loadClickedClothes();
    }
  }, [closet]);

  const loadClothes = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    console.log(`1번 ${s}`);
    s !== null ? setCloset(JSON.parse(s)) : null;
  };

  const loadClickedClothes = () => {
    setSeason(closet[route.params.key].season);
    setCategory(closet[route.params.key].category);
    setName(closet[route.params.key].name);
    setBrand(closet[route.params.key].brand);
    setPrice(closet[route.params.key].price);
    setWear(closet[route.params.key].wear);
    setWashed(closet[route.params.key].washed);
    setImage(closet[route.params.key].image);
  };

  const saveClothes = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  const sendData = async (toSave) => {
    //계절, 카테고리, 이름 필수로 입력하도록 함↓↓
    if (season === "") return alert("계절을 선택해주세요!");
    else if (category === "") return alert("카테고리를 선택해주세요!");
    else if (name === "") return alert("이름을 입력해주세요!");

    const newClothes = {
      ...closet,
      [Date.now()]: {
        season,
        category,
        name,
        brand,
        price,
        wear,
        washed,
        image,
      },
    };
    setCloset(newClothes);
    await saveClothes(newClothes);

    alert("저장 완료!");
    navigation.navigate("Menu");
  };

  const findCheckboxId = (text) => {
    if (text == "Spring" || text == "Top")
      return 0
    else if (text == "Summer" || text == "Bottom")
      return 1
    else if (text == "Fall" || text == "Outer")
      return 2
    else if (text == "Winter" || text == "Acc")
      return 3
  };

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
        <Text style={styles.add}>{name}</Text>
      </View>

      <ScrollView>
        <View style={styles.body}>
          {image == null ? (
            <View style={styles.image}>
              <TouchableOpacity onPress={pickImage} style={styles.addImage}>
                <AntDesign name="pluscircle" size={60} color="black" />
              </TouchableOpacity>
            </View>
          ) : (
            image && <Image source={{ uri: image }} style={styles.image} />
          )}

          <View style={styles.content}>
            <View style={styles.category}>
              <Text style={styles.categoryText}>Season</Text>
              <BouncyCheckboxGroup
                onChange={(ICheckboxButton) => {
                  setSeason(ICheckboxButton.text);
                }}
                data={seasons}
                initial={findCheckboxId(season)}
                style={styles.checkbox}
              />
            </View>
            <View style={styles.category}>
              <Text style={styles.categoryText}>Category</Text>
              <BouncyCheckboxGroup
                onChange={(ICheckboxButton) => {
                  setCategory(ICheckboxButton.text);
                }}
                data={clothes}
                initial={findCheckboxId(category)}
                style={styles.checkbox}
              />
            </View>

            <View style={styles.category}>
              <Text style={styles.categoryText}>Name</Text>
              <TextInput
                onChangeText={setName}
                value={name}
                style={styles.textinput}
              />
            </View>
            <View style={styles.category}>
              <Text style={styles.categoryText}>Brand</Text>
              <TextInput
                onChangeText={setBrand}
                value={brand}
                style={styles.textinput}
              />
            </View>
            <View style={styles.category}>
              <Text style={styles.categoryText}>Price</Text>
              <TextInput
                keyboardType="number-pad"
                onChangeText={setPrice}
                value={price}
                style={styles.textinput}
              />
            </View>
            <View style={styles.category}>
              <Text style={styles.categoryText}>Date</Text>
              <TextInput style={styles.textinput} />
            </View>
            <View style={styles.category}>
              <Text style={styles.categoryText}>Wear</Text>
              <TextInput
                keyboardType="number-pad"
                onChangeText={setWear}
                value={wear}
                style={styles.textinput}
              />
            </View>
            <View style={styles.category}>
              <Text value={washed} style={styles.categoryText}>
                Washed
              </Text>
              {/*washed state가 변경되어도 BouncyCheckbox가 리렌더링되지 않아 항상 false로 보여짐. 추후에 해결 필요함.*/}
              <BouncyCheckbox
                onPress={setWashed}
                isChecked={washed}
                fillColor="white"
                unfillColor="black"
                style={{
                  width: "65%",
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
    marginTop: 3,
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
    width: "65%",
    paddingBottom: 5,
    paddingHorizontal: 5,
  },

  plus: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 35,
  },

  checkbox: {
    width: "65%",
    flexWrap: "wrap",
  },
});
