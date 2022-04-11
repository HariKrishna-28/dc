import React from 'react'
import styles from '../styles/Home.module.css'
import ChatView from './ChatView'
import ConversationList from './ConversationList'
import SideBar from './SideBar'


const ChatDashboard = () => {
    return (
        <div className={styles.wrapper}>
            <SideBar />
            <div className={styles.main}>
                <ConversationList />
                <ChatView />
            </div>
        </div>
    )
}

export default ChatDashboard