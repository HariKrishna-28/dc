import React, { useContext } from 'react'
import { ChatContext } from '../contexts/context'
import styles from '../styles/chatView.module.css'
import ChatHeader from './ChatHeader'
import MessageCard from './MessageCard'
import MessageForm from './MessageForm'

const ChatView = () => {
    const { state } = useContext(ChatContext)
    const formattedMessagesArray = () => {
        const uniqueArray = state.messages.filter((value, index) => {
            const _value = JSON.stringify(value)
            return (
                index ===
                state.messages.findIndex(obj => {
                    return JSON.stringify(obj) === _value
                })
            )
        })
        return uniqueArray
    }

    return (
        <div className={styles.chatView}>
            <ChatHeader />
            <div className={styles.messagesContainer}>
                {formattedMessagesArray().map((message, index) => (
                    <MessageCard
                        key={index}
                        avatar={message.avatar}
                        sender={message.sender}
                        timestamp={message.createdAt}
                        content={message.content}
                    />
                ))}
            </div>
            <MessageForm />
        </div>
    )
}

export default ChatView