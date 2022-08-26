import { StyleSheet, Text, View } from "react-native";
import register from "./screens/register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import login from "./screens/login";
import logins from "./screens/loginScreen";
import welcome from "./screens/welcome";
import bottomTabs from "./screens/bottomTabs";
import payment from "./screens/payment";
import details from "./details/details";
import details1 from "./details/details1";
import details2 from "./details/details2";
import details3 from "./details/details3";
import details4 from "./details/details4";

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome" >
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="logins" component={logins} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="bottomTabs" component={bottomTabs} />
        <Stack.Screen name="welcome" component={welcome} />
        <Stack.Screen name="payment" component={payment} />
        <Stack.Screen name="details" component={details} />
        <Stack.Screen name="details1" component={details1} />
        <Stack.Screen name="details2" component={details2} />
        <Stack.Screen name="details3" component={details3} />
        <Stack.Screen name="details4" component={details4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
