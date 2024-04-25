import React, { useState } from "react";
import "./App.css";
const questions = [
    {
        questionText: "What is the capital of France?",
        answerOptions: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false }
        ]
    },
    {
        questionText: "Who is CEO of Tesla?",
        answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false }
        ]
    },
    {
        questionText: "The iPhone was created by which company?",
        answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false }
        ]
    },
    {
        questionText: "What is the largest planet in our solar system?",
        answerOptions: [
            { answerText: "Mars", isCorrect: false },
            { answerText: "Saturn", isCorrect: false },
            { answerText: "Jupiter", isCorrect: true },
            { answerText: "Earth", isCorrect: false }
        ]
    },
    {
        questionText: "Who wrote 'To Kill a Mockingbird'?",
        answerOptions: [
            { answerText: "Harper Lee", isCorrect: true },
            { answerText: "Mark Twain", isCorrect: false },
            { answerText: "J.D. Salinger", isCorrect: false },
            { answerText: "Stephen King", isCorrect: false }
        ]
    },
    {
        questionText: "What is the chemical symbol for gold?",
        answerOptions: [
            { answerText: "Au", isCorrect: true },
            { answerText: "Ag", isCorrect: false },
            { answerText: "Fe", isCorrect: false },
            { answerText: "Cu", isCorrect: false }
        ]
    },
    {
        questionText: "Which country is known as the 'Land of the Rising Sun'?",
        answerOptions: [
            { answerText: "China", isCorrect: false },
            { answerText: "Japan", isCorrect: true },
            { answerText: "Korea", isCorrect: false },
            { answerText: "Vietnam", isCorrect: false }
        ]
    },
    {
        questionText: "Who painted the Mona Lisa?",
        answerOptions: [
            { answerText: "Leonardo da Vinci", isCorrect: true },
            { answerText: "Pablo Picasso", isCorrect: false },
            { answerText: "Vincent van Gogh", isCorrect: false },
            { answerText: "Michelangelo", isCorrect: false }
        ]
    },
    {
        questionText: "What is the tallest mountain in the world?",
        answerOptions: [
            { answerText: "Mount Kilimanjaro", isCorrect: false },
            { answerText: "Mount Everest", isCorrect: true },
            { answerText: "K2", isCorrect: false },
            { answerText: "Mount Fuji", isCorrect: false }
        ]
    },
    {
        questionText: "What is the capital of Canada?",
        answerOptions: [
            { answerText: "Toronto", isCorrect: false },
            { answerText: "Montreal", isCorrect: false },
            { answerText: "Ottawa", isCorrect: true },
            { answerText: "Vancouver", isCorrect: false }
        ]
    }
];
function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

    const handleAnswerOptionClick = (isCorrect, index) => {
        setSelectedOption(index);

        if (isCorrect) {
            setScore(score + 1);
            setTimeout(() => {
                const nextQuestion = currentQuestion + 1;
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null); // Reset selected option for the next question
            }, 1000); // Move to next question after 1 second
        } else {
            setCorrectAnswerIndex(questions[currentQuestion].answerOptions.findIndex(option => option.isCorrect));
            setTimeout(() => {
                const nextQuestion = currentQuestion + 1;
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null); // Reset selected option for the next question
                setCorrectAnswerIndex(null);
            }, 1000); // Move to next question after 1 second
        }

        if (currentQuestion + 1 === questions.length) {
            setShowScore(true);
        }
    };

    return (
        <div className="container mx-auto gradient-background">
            {showScore ? (
                <div className="text-center">
                    <div className="text-white font-bold text-2xl mb-8">Your Score: {score} out of {questions.length}</div>
                    <button className="restart-button" onClick={() => window.location.reload(false)}>Restart Quiz</button>
                </div>
            ) : (
                <div>
                    <div className="text-center mb-8">
                        <div className="text-white font-bold text-2xl mb-4">Question {currentQuestion + 1}/{questions.length}</div>
                        <div className="text-white font-bold text-2xl mb-4">{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button
                                key={index}
                                className={`font-bold py-2 px-4 rounded ${selectedOption === index
                                        ? answerOption.isCorrect ? "bg-green-500" : "bg-red-500"
                                        : index === correctAnswerIndex ? "bg-green-500" : "bg-blue-500 hover:bg-blue-700"
                                    } text-white`}
                                onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                                disabled={selectedOption !== null} // Disable options once selected
                            >
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
export default QuizApp;

