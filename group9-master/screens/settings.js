import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

export default function settings() {
  const handlePress = () => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/logout", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setLoading(false);
          navigation.navigate("bottomTabs");
        }
      });
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    
  };

  return (
    <SafeAreaView>
    <View>
      <Text>Settings Screen</Text>
      <TouchableOpacity>
        <Text
          style={{
            color: "blue",
            fontSize: 18,
            fontWeight: "700",
            textDecorationLine: "underline",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
