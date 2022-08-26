import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#990000",
  },
  slide2: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#990000",
  },
  slide3: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#990000",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Image
            source={require("../images/badboys.jpg")}
            style={{ height: 300, width: 300, backgroundColor: "#990000" }}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            source={require("../images/spiderman.jpg")}
            style={{ height: 300, width: 300, backgroundColor: "#990000" }}
          />
        </View>
        <View style={styles.slide3}>
          <Image
            source={require("../images/euphoria.jpg")}
            style={{ height: 300, width: 300, backgroundColor: "#990000" }}
          />
        </View>
      </Swiper>
    );
  }
}
