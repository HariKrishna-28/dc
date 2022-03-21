import React from 'react'
import ChatView from './ChatView'
import ConversationList from './ConversationList'
import SideBar from './SideBar'
import styles from '../styles/Home.module.css'

const ChatDashboard = () => {
    return (
        <div className={styles.wrapper}>
            <SideBar />
            <div className={styles.main}>
                <ConversationList />
                <ChatView />
                {/* <ConversationList />
        <ChatView /> */}
            </div>
        </div>
    )
}

export default ChatDashboard