// import React, { useState, useEffect } from 'react';
// import { Button, Row, Col, Select, Input, Form, Card, Result } from 'antd';
// import './index.scss';
// import quizQuestions from './utils/quesrions'
// import Quiz from './utils/Quiz';
// // import { UserOutlined } from '@ant-design/icons';
// const { Search } = Input;
// const { Option } = Select;
// const FormItem = Form.Item;


// function FillAssessment() {
//     const [counter , setCounter] = useState(0);
//     const [questionId , setQauestionId] = useState(1);
//     const [answerOptions , setanswerOptions] = useState([]);
//     const [answer,setanswer] = useState('');
//     const [question,setquestion] = useState('');
//     const [result,setresult] = useState('');
//     const [answersCount , setanswersCount] = useState({});

   
//       useEffect(() =>{
//         const shuffledAnswerOptions = quizQuestions.map(question =>
//             shuffleArray(question.answers)
//           );
//           setquestion(quizQuestions[0].question)
//           setanswerOptions(shuffledAnswerOptions[0])
//       },[])
    
//       function shuffleArray(array) {
//         var currentIndex = array.length,
//           temporaryValue,
//           randomIndex;
    
//         // While there remain elements to shuffle...
//         while (0 !== currentIndex) {
//           // Pick a remaining element...
//           randomIndex = Math.floor(Math.random() * currentIndex);
//           currentIndex -= 1;
    
//           // And swap it with the current element.
//           temporaryValue = array[currentIndex];
//           array[currentIndex] = array[randomIndex];
//           array[randomIndex] = temporaryValue;
//         }
    
//         return array;
//       }
    
//      function handleAnswerSelected(event) {
//         // setUserAnswer(event.currentTarget.value);
    
//         if (questionId < quizQuestions.length) {
//           setTimeout(() => setNextQuestion(), 300);
//         } else {
//           setTimeout(() => setResults(getResults()), 300);
//         }
//       }
    
//      function setUserAnswer(answer) {
//         // this.setState((state, props) => ({
//         //   answersCount: {
//         //     ...state.answersCount,
//         //     [answer]: (state.answersCount[answer] || 0) + 1
//         //   },
//         //   answer: answer
//         // }));
//       }
    
//       function setNextQuestion() {
//         const counter = counter + 1;
//         const questionId = questionId + 1;
//         setCounter(counter);
//         setQauestionId(questionId);
//         setquestion(quizQuestions[counter].question)
//         setanswerOptions(quizQuestions[counter].answers)
//         setanswer("")
//       }
    
//       function getResults() {
//         const answersCount = answersCount;
//         const answersCountKeys = Object.keys(answersCount);
//         const answersCountValues = answersCountKeys.map(key => answersCount[key]);
//         const maxAnswerCount = Math.max.apply(null, answersCountValues);
//         return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
//       }
    
//       function setResults(result) {
//         if (result.length === 1) {
//         //   this.setState({ result: result[0] });
//           setresult(result[0])
//         } else {
//         //   this.setState({ result: 'Undetermined' });
//           setresult("Undetermined")
//         }
//       }

    
//    function renderQuiz() {
//         return (
//           <Quiz
//             answer={answer}
//             answerOptions={answerOptions}
//             questionId={questionId}
//             question={question}
//             questionTotal={quizQuestions.length}
//             onAnswerSelected={()=>handleAnswerSelected()}
//           />
//         );
//       }
    
//     function  renderResult() {
//         return <Result quizResult={result} />;
//       }

//     return (
//         <div className="all-skills-main">
//             <Row className="">
//                 <Col span={24}>
//         {result ? renderResult() : renderQuiz()}
//                 </Col>
//             </Row>
//         </div >
//     );
// }

// export default FillAssessment;
