import React, { Component, PropTypes } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Wallpaper from "./Wallpaper";
import ButtonSubmit from "./ButtonSubmit";
import SignupSection from "./SignupSection";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit navigation={this.props.navigation} />
      </Wallpaper>
    );
  }
}
