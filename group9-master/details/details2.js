import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default function details2() {

    const handlePress = () => {
        navigation.navigate("payment");
        console.log("Pressed");
      };

  return (
    <View>
      <Text>details2</Text>
      <Image source={require("../images/intobadlands.jpg")} style={{width:300, height:300, borderRadius:30, padding:20}}/>
      <View>
      <Text>Movie: Into the Badlands</Text>
          <Text>Release Date: 19th September 2017</Text>
          <Text>Duration: 1 hour 30 minutes</Text>
          <Text>Start Time: 8pm</Text>
          <Text>End Time: 9:30pm</Text>
          <Text>Address: Silverbird Cinema Accra Mall</Text>
          <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
            <Text>Buy Ticket</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
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
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      borderRadius: 30,
      backgroundColor: 'orange',
      margin: 10,
    },
  });  
