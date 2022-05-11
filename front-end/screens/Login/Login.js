import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.userData.id) props.navigation.navigate("Admin");
  }, [props.userData]);

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }

  const register = () => {
    props.navigation.navigate("Register");
  };

  const login = async () => {
    axios
      .post(`http://${UrlString}:5054/user/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        // use async storage to set an item with the key token to the value of the token that was received

        props.setUserData(response.data.user);
        return AsyncStorage.setItem("token", response.data.token);
      })
      .then(() => {
        console.log("Token saved");
        props.navigation.navigate("Admin");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text>Login Page</Text>
        <TextInput
          style={{
            borderWidth: 1,
            fontSize: 18,
          }}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={{
            borderWidth: 1,
            fontSize: 18,
          }}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
        />
        <TouchableOpacity onPress={login}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={register}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
