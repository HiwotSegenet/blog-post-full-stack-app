import { View, Text, TextInput, TouchableOpacity, Modal, Pressable, Platform, FlatList} from 'react-native'
import React, {useState,useEffect} from 'react'
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Admin = (props) => {
    const [userName, setUserName] = useState("");
    const [blog, setBlog] = useState("");
    const [subject, setSubject] = useState("")
    const [text, setText] = useState("")
    const [authorId, setAuthorId] = useState("")
    const [allBlog, setAllBlog] = useState("")
    const [posted, setPosted] = useState(false)
    const [token, setToken] = useState("")
    
    let UrlString = "localhost";

    if (Platform.OS == "android") {
        UrlString = "10.0.2.2";
    }

    const store = async () => {
        await AsyncStorage.setItem("token", "");
        props.setUserData({
            authorId: props.userData.id,
            subject: subject,
            text: text
        });
      }

    const handlePost = () => {
      axios.post(`http://${UrlString}:5054/blog/new`, {authorId: props.userData.id,
      subject: subject,
      text: text,}
          
      )
          .then(function (response) {
            props.userData.createBlogPost
              console.log(response);

          })
          .catch(function (error) {
              console.log(error);
          });
  };

  

//   useEffect(() => {
//     if (!props.userData.id) {
//       props.navigation.navigate("Login");
//     }
    
//     console.log(props.userData);
//   },[]);

//   useEffect(() => {
//     AsyncStorage.getItem("token").then((tokenRes) =>
//     let config = {'Authorization': tokenRes};
//     //   console.log("we are logged in", tokenRes)
//     );
    
    

    axios.get(`http://${UrlString}:5054/blog`, config),{
        // tokenRes: tokenRes,
        authorId: props.userData.id,
        subject: subject,
        text: text,
    }
    .then(res => {
        console.log(res)
    })
    .catch(function (error) {
        console.log(error);
    })
  }, []);
  

return(
    <View>
        =
        <Text>Welcome {props.userData.userName}🤠</Text>
        <Pressable onPress={()=> setPosted(true)}>
            <Text>Create Blog</Text>
        </Pressable>
        
          <TouchableOpacity >
             <TextInput 
            placeholder='type your blog here'
            value={subject}
            onChangeText={setSubject}
            />
          </TouchableOpacity>
              
            
               <Text>{setSubject}</Text>
        <TouchableOpacity onPress={handlePost}>
                <Text>Post</Text>
            </TouchableOpacity>
            {/* <FlatlList
            
            /> */}
        
    </View>

)
}

export default Admin





