import "./App.css";
import { ScaleLoader } from "react-spinners";
import { ChatDashboard, LoginButton, LogoutButton } from "./components";
import { useAuth0 } from "@auth0/auth0-react";
import { ChatProvider } from "./contexts/context";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  console.log(isLoading);
  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          height: "100vh",
        }}
      >
        <ScaleLoader color="#4149a9" />
      </div>
    );
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
