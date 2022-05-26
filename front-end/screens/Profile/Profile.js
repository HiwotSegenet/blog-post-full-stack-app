import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Platform,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Blog from "../../components/Blog";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Profile = (props) => {
  const [userBlogs, setUserBlogs] = useState();

  let UrlString = "localhost";

  if (Platform.OS == "android") {
    UrlString = "10.0.2.2";
  }

  useEffect(() => {
    if (!props.userData.id) {
      props.navigation.navigate("Login");
    }
    console.log("this is our usersBlogs ", userBlogs);
  }, []);

  const loadToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      return token;
    } catch (error) {
      console.log("Load token error: ", error);
    }
  };

  const getPost = async () => {
    const token = await loadToken();
    const config = {
      headers: { "x-auth-token": token },
    };
    return (
      axios
        .get(`http://${UrlString}:5054/blog`, config)
        // {
        //   authorId: props.userData.id,
        // }
        .then(function (response) {
          setUserBlogs(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    );
  };

  // This gets the blogs made by this user
  useEffect(async () => {
    const token = await loadToken();
    const config = {
      headers: { "x-auth-token": token },
    };
    return axios
      .get(`http://${UrlString}:5054/blog`, config)
      .then(function (response) {
        setUserBlogs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userBlogs]);

  const deletePost = async (id) => {
    await axios
      .put(`http://${UrlString}:5054/blog/delete`, {
        _id: id,
      })
      .then(function (res) {
        console.log("This is res data ===>", res.data);
      })
      .then(() => {
        console.log("Blog post deleted.");
        getPost();
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const signOut = async () => {
    try {
      await AsyncStorage.clear();
      props.setUserData({});
      // props.navigation.navigate("Login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <Pressable
          style={styles.backButton}
          onPress={() => props.navigation.navigate("Admin")}
        >
          <Ionicons name="md-chevron-back" size={40} color="#f6f9ff" />
        </Pressable>

        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => signOut()}
        >
          <Text>
            <FontAwesome name="sign-out" size={36} color="#e55039" />
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={userBlogs}
        style={styles.flatlist}
        renderItem={({ item, index }) => (
          <View style={styles.flatlistContainer}>
            <Pressable style={styles.blogOptions}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={28}
                color="#b2bec3"
              />
            </Pressable>

            <Text style={styles.blogTitle}>{item.subject}</Text>
            <Text style={styles.blogText}>{item.text}</Text>

            <TouchableOpacity>
              <Text
                onPress={() => {
                  props.navigation.navigate("Edit", {
                    item: item,
                    index: index,
                    //item: item._id,
                  });
                }}
              >
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deletePost(item._id)}>
              <Text>Trash 🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
        //keyExtractor={(item) => item._id}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Profile;

/**
 * 
 * <Blog
            item={item}
            index={index}
            userId={props.userData.id}
            // id={item._id}
            // subject={item.subject}
            // text={item.text}
            // authorId={item.authorId}
          />
*/
