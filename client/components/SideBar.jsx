import styles from '../styles/sidebar.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { RoomAvatar } from '.'

import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'

const dummyChannels = [
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

const SideBar = () => {
    const router = useRouter()
    const [channels, setChannels] = useState(dummyChannels)
    return (
        <div className={styles.wrapper}>
            {channels.map((channel, index) => (
                <RoomAvatar
                    key={index}
                    id={channel.id}
                    avatar={channel.avatar}
                    name={channel.name}
                />
            ))}
        </div>
    )
}

export default SideBar