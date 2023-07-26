import { useEffect, useRef, useState } from 'react'
import './App.css'
import InputUserInfo from './components/InputUserInfo/InputUserInfo'
import { Question } from './components/Question/Question'
import ReactLoading from 'react-loading';

const App: React.FC = () => {
  
  // Only for testing purposes
  const [userInfo, setUserInfo] = useState({
    fname: "",
    lname: "",
    street: "",
    city: "",
    state: "",
    zip : ""
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading  , setLoading]   = useState(true)
  const [question , setQuestion]  = useState({})

  useEffect(() => {
    if (submitted) {
      setTimeout(getQuestions, 3000)
    } 
  }, [submitted]);

  const getQuestions = () =>{
    const postData = async () => {
      try{
        const res = await fetch("http://localhost:3000/questions", {
          method: 'Get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        })
        setQuestion(await res.json() as Question)
      }
      catch(e) {
        console.log(e)
      }
      finally {
        setLoading(false)
      }
    }
    postData().catch((e)=>console.log(e))
    return true
  }

  if(!submitted){
    return (
      <div className="main_content">
        <div className="content_border">
          <InputUserInfo 
          userInfo={userInfo}
          setUserInfo={setUserInfo} 
          setSubmitted={setSubmitted}
          />
        </div> 
      </div>
    )
  }

  else {
    if(loading){
      return(
        <div className="main_content">
          <ReactLoading
              type="spinningBubbles"
              color="#0000FF"
              height={100}
              width={50}
          />
        </div>
      )
    }
    else{
      return(
        <div className="main_content">
          <div className="content_border">
            <Question
              question={question}
            />
          </div>
        </div>
      )
    }
  }
}

export default App