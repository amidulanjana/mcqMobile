import React, { Component } from "react";
import { View } from "react-native";
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

  render() {
    return (
      <Card>
        <CardItem header>
          <Text>
            Which of the following is a subset of {"{b, c, d}"}?
          </Text>
        </CardItem>
        <CardItem>
          <Content>
            <ListItem button onPress={() => this.toggleSwitch1()}>
              <CheckBox
                checked={this.state.checkbox1}
                onPress={() => this.toggleSwitch1()}
              />
              <Body>
                <Text>
                  {"{}"}
                </Text>
              </Body>
            </ListItem>

            <ListItem button onPress={() => this.toggleSwitch2()}>
              <CheckBox
                checked={this.state.checkbox2}
                onPress={() => this.toggleSwitch2()}
              />
              <Body>
                <Text>
                  ගණිතය යනු අපොස සාමාන්‍ය පෙළ සදහා ඇති වැදගත්ම විශයය වේ
                </Text>
              </Body>
            </ListItem>

            <ListItem button onPress={() => this.toggleSwitch3()}>
              <CheckBox
                checked={this.state.checkbox3}
                onPress={() => this.toggleSwitch3()}
              />
              <Body>
                <Text>
                  {"{a,b,c}"}
                </Text>
              </Body>
            </ListItem>

            <ListItem button onPress={() => this.toggleSwitch4()}>
              <CheckBox
                checked={this.state.checkbox4}
                onPress={() => this.toggleSwitch4()}
              />
              <Body>
                <Text>
                  {"{d,b,c}"}
                </Text>
              </Body>
            </ListItem>

            <ListItem button onPress={() => this.toggleSwitch5()}>
              <CheckBox
                checked={this.state.checkbox5}
                onPress={() => this.toggleSwitch5()}
              />
              <Body>
                <Text>
                  {"{b,c}"}
                </Text>
              </Body>
            </ListItem>
          </Content>
        </CardItem>
        {/* <CardItem footer /> */}
      </Card>
    );
  }
}

export default Question;
