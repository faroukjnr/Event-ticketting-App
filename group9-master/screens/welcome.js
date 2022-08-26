import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { Avatar } from "react-native-elements";

import backimage from "../images/backimage.jpg";
import ticket from "../images/ticket.jpg";
export default function welcome({ navigation }) {
  return (
    
    <ImageBackground
      source={backimage}
      style={{ flex: 1, resizeMode: "cover", width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.welcomev}>Welcome to </Text>
          <Text style={styles.tverse}>TicketingVerse</Text>
        </View>
        <Avatar size={64} rounded source={ticket} />
        <TouchableOpacity
          onPress={() => navigation.navigate("login")}
          style={styles.roundButton1}
        >
          <Text style={{fontSize:16}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("register")}
          style={styles.roundButton2}
        >
          <Text style={{fontSize:16}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  welcomev: {
    fontSize: 30,
    fontWeight: "normal",
    color: "#000",
    marginBottom: 10,
  },
  tverse: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  roundButton1: {
    width: 200,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
    backgroundColor: "orange",
    margin: 10,
  },
  roundButton2: {
    width: 200,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#ccc",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
