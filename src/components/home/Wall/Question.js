import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import {
  Icon,
  Container,
  Content,
  Card,
  CardItem,
  Button,
  Text,
  Item,
  Input,
  Body,
  CheckBox,
  ListItem,
  Right
} from "native-base";

const { width, height } = Dimensions.get("window");

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false
    };
  }

  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
    });
  }

  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2
    });
  }

  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3
    });
  }

  toggleSwitch4() {
    this.setState({
      checkbox4: !this.state.checkbox4
    });
  }

  toggleSwitch5() {
    this.setState({
      checkbox5: !this.state.checkbox5
    });
  }

  renderAnswers(answers) {
    return answers.map((answer, i) => {
      return (
        <ListItem button onPress={() => this.toggleSwitch1()} key={i}>
          <CheckBox
            checked={this.state.checkbox1}
            onPress={() => this.toggleSwitch1()}
          />
          <Body>
            <Text>{answer}</Text>
          </Body>
        </ListItem>
      );
    });
  }

  render() {
    return (
      <Card style={{ height: height - 90 }}>
        <CardItem header>
          <Text>{this.props.question}</Text>
        </CardItem>
        <CardItem>
          <Content>{this.renderAnswers(this.props.answers)}</Content>
        </CardItem>
        {/* <CardItem footer /> */}
      </Card>
    );
  }
}

export default Question;
