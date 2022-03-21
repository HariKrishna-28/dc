import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import styles from '../styles/chatHeader.module.css'


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <button
                style={{ width: "130px", outline: "none", border: "0" }}
                className={styles.connectWallet}
                onClick={loginWithRedirect}
            >
                Login
            </button>
        )
    )
}

export default LoginButton