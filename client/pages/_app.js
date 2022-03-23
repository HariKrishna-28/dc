import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import { ChatContextProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (
    <ChatContextProvider>
      <Auth0Provider
        domain="dev-w7li5qg5.us.auth0.com"
        clientId="ZxTRyBCSAfFJvznPQA3rwpxZbtRsvHTV"
        redirectUri="http://localhost:3000"
      >
        <Component {...pageProps} />;
      </Auth0Provider>
    </ChatContextProvider>
  );
}

export default MyApp;
