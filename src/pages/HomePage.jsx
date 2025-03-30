import React from 'react'
import ChatInput from '../components/chat/ChatInput'
import ChatBoard from '../components/chatboard/ChatBoard'

const HomePage = () => {
  return (
    <div className='mx-4 md:w-[80%] max-w-[800px] md:mx-auto mt-32'>
      <ChatInput />
      <ChatBoard />
    </div>
  )
}

export default HomePage
