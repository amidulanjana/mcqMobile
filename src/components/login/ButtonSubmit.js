import React, { Component, PropTypes } from "react";
import Dimensions from "Dimensions";
import {
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
  Alert,
  View,
  Text,
  Keyboard
} from "react-native";
import dismissKeyboard from "dismissKeyboard";
import { Toast, Root } from "native-base";
import { connect } from "react-redux";
import { loginUser } from "../../actions";

import spinner from "../../../assets/images/loading.gif";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const MARGIN = 40;

class ButtonSubmit extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
  }

  async _onPress(navigation) {
    dismissKeyboard();
    if (this.state.isLoading) return;

    const { email, password } = this.props;

    let user = await this.props.loginUser({ email, password });

    this.setState({ isLoading: true });
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start();
    // make this true
    //for dev purpose
    if (this.props.error == false) {
      setTimeout(() => {
        this._toastShow();
        this.setState({ isLoading: false });
        this.buttonAnimated.setValue(0);
        this.growAnimated.setValue(0);
      }, 2300);
    } else {
      setTimeout(() => {
        this._onGrow();
      }, 2000);

      setTimeout(() => {
        navigation.navigate("home");
        this.setState({ isLoading: false });
        this.buttonAnimated.setValue(0);
        this.growAnimated.setValue(0);
      }, 2300);
    }
  }

  _toastShow() {
    Toast.show({
      text: "Authenication Failed!",
      position: "bottom",
      buttonText: "Okay",
      type: "danger",
      duration: 3000
    });
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start();
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN]
    });

    return (
      <View style={styles.container}>
        <Animated.View style={{ width: changeWidth }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this._onPress(this.props.navigation);
            }}
            activeOpacity={1}
          >
            {this.state.isLoading ? (
              <Image source={spinner} style={styles.image} />
            ) : (
              <Text style={styles.text}>LOGIN</Text>
            )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, { transform: [{ scale: changeScale }] }]}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    top: -95,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F035E0",
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: "#F035E0",
    borderRadius: 100,
    alignSelf: "center",
    zIndex: 99,
    backgroundColor: "#F035E0"
  },
  text: {
    color: "white",
    backgroundColor: "transparent"
  },
  image: {
    width: 24,
    height: 24
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, { loginUser })(ButtonSubmit);
