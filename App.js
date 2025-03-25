import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/screens/Home"; 
import DetailsScreen from "./src/screens/Details"; 
import nadaScreen from "./src/screens/Nothing";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DScreen" component={DetailsScreen}/>
    </Stack.Navigator>
  );
}

function NothingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="nada" component={nadaScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#f8f8f8" },
          tabBarActiveTintColor: "#2f95dc",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Explore"
          component={HomeStack} 
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
            headerShown: false, 
          }}
        />
          <Tab.Screen
          name="saved"
          component={nadaScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />,
            headerShown: false, 
          }}
        />

        <Tab.Screen
          name="Trips"
          component={nadaScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="help-circle" size={size} color={color} />,
            headerShown: false, 
          }}
        />

          <Tab.Screen
          name="Inbox"
          component={nadaScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="mail" size={size} color={color} />,
            headerShown: false, 
          }}
        />

        <Tab.Screen
          name="Profile"
          component={nadaScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
            headerShown: false, 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
