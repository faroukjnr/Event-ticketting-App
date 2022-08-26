import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default function details4() {

    const handlePress = () => {
        navigation.navigate("payment");
        console.log("Pressed");
      };

  return (
    <View>
      <Text>details4</Text>
      <Image source={require("../images/stavenfer.jpg")} style={{width:300, height:300, borderRadius:30, padding:20}}/>
      <View>
      <Text>Movie: Captain America Winter Soldier</Text>
          <Text>Release Date: 8th February 2014</Text>
          <Text>Duration: 2 hours 10 minutes</Text>
          <Text>Start Time: 1pm</Text>
          <Text>End Time: 3:10pm</Text>
          <Text>Address: West Hills Mall</Text>
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
