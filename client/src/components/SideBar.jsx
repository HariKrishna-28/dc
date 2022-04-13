import styles from '../styles/sidebar.module.css'
import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
// import { RoomAvatar } from '.'
import { Navigate, useNavigate } from 'react-router-dom'

import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'
import RoomAvatar from './RoomAvatar'
import getChannels from '../api/getchannels'
import LoadScreen from './LoadScreen'

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
    // const router = useRouter()
    const [channels, setChannels] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(async () => {
        try {
            const response = await getChannels()
            setChannels(response)
            console.log(response)
            setLoad(false)
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <div className={styles.wrapper}>
            {!load ?
                channels?.map((channel, index) => (
                    <RoomAvatar
                        key={index}
                        id={channel.roomId}
                        avatar={channel.image}
                        name={channel.roomName}
                    />
                ))
                :
                <LoadScreen />}
        </div>
    )
}

export default SideBar