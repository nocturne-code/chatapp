import React from 'react'
import Menu from '../images/menu.png'
import Messages from './messages'
import Input from './input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const Rightside = () => {
  const {data} = useContext(ChatContext)

  return (
    <div className='rightside'>
      <div className="chatPanelInfo">
        <span>{data.user?.displayName}</span>
        <div className="Icons">
          <img src={Menu} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Rightside
