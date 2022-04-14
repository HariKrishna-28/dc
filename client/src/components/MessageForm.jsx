import React, { useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { ChatContext } from '../contexts/context'
import styles from '../styles/messageForm.module.css'
import plusFilled from '../assets/icons/plus-filled.svg'
import sticker from '../assets/icons/sticker.svg'
import smiley from '../assets/icons/smiley.svg'
import gift from '../assets/icons/gift.svg'
import gif from '../assets/icons/gif.svg'



const MessageForm = () => {
    const { user } = useAuth0()

    const {
        messageText,
        setMessageText,
        placeholder,
        gun,
        roomName,
        currentAccount,
        currentUser,
    } = useContext(ChatContext)

    const sendMessage = (event) => {
        event.preventDefault()
        if (messageText.trim() === '') return
        // console.log(window.location.pathname)
        const messageRef = gun.get(roomName)

        const newMessage = {
            sender: user.name,
            avatar: user.picture
                ? user.picture
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU',
            content: messageText.trim(),
            createdAt: Date().substring(4, 11),
            messageId: Date.now(),
        }
        // console.log(newMessage)
        messageRef.set(newMessage)
        console.log(messageRef)
        setMessageText('')
    }

    return (
        <form
            onSubmit={(e) => sendMessage(e)}
            className={styles.chatInputContainer}>
            <div className={styles.chatInputWrapper}>
                <div className={styles.svgContainer}>
                    <img
                        height={25}
                        width={25}
                        src={plusFilled}
                        className={styles.svg}
                    />
                </div>

                <input
                    type='text'
                    className={styles.chatInput}
                    value={messageText}
                    // disabled={user.name}
                    onChange={e => setMessageText(e.target.value)}
                    placeholder={placeholder}
                />

                <div className={styles.svgContainer}>
                    <img height={25} width={25} src={gift} className={styles.svg} />
                </div>
                <div className={styles.svgContainer}>
                    <img height={25} width={25} src={gif} className={styles.svg} />
                </div>
                <div className={styles.svgContainer}>
                    <img height={25} width={25} src={sticker} className={styles.svg} />
                </div>
                <div className={styles.svgContainer}>
                    <img height={25} width={25} src={smiley} className={styles.svg} />
                </div>
            </div>
        </form>
    )
}

export default MessageForm