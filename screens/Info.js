import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const STORAGE_KEY = "@User";

export default function Info({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  // 유저의 이름, 이메일, 이미지를 json 형태로 담는 state
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setImage(user.image);
    }
  }, [user]);

  useEffect(() => {
    sendData();
  }, [image, name, email]);

  const loadUser = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    s !== null ? setUser(JSON.parse(s)) : null;
    console.log(user);
  };

  const saveUser = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  const sendData = async () => {
    const newUser = {
      name,
      email,
      image,
    };
    console.log(newUser);
    setUser(newUser);
    await saveUser(newUser);
    //alert(`name: ${name}, email: ${email}, image: ${image}`);
  };

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

  const deleteImage = async () => {
    if (image) {
      setImage(null);
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
        <Text style={styles.myPage}>My Page</Text>
      </View>

      <View style={styles.body}>
        {image == null ? (
          <View style={styles.pic}>
            <TouchableOpacity onPress={pickImage}>
              <Feather name="camera" size={18} color="black" />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            {image && <Image source={{ uri: image }} style={styles.pic} />}
            <TouchableOpacity onPress={deleteImage} style={styles.edit}>
              <Feather name="camera" size={18} color="white" />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.info}>
          <Text style={styles.infoText}>Name</Text>
          <TextInput
            onChangeText={setName}
            onEndEditing={sendData}
            value={name}
            style={styles.infoInput}
          />
          <Text style={styles.infoText}>E-mail</Text>
          <TextInput
            onChangeText={setEmail}
            onEndEditing={sendData}
            value={email}
            style={styles.infoInput}
          />
        </View>
      </View>

      <View style={styles.hr} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>My ♥</Text>
        <Text style={styles.footerText}>내 게시물</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Outfit")}>
          <Text style={styles.footerText}>코디</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  menuBar: {
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

  myPage: {
    fontSize: 45,
    fontWeight: "600",
    color: "white",
  },

  body: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  pic: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    height: 160,
    width: 160,
    marginLeft: 20,
  },

  edit: {
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
    position: "absolute",
    borderRadius: 20,
    padding: 6,
    top: "82%",
    left: "85%",
  },

  info: {
    flex: 1,
    padding: 10,
    //backgroundColor: "yellow"
  },

  infoText: {
    fontSize: 24,
    color: "white",
    fontWeight: "700",
    paddingBottom: 5,
  },

  infoInput: {
    color: "white",
    fontSize: 16,
    borderBottomColor: "white",
    borderWidth: 2,
    width: "100%",
    paddingBottom: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
  },

  footer: {
    paddingLeft: 15,
  },

  footerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 24,
    paddingBottom: 8,
  },

  hr: {
    alignSelf: "center",
    width: "95%",
    borderBottomColor: "#454C53",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 30,
  },
});
