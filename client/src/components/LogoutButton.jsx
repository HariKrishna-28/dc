import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import styles from '../styles/chatHeader.module.css'

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button
                style={{ width: "130px", outline: "none", border: "0" }}
                className={styles.connectWallet}
                onClick={logout}>
                <p className={styles.title}>
                    Log Out
                </p>
            </button>
        )
    )
}

export default LogoutButton