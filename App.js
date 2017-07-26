import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";

import Main from "./src/components/Main";
import reducers from "./src/reducers";

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });

    var config = {
      apiKey: "AIzaSyAzlaT_t0IdW1CvJBin4HZVgPrcTyEczG4",
      authDomain: "mcqonline-226c4.firebaseapp.com",
      databaseURL: "https://mcqonline-226c4.firebaseio.com",
      projectId: "mcqonline-226c4",
      storageBucket: "",
      messagingSenderId: "342448460093"
    };
    await firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
