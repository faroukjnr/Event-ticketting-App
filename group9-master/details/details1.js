import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function details1() {
  const handlePress = () => {
    navigation.navigate("payment");
    console.log("Pressed");
  };

  return (
    <View>
      <Text>details1</Text>
      <Image
        source={require("../images/blacklight.jpg")}
        style={{ width: 300, height: 300, borderRadius: 30, padding: 20 }}
      />
      <View>
        <Text>Movie: Black Lightening</Text>
        <Text>Release Date: 4th November 2016</Text>
        <Text>Duration: 3 hours</Text>
        <Text>Start Time: 5pm</Text>
        <Text>End Time: 8pm</Text>
        <Text>Address: Silverbird Cinema Accra</Text>
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
