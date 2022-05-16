import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Platform,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";

const Admin = (props) => {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [posted, setPosted] = useState(false);

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
    return (
      axios
        .get(`http://${UrlString}:5054/blog/all`, config)
        // {
        //   authorId: props.userData.id,
        // }
        .then(function (response) {
          props.setBlogData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    );
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

  useEffect(() => {
    getPost();
  }, [props.blogData]);
  //[props.blogData]

  return (
    <ScrollView>
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
          <Pressable style={styles.container} onPress={() => setPosted(true)}>
            <Text>Create Blog</Text>
          </Pressable>
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
          <View style={styles.blogContainer}>
            <FlatList
              data={props.blogData}
              style={styles.flatlist}
              renderItem={({ item, index }) => (
                <View style={styles.flatlistContainer} key={index}>
                  <Text style={styles.blogTitle}>{item.subject}</Text>
                  <Text style={styles.blogText}>{item.text}</Text>
                </View>
              )}
              keyExtractor={(item) => item._id}
              //keyExtractor={(index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Admin;

/**
 * useEffect(
    async () => {
      const token = await loadToken();
      const config = {
        headers: { "x-auth-token": token },
      };
      return (
        axios
          .get(`http://${UrlString}:5054/blog/all`, config)
          // {
          //   authorId: props.userData.id,
          // }
          .then(function (res) {
            // setToken(response);
            //props.setBlogData([...props.blogData, res.data]);

            console.log(res.data);
          })
          .catch(function (error) {
            console.log(error);
          })
      );
    },
    [
      
    ]
    );
 */
