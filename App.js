import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WebViewLoader from "./WebViewLoader";
import { Button, View } from "react-native";

function HomeScreen({ navigation }) {
  var url = "https://github.com/sndpwrites";
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Tap me to load WebView"
        onPress={() => navigation.navigate("WebView", { url: url })}
      />
    </View>
  );
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WebView" component={WebViewLoader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
