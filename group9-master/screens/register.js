import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-elements";
import TV8 from "../images/TV8.png";
import login3 from "../images/login3.jpg";

export default function register({ navigation }) {
  const handlePress = () => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/register", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setLoading(false);
          navigation.navigate("bottomTabs");
        }
      });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      password_confirmation: password,
    }),
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <ImageBackground
      source={login3}
      style={{ flex: 1, resizeMode: "cover", width: "100%", height: "100%" }}
    >
    <ScrollView>
    
      <View style={styles.container}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Avatar size={64} rounded source={TV8} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "red", fontWeight: "900", fontSize: 20 }}>
              Welcome To
            </Text>
            <Text style={{ color: "orange", fontSize: 20, fontWeight: "900" }}>
              TicketingVerse
            </Text>
          </View>
          <Text style={styles.input}>
            Create an account with us & enjoy all our exciting events
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.input}>Full Name</Text>
          <TextInput
            placeholder="Herata-Jec"
            onChangeText={(name) => setName(name)}
            style={styles.textInp}
          />

          <Text style={styles.input}>E-mail</Text>
          <TextInput
            placeholder="heratajec0011@gmail.com"
            onChangeText={(email) => setEmail(email)}
            required
            style={styles.textInp}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "column", width: windowWidth / 2 - 20 }}
            >
              <Text style={styles.input}>Date of Birth</Text>
              <TextInput
                placeholder="04-05-22"
                style={{
                  color: "red",
                  width: windowWidth / 2 - 20,
                  height: 60,
                  padding: 20,
                  borderRadius: 30,
                  fontSize: 20,
                  fontWeight: "400",
                  backgroundColor: "#fff",
                }}
              />
            </View>
            <View
              style={{ flexDirection: "column", width: windowWidth / 2 - 20 }}
            >
              <Text style={styles.input}>Nationality</Text>
              <TextInput
                placeholder="Ghanaian"
                style={{
                  color: "red",
                  width: windowWidth / 2 - 20,
                  height: 60,
                  padding: 20,
                  borderRadius: 30,
                  fontSize: 20,
                  fontWeight: "400",
                  backgroundColor: "#fff",
                }}
              />
            </View>
          </View>
          <Text style={styles.input}>Password</Text>
          <TextInput
            placeholder="eventtickets"
            secureTextEntry={true}
            autoCapitalize="false"
            onChangeText={(password) => setPassword(password)}
            style={styles.textInp}
          />
          <Text style={styles.input}>Confirm Password</Text>
          <TextInput
            placeholder="eventtickets"
            secureTextEntry={true}
            autoCapitalize="false"
            onChangeText={(password) => setPassword(password)}
            style={styles.textInp}
          />
        </View>

        <TouchableOpacity style={styles.signupBtn} onPress={handlePress}>
          {loading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text style={{ color: "#fff", fontSize: 20 }}>Create Account</Text>
          )}
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.input}>
            By creating an account, you confirm that you accept our terms of use
            & privacy policy
          </Text>
         
        </View>
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
  input: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
  },
  textInp: {
    color: "red",
    width: 318,
    height: 60,
    padding: 20,
    borderRadius: 30,
    fontSize: 20,
    fontWeight: "400",
    backgroundColor: "#fff",
  },
});
