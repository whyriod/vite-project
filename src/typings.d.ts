interface userInputState {
    fname: string,
    lname: string,
    street: string,
    city: string,
    state: string,
    zip: string,
}

interface Question {
    questions: [
        userid: string,
        id: string,
        questionText,
        answers: [
            {
                id: number
                text: string
            }
        ]
    ]
}

interface QuestionProps {
    question: questions
}

interface InputUserInfoProps {
    userInfo: userInputState,
    setUserInfo: React.Dispatch<userInputState>,
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}
