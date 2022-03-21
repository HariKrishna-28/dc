import React from 'react'
import ChatHeader from './ChatHeader'
import styles from '../styles/chatView.module.css'
import MessageForm from './MessageForm'

const ChatView = () => {
    return (
        <div className={styles.chatView}>
            <ChatHeader />
            <div className={styles.messagesContainer}>
                <MessageForm />
            </div>
        </div>
    )
}

export default ChatView