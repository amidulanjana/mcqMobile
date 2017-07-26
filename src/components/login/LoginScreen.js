import React, { Component, PropTypes } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Wallpaper from "./Wallpaper";
import ButtonSubmit from "./ButtonSubmit";
import SignupSection from "./SignupSection";
import { Root } from "native-base";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Root>
        <Wallpaper>
          <Logo />
          <Form />
          <SignupSection />
          <ButtonSubmit navigation={this.props.navigation} />
        </Wallpaper>
      </Root>
    );
  }
}
