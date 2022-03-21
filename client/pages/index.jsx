import Head from 'next/head'
import Image from 'next/image'
import { ChatView, ConversationList, SideBar } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
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
