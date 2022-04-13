import "./App.css";
import { ChatDashboard, LoginButton, LogoutButton } from "./components";
import { useAuth0 } from "@auth0/auth0-react";
import { ChatProvider } from "./contexts/context";
import LoadScreen from "./components/LoadScreen";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) return <LoadScreen />;
  return (
    <>
      <ChatProvider>
        {isAuthenticated ? (
          <>
            <ChatDashboard />
          </>
        ) : (
          <LoginButton />
        )}
      </ChatProvider>
    </>
  );
}

export default App;
