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
import LogoutButton from './LogoutButton'
import { useAuth0 } from "@auth0/auth0-react";



const ChatHeader = () => {
    const { user } = useAuth0();

    return (
        <div className={styles.chatHeader}>
            <div className={styles.roomNameContainer}>
                <Image height={20} width={20} src={at} className={styles.svg} alt="" />
                <h3 className={styles.title}>Room Name</h3>
                <div className={styles.chatHeaderStatus} id='online' />
            </div>
            <img height={40} style={{ borderRadius: "50%", marginRight: "5px" }} src={user.picture} />
            <div className={styles.connectWallet}>
                {/* Connect Wallet */}
                <div>
                </div>
                <LogoutButton />
            </div>
        </div>
    )
}

export default ChatHeader