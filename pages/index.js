import EightBall from '../components/EightBall'
import Head from 'next/head'
import Header from '../components/Header'
import QuestionForm from '../components/QuestionForm'
import QuestionLog from '../components/QuestionLog'
import data from '../data/answers.json'
import { useState } from 'react'

export default function Home() {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const questionHandler = (question) => {
    const index = Math.floor(Math.random() * data.length)
    const answer = data[index];
    const answeredQuestion = {
      id: answeredQuestions.length + 1,
      answer,
      question
    }
    setAnsweredQuestions(state => [...state, answeredQuestion])
  }

  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <QuestionForm action={questionHandler} />
      <EightBall answeredQuestion={answeredQuestions[answeredQuestions.length - 1]} />
      <QuestionLog answeredQuestions={answeredQuestions} />

    </div>
  )
}
