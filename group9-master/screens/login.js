import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-elements";
import TV8 from "../images/TV8.png";
import loginS from "../images/loginS.jpg";
import login3 from "../images/login3.jpg";

export default function login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    
    navigation.navigate("bottomTabs");
    // setLoading(true);
    // fetch("http://127.0.0.1:8000/api/login", requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.token) {
    //       setLoading(false);
    //       navigation.navigate("bottomTabs");
    //     }
    //   });
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
      password_confirmation: password,
    }),
  };

  return (
    
    <ImageBackground
      source={login3}
      style={{ flex: 1, resizeMode: "cover", width: "100%", height: "100%" }}
    >
    <ScrollView>
    
      <View style={styles.container}>
        <Avatar size={64} rounded source={TV8} />
        <View>
          <Text style={styles.text}>Welcome to TicketingVerse</Text>
          <Text style={styles.text}>
            Log into your account & enjoy all our exciting events
          </Text>
        </View>

        <View>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            placeholder="herajatec0011@gmail.com"
            onChangeText={(email) => setEmail(email)}
            style={styles.textInp}
          />

          <Text style={styles.text}>Password</Text>
          <TextInput
            placeholder="passnow"
            onChangeText={(password) => setPassword(password)}
            style={styles.textInp}
            secureTextEntry={true}
            autoCapitalize="none"
          />

          <Text style={styles.text}>Confirm Password</Text>
          <TextInput
            placeholder="confirmpassnow"
            onChangeText={(password) => setPassword(password)}
            style={styles.textInp}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={styles.signupBtn} onPress={handlePress}>
          {loading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text style={{ color: "#fff", fontSize:20 }}>Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ color: "blue", textDecorationLine: "underline", fontSize:18 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </ImageBackground>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 5,
  },
  signupBtn: {
    width: 210,
    borderRadius: 5,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    padding: 20,
    borderRadius: 30,
    margin:10,
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
    alignItems: "center",
    justifyContent: "center",
  },
  textInp: {
    color: "red",
    width: 318,
    height: 60,
    fontSize: 20,
    fontWeight:"400",
    padding: 20,
    borderRadius: 30,
    backgroundColor:'#fff',
  },
});
