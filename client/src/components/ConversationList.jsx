import { useEffect, useState } from 'react'
import styles from '../styles/ConversationList.module.css'
import friends from '../assets/icons/friends.svg'
import nitro from '../assets/icons/nitro.svg'

import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'
import DmCard from './DmCard'
// import DmCard from './DmCard'

const dummyDm = [
    {
        id: 1,
        name: "general",
        avatar: avatar1
    },
    {
        id: 2,
        name: "elon musk",
        avatar: avatar2
    },
    {
        id: 3,
        name: "random",
        avatar: avatar3
    },
    {
        id: 4,
        name: "chill",
        avatar: avatar4
    },
]


const ConversationList = () => {
    const [dm, setDm] = useState(dummyDm)
    return (
        <div className={styles.conversations}>
            <div className={styles.conversationListTop}>
                <input type="search" placeholder='Find or start a conversation' />
            </div>

            <div className={styles.conversationsContainer}>
                <div className={styles.elementsContainer}>
                    <div className={styles.scgContainer}>
                        <img
                            height={25}
                            width={25}
                            src={friends}
                            className={styles.svg}
                            alt="friends"
                        />
                    </div>
                    <p>Friends</p>
                </div>

                <div className={styles.elementsContainer}>
                    <div className={styles.scgContainer}>
                        <img
                            height={25}
                            width={25}
                            src={nitro}
                            className={styles.svg}
                            alt="nitro"
                        />
                    </div>
                    <p>Nitro</p>
                </div>
                <div className={styles.dmTitle}>
                    DIRECT MESSAGES
                    {dm.map((dm, index) => {
                        return (
                            <DmCard
                                key={index}
                                name={dm.name}
                                id={dm.id}
                                status='online'
                                avatar={
                                    dm.avatar ||
                                    'https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
                                }
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ConversationList