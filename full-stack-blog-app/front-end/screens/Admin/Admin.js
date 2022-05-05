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
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  
  const Admin = (props) => {
    const [userName, setUserName] = useState("");
    const [blog, setBlog] = useState("");
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");
    const [authorId, setAuthorId] = useState("");
    const [allBlog, setAllBlog] = useState("");
    const [posted, setPosted] = useState(false);
    const [token, setToken] = useState("");
  
    let UrlString = "localhost";
  
    if (Platform.OS == "android") {
      UrlString = "10.0.2.2";
    }
  
    // const store = async () => {
    //   await AsyncStorage.setItem("token", "");
    //   props.setUserData({
    //     authorId: props.userData.id,
    //     subject: subject,
    //     text: text,
    //   });
    // };
  
    let config = {
      "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzJiY2NhMGM4YzdhMzA5Yzk5ZDlhOSIsImlhdCI6MTY1MTY4NjYyMSwiZXhwIjoxNjUxNzczMDIxfQ.dTqzmknUA8s4ZwXC2XSwbWSZvp7v-htYaiRrZ4_LwRE"
    };
  
    const handlePost = (subject, text) => {
      axios
        .post(
          `http://${UrlString}:5054/blog/new`,
          {
            authorId: props.userData.id,
            subject: subject,
            text: text,
          },
          { headers: config }
        )
        .then(function (response) {
          props.userData.createBlogPost;
          console.log(response);
          setPosted(true);
          setSubject("");
          setText("");
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    useEffect(() => {
      if (!props.userData.id) {
        props.navigation.navigate("Login");
      }
  
      console.log(props.userData.id);
      setToken(props.userToken);
      console.log("this is our token --> " + token);
    }, []);
  
    useEffect(() => {
      return (
        axios
          .get(`http://${UrlString}:5054/blog`, { headers: config })
          // {
          //   authorId: props.userData.id,
          // }
          .then(function (response) {
            // setToken(response);
            // console.log(response.data);
            setAllBlog(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
      );
    }, [allBlog]);
  
    return (
      <View>
        <Text>Welcome {props.userData.userName}🤠</Text>
        <Pressable onPress={() => setPosted(true)}>
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
        <TouchableOpacity onPress={() => handlePost(subject, text)}>
          <Text>Post</Text>
        </TouchableOpacity>
        {posted ? (
          <View>
            <FlatList
              data={allBlog}
              renderItem={({ item }) => (
                <View>
                  <Text>{item.subject}</Text>
                  <Text>{item.text}</Text>
                </View>
              )}
              keyExtractor={(item) => item.key}
            />
          </View>
        ) : null}
      </View>
    );
  };
  
  export default Admin;
  