import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import List from "./screens/List";
import Start from "./screens/Start";

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start' screenOptions = {{ headerShown: false }}>
        <Stack.Screen name='Start' component={Start} />
        <Stack.Screen name='List' component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
