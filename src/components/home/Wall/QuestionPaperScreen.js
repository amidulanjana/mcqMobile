import React, { Component } from "react";
import { Text, View, Image, Dimensions, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";
import { getQuestions } from "../../../actions/papers";

const { width } = Dimensions.get("window");

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  paginationStyle: {
    position: "absolute",
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: "black",
    fontSize: 30
  }
};

import Question from "./Question";

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "black", fontSize: 20 }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

class QuestionPaperScreen extends Component {
  renderQuestions(questions) {
    return questions.map(question => {
      return (
        <View style={styles.slide} key={question._id}>
          <ScrollView>
            <Question question={question.question} answers={question.answers} />
          </ScrollView>
        </View>
      );
    });
  }

  componentWillMount() {
    this.props.getQuestions();
  }

  render() {
    if (this.props.questions) {
      return (
        <Swiper
          style={styles.wrapper}
          renderPagination={renderPagination}
          loop={false}
        >
          {this.renderQuestions(this.props.questions)}
        </Swiper>
      );
    }
    return <Text>Loading ..</Text>;
  }
}

const mapStateToProps = state => {
  return {
    questions: state.papers.questions
  };
};

export default connect(mapStateToProps, { getQuestions })(QuestionPaperScreen);
