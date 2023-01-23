import { StatusBar } from "expo-status-bar";
import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'




export default function Home({ navigation }){
    return(

<View style={styles.container}>
<StatusBar style="light" />

<View style={styles.body}>

    <Text style={styles.season}> 
    Spring  Fall Summer Winter 
    </Text>
    
    <TouchableOpacity 
    onPress={() => navigation.navigate("List")}> 
    <Text style={styles.clothes}>
        top 
        Bottom
        Outer
        Acc
    </Text>
    </TouchableOpacity>
</View>


    <View style={styles.footer}>
    <TouchableOpacity 
    onPress={() => navigation.navigate("List")}> 
    <Ionicons name="ios-add" color="black" size={20} />
    </TouchableOpacity>

        </View>
</View>

    )
};


    const styles=StyleSheet.create({

        container:{
            flex:1,
            backgroundColor:'black',
            justifyContent: "center",
            alignItems: "center",
        },

        body: {
            flex: 1,
            justifyContent: "center",
         
          },
        

        season:{
            flexdirection:"column",
            color:'white',
            fontsize:"80",
            fontWeight:"600",
            justifyContent:"space-around",
            
    
        },

        clothes:{
            flexdirection:"column",
            color:'white',
            fontsize:"20",
            fontWeight:"600",
        },

        footer: {
            backgroundColor: "white",
            borderRadius: 30,
            paddingHorizontal: 15,
            paddingVertical: 15,
            marginBottom: 40,
          },
    })
