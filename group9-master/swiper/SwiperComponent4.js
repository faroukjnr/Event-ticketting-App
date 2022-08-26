import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});

export default class SwiperComponent extends React.Component {
  render() {
    return (
      <Swiper style={{ backgroundColor: "#990000" }} showsButtons={true}>
        <View style={{ backgroundColor: "#990000" }}>
          <Image
            source={require("../images/badboys.jpg")}
            style={{ height: 200, width: 300, backgroundColor: "#990000" }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../images/capamerica.jpg")}
            style={{ height: 200, width: 300, backgroundColor: "#990000" }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../images/joker.jpg")}
            style={{ height: 300, width: 300, backgroundColor: "#990000" }}
          />
        </View>
      </Swiper>
    );
  }
}
