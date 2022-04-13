import React from 'react'
import styles from '../styles/roomAvatar.module.css'
import { Navigate, useNavigate } from 'react-router-dom'

const RoomAvatar = ({ id, avatar, name }) => {
    // const router = useRouter()
    const navigate = useNavigate()

    const changeUrl = () => {
        navigate(`?channel=${id}&name=${name}`)
    }

    return (
        <div className={styles.wrapper} onClick={changeUrl}>
            <div className={styles.roomAvatar}>
                <img
                    draggable={false}
                    src={avatar}
                    className={styles.roomAvatarImage}
                    height={48}
                    width={48}
                    alt={name}
                />
            </div>
        </div>
    )
}

export default RoomAvatar