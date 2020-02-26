import React, { Component } from "react";

class QuizEnd extends Component {
  render() {

    if (this.props.isQuizEnd) {
        return (
            <div>
              <p>Thanks for playing!</p>
              <a href="">Reset Quiz</a>
            </div>
          );
    } else {
        return '';
    }
    
  }
}

export default QuizEnd;
