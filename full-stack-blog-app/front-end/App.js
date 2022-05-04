import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login/Login";
import Admin from "./screens/Admin/Admin";
import Register from "./screens/Register/Register";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Stack = createNativeStackNavigator();

export default function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    AsyncStorage.getItem("token").then((tokenRes) =>
      console.log("we are logged in", tokenRes)
    );
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <Login setUserData={setUserData} {...props}></Login>}
        </Stack.Screen>
        <Stack.Screen name="Register" options={{ headerShown: false }}>
          {(props) => <Register {...props}></Register>}
        </Stack.Screen>
        <Stack.Screen name="Admin" options={{ headerShown: false }}>
          {(props) => (
            <Admin
              setUserData={setUserData}
              userData={userData}
              {...props}
            ></Admin>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
