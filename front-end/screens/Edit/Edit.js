import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import styles from "./styles";

const Edit = (props) => {
  const { item } = props.route.params;
  const [subject, setSubject] = useState(item.subject);
  const [text, setText] = useState(item.text);
  let id = item._id;

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }

  console.log("this is our subject " + item.subject);
  console.log("this is our text " + item.text);
  console.log("this is our id " + item._id);

  const updatePost = async () => {
    await axios
      .put(`http://${UrlString}:5054/blog/update`, {
        _id: id,
        subject: subject,
        text: text,
      })
      .then(function (res) {
        console.log("This is res data ===>", res.data);
      })
      .then(() => {
        console.log("Blog post updated");
        setSubject("");
        setText("");
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
      <View style={styles.content}>
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

        <TouchableOpacity
          onPress={() => updatePost(props.blogData.indexOf(item))}
        >
          <Text>Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Edit;
