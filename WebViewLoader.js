import * as React from "react";
import { WebView } from "react-native-webview";

export default function WebViewLoader({ route, navigation }) {
  //createBottomTabNavigator passes props to navigation.
  // const { url } = navigation.state.params;
  //stackNavigator passes props to route.
  const { url } = route.params;
  return (
    <WebView
      source={{
        uri: url,
      }}
      style={{ marginTop: 20 }}
    />
  );
}
