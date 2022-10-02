import React, { Component } from "react";
import styles from "./answer.module.css";

class Answers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAnswered: false,
			classNames: ["", "", "", ""],
			explaination: "",
		};
		this.checkAnswer = this.checkAnswer.bind(this);
		this.clearClasses = this.clearClasses.bind(this);
	}

	checkAnswer(e) {
		let { isAnswered, explaination } = this.props;

		if (!isAnswered) {
			let elem = e.currentTarget;
			let { correct, increaseScore } = this.props;
			let answer = Number(elem.dataset.id);
			let updatedClassNames = this.state.classNames;

			if (answer === correct) {
				updatedClassNames[answer - 1] = "right";
				increaseScore();
			} else {
				updatedClassNames[answer - 1] = "wrong";
				this.setState((state) => ({ ...state, explaination: explaination }));
			}

			this.setState({
				classNames: updatedClassNames,
			});

			this.props.showButton();
			var myTime = setTimeout(() => {
				this.clearClasses();
				//console.log("IN SET Timeout")
			}, 5000);
		}
	}
	clearClasses() {
		this.setState({
			classNames: ["", "", "", ""],
		});
	}
	render() {
		let { answers } = this.props;
		let { classNames } = this.state;

		let transition = {
			transitionName: "example",
			transitionEnterTimeout: 500,
			transitionLeaveTimeout: 300,
		};

		const options = ["A", "B", "C", "D"];

		return (
			<div id="answers">
				<ul
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gridTemplateRows: "1fr 1fr",
					}}
				>
					{answers.map((a, idx) => {
						return (
							<li
								style={{ margin: "12px" }}
								onClick={this.checkAnswer}
								className={classNames[idx]}
								data-id={idx}
								key={idx}
							>
								<span>{options[idx]}</span>
								<p>{answers[idx]}</p>
							</li>
						);
					})}
				</ul>
				{!this.state.isAnswered && <p>{this.state.explaination}</p>}
			</div>
		);
	}
}

export default Answers;
