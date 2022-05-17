import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

import { AntDesign } from "@expo/vector-icons";

// const backgroundImg =
//   "/home/william/Desktop/blog-post-fullstack-app/blog-post-full-stack-app/front-end/assets/appbg.jpg";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [isLogin, setIsLogin] = useState(false);
  console.log(props.userData);
  //console.log(props.token);

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
        setEmail("");
        setPassword("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hawsa Blog!</Text>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginHeader}>Login</Text>
        <View style={styles.inputContainer}>
          <Text>Your Email</Text>
          <TextInput
            style={styles.loginInput}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
          <Text>Your Password</Text>
          <TextInput
            style={styles.loginInput}
            onChangeText={setPassword}
            value={password}
            placeholder="********"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>
              Login <AntDesign name="arrowright" size={18} color="#DFF3E4" />
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.register} onPress={register}>
          <Text style={styles.registerText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
/**
 * <ImageBackground
      source={require(backgroundImg)}
      resizeMode="cover"
      style={styles.background}
    >
 */
