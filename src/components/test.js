import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Content,
  Toast,
  Button,
  Text,
  Icon,
  Root
} from "native-base";
export default class ToastExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };

    //this._toastShow = this._toastShow.bind(this);
    this.condition = this.condition.bind(this);
  }

  _toastShow() {
    Toast.show({
      text: "Authenication Failed!",
      position: "bottom",
      buttonText: "Okay"
    });
  }

  condition() {
    if (true) {
      this._toastShow();
    }
  }

  render() {
    return (
      <Root>
        <Button onPress={this.condition}>
          <Text>Toast</Text>
        </Button>
      </Root>
    );
  }
}
