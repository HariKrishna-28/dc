import React from 'react'
import Image from 'next/image'
import personPlus from '../assets/icons/person-plus.svg'
import video from '../assets/icons/video.svg'
import inbox from '../assets/icons/inbox.svg'
import phone from '../assets/icons/phone.svg'
import help from '../assets/icons/help.svg'
import pin from '../assets/icons/pin.svg'
import at from '../assets/icons/at.svg'
import styles from '../styles/chatHeader.module.css'
const ChatHeader = () => {
    return (
        <div className={styles.chatHeader}>
            <div className={styles.roomNameContainer}>
                <Image height={20} width={20} src={at} className={styles.svg} alt="" />
                <h3 className={styles.title}>Room Name</h3>
                <div className={styles.chatHeaderStatus} id='online' />
            </div>
            <div className={styles.connectWallet}>
                Connect Wallet
            </div>
        </div>
    )
}

export default ChatHeader