import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Edit = (props) => {
  //const { item, index } = props.route.params;
  const { details, itemIndex } = props.route.params;
  const [subject, setSubject] = useState();
  const [text, setText] = useState();
  //let id = item._id;
  let id = details._id;

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }

  useEffect(() => {
    setSubject(details.subject);
    setText(details.text);
  }, []);

  const updatePost = async (index) => {
    await axios
      .put(`http://${UrlString}:5054/blog/update`, {
        _id: id,
        subject: subject,
        text: text,
      })
      .then(() => {
        //setSubject("");
        //setText("");
        props.navigation.navigate("Admin");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleTaskEdit = (index, obj) => {
    if (subject && text === "") {
      Alert.alert("Please enter your Title and body text!");
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <Pressable
          style={styles.backButton}
          onPress={() => props.navigation.navigate("Profile")}
        >
          <Ionicons name="md-chevron-back" size={40} color="#f6f9ff" />
        </Pressable>
      </View>
      <View style={styles.content}>
        <TouchableOpacity>
          <Text style={styles.title}>Subject</Text>
          <TextInput
            placeholder="type your title here"
            value={subject}
            onChangeText={setSubject}
            style={styles.textInput}
          />
          <Text style={styles.title}>Body</Text>
          <TextInput
            placeholder="type your message here"
            value={text}
            onChangeText={setText}
            style={styles.textInput}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => updatePost(props.blogData.indexOf(details))}
          style={styles.publishButton}
        >
          <Text style={styles.publishText}>Publish</Text>
          <FontAwesome name="pencil-square-o" size={24} color="#DFF3E4" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Edit;
