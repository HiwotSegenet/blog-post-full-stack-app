import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Platform,
  FlatList,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

const Admin = (props) => {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [posted, setPosted] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }

  const loadToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      return token;
    } catch (error) {
      console.log("Load token error: ", error);
    }
    //return token;
  };

  const getPost = async () => {
    const token = await loadToken();
    const config = {
      headers: { "x-auth-token": token },
    };
    return axios
      .get(`http://${UrlString}:5054/blog/all`, config)
      .then(function (response) {
        console.log("this is blog data ===>", response.data);
        props.setBlogData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addPost = async () => {
    const token = await loadToken();
    const config = {
      headers: { "x-auth-token": token },
    };
    axios
      .post(
        `http://${UrlString}:5054/blog/new`,
        {
          subject: subject,
          text: text,
          authorId: props.userData.id,
        },
        config
      )
      .then(function (res) {
        //props.setBlogData(res.data); //blogs
        //props.navigation.navigate("Profile");
        getPost();
        setModalVisible(!modalVisible);
        setSubject("");
        setText("");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!props.userData.id) {
      props.navigation.navigate("Login");
    }
  }, [props.userData]);

  // we were using a useEffect here
  useFocusEffect(
    useCallback(() => {
      getPost();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text>Welcome {props.userData.userName}🤠</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            props.navigation.navigate("Profile");
          }}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.latestContainer}>
        <Text style={styles.latestHeader}>Latest Blogs</Text>
      </View>
      <FlatList
        data={props.blogData}
        style={styles.flatlist}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.flatlistContainer}>
            <Text style={styles.blogTitle}>{item.subject}</Text>
            <Text style={styles.blogText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item._id}
        //keyExtractor={(index) => index.toString()}
      />

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.modalButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.modalText}>
            <AntDesign name="pluscircle" size={50} color="#DFF3E4" />
          </Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity>
              <Text>Subject</Text>
              <TextInput
                placeholder="type your title here"
                value={subject}
                onChangeText={setSubject}
              />
              <Text>Body</Text>
              <TextInput
                placeholder="type your message here"
                value={text}
                onChangeText={setText}
              />
            </TouchableOpacity>
            <Text>{setSubject}</Text>
            <TouchableOpacity onPress={() => addPost()}>
              <Text>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Admin;
