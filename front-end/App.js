import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login/Login";
import Admin from "./screens/Admin/Admin";
import Register from "./screens/Register/Register";
import Profile from "./screens/Profile/Profile";
import Edit from "./screens/Edit/Edit";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userData, setUserData] = useState({});
  const [blogData, setBlogData] = useState([]);
  //const [token, setToken] = useState("");

  useEffect(() => {
    let UrlString = "localhost";

    if (Platform.OS == "android") {
      UrlString = "10.0.2.2";
    }

    AsyncStorage.getItem("token")
      .then((tokenRes) => {
        //setToken(tokenRes);
        axios.get(`http://${UrlString}:5054/user`, {
          headers: { "x-auth-token": tokenRes },
        });
      })
      .then((userResponse) => setUserData(userResponse.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen name="Login" options={{ headerShown: false }}>
          {(props) => (
            <Login
              userData={userData}
              setUserData={setUserData}
              //token={token}
              //setToken={setToken}
              {...props}
            ></Login>
          )}
        </Tab.Screen>
        <Stack.Screen name="Register" options={{ headerShown: false }}>
          {(props) => <Register {...props}></Register>}
        </Stack.Screen>
        <Stack.Screen name="Admin" options={{ headerShown: false }}>
          {(props) => (
            <Admin
              setUserData={setUserData}
              userData={userData}
              setBlogData={setBlogData}
              blogData={blogData}
              {...props}
            ></Admin>
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile" options={{ headerShown: false }}>
          {(props) => (
            <Profile
              setUserData={setUserData}
              userData={userData}
              setBlogData={setBlogData}
              blogData={blogData}
              //token={token}
              //setToken={setToken}
              {...props}
            ></Profile>
          )}
        </Stack.Screen>
        <Stack.Screen name="Edit" options={{ headerShown: false }}>
          {(props) => (
            <Edit
              setUserData={setUserData}
              userData={userData}
              setBlogData={setBlogData}
              blogData={blogData}
              {...props}
            ></Edit>
          )}
        </Stack.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// import React, { useEffect, useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Login from "./screens/Login/Login";
// import Admin from "./screens/Admin/Admin";
// import Register from "./screens/Register/Register";
// import Profile from "./screens/Profile/Profile";
// import Edit from "./screens/Edit/Edit";
// import { Ionicons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// import { Platform } from "react-native";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function App() {
//   const [userData, setUserData] = useState({});
//   const [blogData, setBlogData] = useState({});
//   // const [token, setToken] = useState("");

//   useEffect(() => {
//     let UrlString = "localhost";

//     if (Platform.OS == "android") {
//       UrlString = "10.0.2.2";
//     }

//     AsyncStorage.getItem("token")
//       .then((tokenRes) => {
//         setToken(tokenRes);
//         axios.get(`http://${UrlString}:5054/user`, {
//           headers: { "x-auth-token": tokenRes },
//         });
//       })
//       .then((userResponse) => setUserData(userResponse.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="Login">
//         <Tab.Screen name="Login" options={{ headerShown: false }}>
//           {(props) => (
//             <Login
//               userData={userData}
//               setUserData={setUserData}
//               // token={token}
//               // setToken={setToken}
//               {...props}
//             ></Login>
//           )}
//         </Tab.Screen>
//         <Tab.Screen name="Register" options={{ headerShown: false }}>
//           {(props) => (
//             <Register
//               userData={userData}
//               setUserData={setUserData}
//               // token={token}
//               // setToken={setToken}
//               {...props}
//             ></Register>
//           )}
//         </Tab.Screen>
//         <Tab.Screen name="Admin" options={{ headerShown: false }}>
//           {(props) => (
//             <Admin
//               setUserData={setUserData}
//               userData={userData}
//               setBlogData={setBlogData}
//               blogData={blogData}
//               {...props}
//             ></Admin>
//           )}
//         </Tab.Screen>

//         <Tab.Screen name="Profile" options={{ headerShown: false }}>
//           {(props) => (
//             <Profile
//               setUserData={setUserData}
//               userData={userData}
//               setBlogData={setBlogData}
//               blogData={blogData}
//               // token={token}
//               // setToken={setToken}
//               {...props}
//             ></Profile>
//           )}
//         </Tab.Screen>
//         <Tab.Screen name="Edit" options={{ headerShown: false }}>
//           {(props) => (
//             <Edit
//               setUserData={setUserData}
//               userData={userData}
//               setBlogData={setBlogData}
//               blogData={blogData}
//               // token={token}
//               // setToken={setToken}
//               {...props}
//             ></Edit>
//           )}
//         </Tab.Screen>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
