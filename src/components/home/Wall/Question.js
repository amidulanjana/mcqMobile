import React, { Component } from "react";
import { View, Dimensions, AsyncStorage } from "react-native";
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
import { connect } from "react-redux";
import _ from "lodash";
import { saveAnswersToArray, flagAnswers } from "../../../actions/papers";

import Checkbox from "../../common/Checkbox";

const { width, height } = Dimensions.get("window");
const items = ["One", "Two", "Three"];
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      answersList: []
    };
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  createCheckbox = answer => {
    return (
      <ListItem button key={answer}>
        <Checkbox
          label={answer}
          handleCheckboxChange={this.toggleCheckbox}
          key={answer}
        />
        <Body>
          <Text>{answer}</Text>
        </Body>
      </ListItem>
    );
  };

  saveAnswers() {
    debugger;

    var answerObject = {
      questionID: this.props.questionID,
      answers: this.selectedCheckboxes
    };

    var answerObjectArray = [];
    answerObjectArray.push(answerObject);

    var answerSet = _.reduce(
      answerObjectArray,
      function(obj, answer) {
        obj[answer.questionID] = answer.answers;
        return obj;
      },
      {}
    );

    this.props.saveAnswersToArray(answerSet);
    this.props.flagAnswers(this.props.index);
  }

  createCheckboxes = answers => answers.map(this.createCheckbox);

  render() {
    return (
      <Card style={{ height: height - 90 }}>
        <CardItem header>
          <Text>{this.props.question}</Text>
        </CardItem>
        <CardItem>
          <Content>{this.createCheckboxes(this.props.answers)}</Content>
        </CardItem>
        <CardItem footer>
          <Button
            small
            primary
            onPress={() => {
              this.saveAnswers();
            }}
          >
            <Text>Submit </Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    answersList: state.papers.answersList
  };
};

export default connect(mapStateToProps, { saveAnswersToArray, flagAnswers })(
  Question
);
