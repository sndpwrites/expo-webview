## React Native Expo Webview

This project was developed with [Expo managed workflow](https://docs.expo.io/get-started/installation/), [React Native WebView](https://github.com/react-native-community/react-native-webview) and [React Navigation](https://reactnavigation.org/docs/getting-started).
I use stack navigator library for this demo to move between the screens, but any react navigation library can be used with this (e.g. createBottomTabNavigator).

A simple two page app that demonstrates the usage of loading a WebView onto a mobile app. WebView lets us load a webpage using a source attribute, which means it acts as a in-app web browser.

Expo already lets us write native code using JSX syntax which is compiled to both android and ios platforms. With the added usage of a WebView, we can now write actual native code for Web, deploy it and access it using a URL. For example, I can use a URL builder based the user's actions, and then pass the URL as a prop to webview to load and display natively within the app.

Use <code> expo start</code> to run.
