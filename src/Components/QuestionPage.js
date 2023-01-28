import React from 'react'
import SingleQuestion from './SingleQuestion.js'

export default function QuestionPage(props) {
    const run = () => {
        console.log("Clunk");
    }
    
    

    const fiveQuestion = props.question.map(element => {
        return (
            <SingleQuestion
            key={element.id}
            done={props.done}
            handleClick={(obj) => props.handler({element, obj})}
            
            {...element}
         />)
        })
    
    
  
    
    return(
        <div className="entire-div">
            <div  className="questionpage-div">
            <div className={props.done ?  "disabled" : ""}>
                {fiveQuestion}
            </div>
            <div className="inline-button">
            {props.done && <span>You scored {props.numCorrect}/5 correct answers</span>}
            <button onClick={props.checkAnswers}className="submit--button">{props.done ? "New Game" : "Check answers"}</button>
            </div>
            </div>
         </div>
         
    )
}