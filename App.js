import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import List from "./screens/List";
import Start from "./screens/Start";
import Home from "./screens/Home";
import Add from "./screens/Add";
import Info from "./screens/Info";
import Menu from "./screens/Menu";

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start' screenOptions = {{ headerShown: false }}>
        <Stack.Screen name='Start' component={Start} />
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Add' component={Add} />
        <Stack.Screen name='Info' component={Info} />
        <Stack.Screen name='Menu' component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
