import React from 'react'

export const Question = (question:Question) => {

  console.log(question)


          // // Input
          // element = document.createElement("input");
          // element.setAttribute("type","radio");
          // element.setAttribute("id",toString(i));
          // element.setAttribute("name","answers");
          // element.setAttribute("value",questionData.answers[i].id);
  
          // form.appendChild(element);
  
          // // Label
          // element = document.createElement("lablel");
          // element.setAttribute("for",toString(i));
          // element.innerHTML = questionData.answers[i].text;
  
  return (
    <>
      <form>
        <h4>{question.question[0].questionText}</h4>
        {/* {question.question[0].answers.map((answer,i)=>{
            return (<p>{answer}</p>)
          })
        } */}
      </form>
    </>
  )
}
