import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export default function SwiperComponent1({ navigation }) {
  const handlePress = () => {
    navigation.navigate("details");
    console.log("Pressed");
  };

  return (
    <ScrollView horizontal={true}>
      <View>
        <Text style={{ fontWeight: "bold" }}>New Releases</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={handlePress}>
          <Image
            source={require("../images/merlin.jpg")}
            style={{ height: 100, width: 100, backgroundColor: "#990000" }}
          />
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../images/blacklight.jpg")}
            style={{ height: 100, width: 100, backgroundColor: "#990000" }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../images/intobadlands.jpg")}
            style={{ height: 100, width: 100, backgroundColor: "#990000" }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../images/merlin.jpg")}
            style={{ height: 100, width: 100, backgroundColor: "#990000" }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../images/stavenfer.jpg")}
            style={{ height: 100, width: 100, backgroundColor: "#990000" }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
