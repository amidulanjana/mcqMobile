import React, { Component, PropTypes } from "react";
import Dimensions from "Dimensions";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import { connect } from "react-redux";
import { emailChanged, passwordChanged } from "../../actions";

// import UserInput from "./UserInput";
import ButtonSubmit from "./ButtonSubmit";
import SignupSection from "./SignupSection";

import usernameImg from "../../../assets/images/username.png";
import passwordImg from "../../../assets/images/password.png";
import eyeImg from "../../../assets/images/eye_black.png";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false
    };
    this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  }

  onEmailChange(text) {
    console.log(text);
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    console.log(text);
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <Image source={usernameImg} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder="email"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="done"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Image source={passwordImg} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={this.state.showPass}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="done"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPass}
        >
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: "#ffffff"
  },
  inputWrapper: {
    flex: 1
  },
  inlineImg: {
    position: "absolute",
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9
  },
  btnEye: {
    position: "absolute",
    top: 65,
    right: 28
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: "rgba(0,0,0,0.2)"
  }
});

const mapStateToProps = state => {
  console.log(state.auth);
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(
  Form
);
