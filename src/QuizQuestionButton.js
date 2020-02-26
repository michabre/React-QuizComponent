import React, { Component } from "react";

class QuizQuestionButton extends Component {
  handleClick(button_text) {
    if(button_text === this.props.quiz_question.answer) {
      this.props.showNextQuetionHander();
    }
  }

  render() {
    return (
      <li>
        <button onClick={this.handleClick.bind(this)}>
          {this.props.button_text}
        </button>
      </li>
    );
  }
}

export default QuizQuestionButton;
