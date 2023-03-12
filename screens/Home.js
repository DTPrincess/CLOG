import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [city, setCity] = useState(""); // 현재 위치한 도시
  const [weather, setWeather] = useState(""); // 오늘 날씨
  const [temp, setTemp] = useState(""); // 평균 온도
  const [temp_min, setTemp_min] = useState(""); // 최저 온도
  const [temp_max, setTemp_max] = useState(""); // 최고 온도
  const [ok, setOk] = useState(true); // 위치 정보 수집 허용 여부
  // 추후 옷차림 아이콘 변경
  const recommendDress = (temp) => {
    if (temp < 5) {
      var icon = "🧣";
      var text = "패딩과 두꺼운 코트, 목도리를 추천합니다 :D";
    } else if (5 <= temp && temp < 9) {
      var icon = "🧣";
      var text = "코트, 히트텍, 두꺼운 니트를 추천합니다 :D";
    } else if (9 <= temp && temp < 12) {
      var icon = "🧥";
      var text = "트렌치코트, 자켓, 니트를 추천합니다 :D";
    } else if (12 <= temp && temp < 17) {
      var icon = "🧣";
      var text = "자켓, 가디건, 조끼를 추천합니다 :D";
    } else if (17 <= temp && temp < 20) {
      var icon = "🧣";
      var text = "얇은 니트, 맨투맨, 후드티를 추천합니다 :D";
    } else if (20 <= temp && temp < 23) {
      var icon = "🧣";
      var text = "셔츠, 긴팔티, 청바지를 추천합니다 :D";
    } else if (23 <= temp && temp < 28) {
      var icon = "🧣";
      var text = "반팔티, 반바지, 얇은 셔츠를 추천합니다 :D";
    } else if (28 <= temp) {
      var icon = "🧣";
      var text = "민소매, 반팔, 반바지를 추천합니다 :D";
    }

    return (
      <View style={styles.dress}>
        <Text style={styles.dressIcon}>{icon}</Text>
        <Text style={styles.dressText}>{text}</Text>
      </View>
    );
  };

  const API_KEY = "784ab24ff2ed5d94d4288abed9e25d13";

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    // 현재 위치의 위도, 경도 수집
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    // 위도, 경도를 가지고 주소지로 변환
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    // 날씨 api 가져오기
    const json = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .catch((e) => {
        console.log(e);
      });

    setWeather(json.weather[0].main);
    setTemp(json.main.temp);
    setTemp_min(json.main.temp_min);
    setTemp_max(json.main.temp_max);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.menuBar}>
        <TouchableOpacity style={styles.home}>
          <Entypo name="home" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuIcon}>
          <Ionicons name="notifications" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Info")}
          style={styles.menuIcon}
        >
          <FontAwesome name="user-circle-o" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Menu")}
          style={styles.menuIcon}
        >
          <Feather name="menu" size={35} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        {temp_max === "" ? (
          <View>
            <ActivityIndicator color="white" size="large" />
          </View>
        ) : (
          <View>
            <View style={styles.weather}>
              <Text style={styles.cityText}>{city}</Text>
              <Text style={styles.weatherText}>{weather}</Text>
              <Text style={styles.tempText}>{Math.round(temp)}°</Text>
              <View style={styles.subTemp}>
                <Text style={styles.subTempText}>
                  최저 : {Math.round(temp_min)}°
                </Text>
                <Text style={styles.subTempText}>
                  최고 : {Math.round(temp_max)}°
                </Text>
              </View>
            </View>
            {recommendDress(Math.round(temp))}
          </View>
        )}
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

  home: {
    flex: 1,
    paddingHorizontal: 3,
  },

  menuIcon: {
    paddingHorizontal: 3,
  },

  body: {
    flex: 1,
    //backgroundColor: "yellow",
    justifyContent: "center",
  },

  weather: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  cityText: {
    color: "white",
    fontSize: "28",
    fontWeight: "600",
    padding: 2,
  },

  weatherText: {
    color: "white",
    fontSize: "22",
    fontWeight: "600",
    padding: 2,
  },

  tempText: {
    color: "white",
    fontSize: "58",
    fontWeight: "600",
  },

  subTemp: {
    flexDirection: "row",
  },

  subTempText: {
    color: "white",
    fontSize: "14",
    fontWeight: "600",
    padding: 5,
  },

  dress: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },

  dressIcon: {
    fontSize: "100",
    marginBottom: 20,
  },

  dressText: {
    color: "white",
    fontSize: "14",
    fontWeight: "600",
    padding: 5,
  },
});
