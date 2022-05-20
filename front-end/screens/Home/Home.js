import { View, Text, ImageBackground, Pressable } from "react-native";
import { useEffect, useState } from "react";
import styles from "./styles";

const backgroundImg =
  "/home/william/Desktop/blog-post-fullstack-app/blog-post-full-stack-app/front-end/assets/appbg.jpg";

const Home = (props) => {
  const [searching, setSearching] = useState(true);

  useEffect(() => {
    if (props.userData.id) props.navigation.navigate("Admin");
  }, [props.userData]);

  return (
    <View style={styles.container}>
      {searching ? (
        <ImageBackground
          source={require(backgroundImg)}
          resizeMode="cover"
          style={styles.background}
        >
          <Text style={styles.logoText}>Hawsa Blog</Text>
          <Pressable
            style={styles.registerButton}
            onPress={() => props.navigation.navigate("Register")}
          >
            <Text style={styles.registerText}>Sign Up</Text>
          </Pressable>
          <Pressable
            style={styles.loginButton}
            onPress={() => props.navigation.navigate("Login")}
          >
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </ImageBackground>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Home;
