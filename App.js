import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  
  const [clothes, setClothes] = useState([
    "니트 조끼", "배색 후드집업", "앙고라 털 니트", "아가일 가디건"
    //, "옷1", "옷2", "옷3", "옷4", "옷5", "옷6"
  ]);
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.season}>Winter</Text>
        <Text style={styles.category}>Top</Text>
      </View>
      
      <ScrollView>
        {clothes.map((value, key) => (
          <TouchableOpacity style={styles.content} key={key}>
            <Text style={styles.clothes}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.plus}>
        <AntDesign name="pluscircle" size={60} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    marginTop: 60,
    marginBottom: 15,
    paddingLeft: 15,
  },
  season: {
    fontSize: 48,
    fontWeight: "600",
    color: 'white'
  },
  category: {
    marginLeft: 5,
    fontSize: 28,
    fontWeight: "600",
    color: 'white'
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 30,
    marginHorizontal: 10,
    marginBottom: 12,
    paddingVertical: 17,
    paddingHorizontal: 17,
    alignItems: "center",
  },
  clothes: {
    fontSize: 18,
    fontWeight: "600",
  },
  plus: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 35,
  }
});
