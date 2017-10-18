import React, { Component } from "react";
import { Text, View } from "react-native";
import { CheckBox } from "native-base";

class Checkbox extends Component {
  state = {
    isChecked: false
  };

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));

    handleCheckboxChange(label);
  };

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <View>
        <CheckBox
          checked={isChecked}
          onPress={this.toggleCheckboxChange}
          key={label}
        />
      </View>
    );
  }
}

export default Checkbox;
