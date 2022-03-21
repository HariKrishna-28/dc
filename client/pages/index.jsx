import Head from 'next/head'
import Image from 'next/image'
import { ChatDashboard, ChatView, ConversationList, SideBar } from '../components'
import styles from '../styles/Home.module.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/LoginButton';
import { ScaleLoader } from 'react-spinners'
import LogoutButton from '../components/LogoutButton';


export default function Home() {
  const { isAuthenticated } = useAuth0()
  const { isLoading } = useAuth0();
  if (isLoading) return <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    height: "100vh",
  }}>
    <ScaleLoader
      color="#4149a9"
    />
  </div>
  return (
    <>
      <LoginButton />
      {isAuthenticated &&
        <>
          <ChatDashboard />
        </>
      }
    </>
  )
}
