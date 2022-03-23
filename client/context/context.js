import React, { createContext, useState, useEffect, useReducer } from "react";
import { useRouter } from "next/router";
// import Gun from "gun";
import { useAuth0 } from "@auth0/auth0-react";

export const ChatContext = createContext();

const baseUrl = "http://localhost:5000";

// const gun = Gun([baseUrl]);
const initialState = { messages: [] };

const reducer = (state, action) => {
  try {
    if (action.type == "clear") return { messages: [] };
    if (action.type == "add")
      return { messages: [...state.messages, action.data] };
  } catch (error) {
    console.error(error);
  }
};

export const ChatContextProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentAccount, setCurrentAccount] = useState("");
  const [roomName, setRoomName] = useState("");
  const [placeholder, setPlaceholder] = useState("Message...");
  const [messageText, setMessageText] = useState("");
  const [currentUser, setCurrentUser] = useState();

  useEffect(async () => {
    // if (!isAuthenticated) return;
    try {
      // const currentAccount = user;
      const response = await fetch(
        `http://localhost:3000/api/getCurrentUserData?account=${user?.email}`
      );
      const data = await response.json();
      console.log(data);
      setCurrentUser(data);
    } catch (error) {
      console.error(error);
    }
  }, [user, isAuthenticated]);

  return (
    <ChatContext.Provider
      value={{
        user,
        isAuthenticated,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
