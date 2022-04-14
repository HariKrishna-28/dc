import styles from '../styles/dmCard.module.css'
import { Navigate, useNavigate } from 'react-router-dom'

const DmCard = ({ name, status, avatar, id }) => {
    // const router = useRouter()
    const navigate = useNavigate()

    const changeUrl = () => {
        navigate(`?conversation=${id}&name=${name}`)
    }

    console.log(window.location.search)

    return (
        <div className={styles.dmCard} onClick={changeUrl}>
            <div className={styles.dmAvatarContainer}>
                <img
                    src={avatar}
                    className={styles.dmAvatar}
                    height={48}
                    width={48}
                    alt={name}
                />
                <div className={styles.dmCardStatus} id={status} />
            </div>
            <p className={styles.dmCardName}>{name}</p>
        </div>
    )
}

export default DmCard
