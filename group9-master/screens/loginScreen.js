import React from 'react'
import { View, Text, Button } from 'react-native'

export default function logins({navigation}) {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title = "next" onPress={()=> navigation.navigate("home")}/>
    </View>
  )
}