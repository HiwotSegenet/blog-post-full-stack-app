import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './styles'

import axios from 'axios'

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    let UrlString = "localhost";

    if (Platform.OS == "android") {
        UrlString = "10.0.2.2";
    }
    const register = () => {
        axios.post(`http://${UrlString}:5054/user/register`, {
            email: email,
            userName: userName,
            password: password,
        })
            .then(function (response) {
                props.navigation.navigate("Login")
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <View>
            <Text>Register Page</Text>
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
                onChangeText={setUserName}
                value={userName}
                placeholder="Username"
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
            <TouchableOpacity>
                <Text onPress={register}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register