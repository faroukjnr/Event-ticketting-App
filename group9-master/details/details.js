import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function details() {
  const handlePress = () => {
    navigation.navigate("payment");
    console.log("Pressed");
  };

  return (
    <View>
      <Text>details</Text>
      <Image
        source={require("../images/merlin.jpg")}
        style={{ width: 300, height: 300, borderRadius: 30, padding: 20 }}
      />
      <View>
        <Text>Movie: Merlin</Text>
        <Text>Release Date: 16th July</Text>
        <Text>Duration: 45 minutes</Text>
        <Text>Start Time: 6:15pm</Text>
        <Text>End Time: 7pm</Text>
        <Text>Address: West Hills Mall</Text>
        <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
          <Text>Buy Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#990000",
    alignItems: "center",
    justifyContent: "center",
  },
  roundButton1: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
    backgroundColor: "orange",
    margin: 10,
  },
});
