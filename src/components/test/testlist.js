import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";

function Testlist() {
    const [questions, setCourse]=useState({});
    useEffect(() => {
        fetch("https://636487bf7b209ece0f4810ac.mockapi.io/api/question")
          .then((response) => response.json())
          .then((res) => setCourse(res))
          .catch((e) => console.log(e));
      }, []);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [color, setColor] = useState("");
	const handleAnswerOptionClick = (answer) => {
		if (answer===questions[currentQuestion]?.answerkt) {
			setScore(score + 1);
			// setColor("true")
		}
		else{
			//setColor("false")
			// alert(questions[currentQuestion].answerkt)
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='test_test'>
			<div className="header_test">
				<h1>Test Quiz</h1>
			</div>
			<div className="center_test">
				{showScore ? (
					<div className='score-section_test'>
						You scored {score} out of {questions.length}
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count_test'>
								<span className="span_test">Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text_test'>Question{currentQuestion + 1}: {questions[currentQuestion]?.question}</div>
						</div>
						<div className='answer'>
							<div className='answer_header'>
								<button className={`btn_bt_test1  ${color}`} onClick={() => 
									handleAnswerOptionClick(questions[currentQuestion]?.answer1)}>A: {questions[currentQuestion]?.answer1}</button>
								
								<button className={`btn_bt_test1  ${color}`}  onClick={() => 
									handleAnswerOptionClick(questions[currentQuestion]?.answer2)}>B: {questions[currentQuestion]?.answer2}</button>
							</div>
							<div className='answer_footer'>
								<button className={`btn_bt_test1  ${color}`} onClick={() => 
									handleAnswerOptionClick(questions[currentQuestion]?.answer3)}>C: {questions[currentQuestion]?.answer3}</button>
								
								<button className={`btn_bt_test1  ${color}`} onClick={() => 
									handleAnswerOptionClick(questions[currentQuestion]?.answer4)}>D: {questions[currentQuestion]?.answer4}</button>
							</div>
						</div>
					</>
				)}
			</div>
			<div className="footer_test">

			</div>
		</div>
	);
}

export default Testlist;