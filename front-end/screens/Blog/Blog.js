import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,
    Image,
    Pressable,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import axios from "axios";
  
  import styles from "./styles";
  import { Ionicons } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  
  const Blog = (props) => {
    const { item, itemIndex } = props.route.params;
    let id = item._id;
  
    let UrlString = "localhost";
  
    if (Platform.OS == "android") {
      UrlString = "10.0.2.2";
    }
  
    return (
      <View style={styles.container}>
                <Image style={styles.adminBg} source={require("../Images/img4.png")}/>

        <Pressable
          style={styles.backButton}
          onPress={() => props.navigation.navigate("Admin")}
        >
          <Ionicons name="md-chevron-back" size={40} color="#4CAB72" />
        </Pressable>
        <View style={styles.content}>
          <Text style={styles.blogTitle}>{item.subject}</Text>
          <Text style={styles.blogAuthor}>{item.userName}</Text>
          <Text style={styles.blogAuthor}>{item.date}</Text>
          <Text style={styles.blogBody}>{item.text}</Text>
        </View>
      </View>
    );
  };
  
  export default Blog;
  