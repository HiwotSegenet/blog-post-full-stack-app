import { View, Text, TextInput, Pressable, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

import axios from "axios";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }
  const register = () => {
    axios
      .post(`http://${UrlString}:5054/user/register`, {
        email: email,
        userName: userName,
        password: password,
      })
      .then(function (response) {
        props.navigation.navigate("Login");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}
      >
        <Ionicons name="md-chevron-back" size={40} color="#f6f9ff" />
      </Pressable>

      <View style={styles.loginContainer}>
        <Text style={styles.header}>Sign Up</Text>
        <Text style={styles.loginText}>Your Username</Text>
        <TextInput
          style={styles.input}
          placeholder="userName"
          onChangeText={setUserName}
          value={userName}
        ></TextInput>
        <Text style={styles.loginText}>Your Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        ></TextInput>
        <Text style={styles.loginText}>Your Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="********"
        ></TextInput>
      </View>

      <Pressable style={styles.loginButton} onPress={() => register()}>
        <Text style={styles.loginButtonText}>SIGN UP</Text>
      </Pressable>
    </View>
  );
};

export default Register;
