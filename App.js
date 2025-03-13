import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import LocationsScreen from "./screens/LocationsScreen";
import AddLocationScreen from "./screens/AddLocationScreen";
import MapScreen from "./screens/MapScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Locations" 
        component={LocationsScreen} 
        options={{ tabBarIcon: ({ color, size }) => (
          <Ionicons name="list" size={size} color={color} />
        )}}
      />
      <Tab.Screen 
        name="Add Location" 
        component={AddLocationScreen} 
        options={{ tabBarIcon: ({ color, size }) => (
          <Ionicons name="add-circle" size={size} color={color} />
        )}}
      />
      <Tab.Screen 
        name="Map" 
        component={MapScreen} 
        options={{ tabBarIcon: ({ color, size }) => (
          <Ionicons name="map" size={size} color={color} />
        )}}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
