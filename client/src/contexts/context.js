import React, { createContext, useReducer, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Gun from "gun";
import { useAuth0 } from "@auth0/auth0-react";
import createUser from "../api/createUser";
import { useLocation } from "react-router-dom";
import getCurrentUserData from "../api/getCurrentUserData";

export const ChatContext = createContext();

// const gun = Gun([process.env.REACT_APP_SERVER_URL]);
const gun = Gun([`${process.env.REACT_APP_SERVER_URL}/gun`]);

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

export const ChatProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  //   const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentAccount, setCurrentAccount] = useState("");
  const [roomName, setRoomName] = useState("");
  const [placeholder, setPlaceholder] = useState("Message...");
  const [messageText, setMessageText] = useState("");
  const [currentUser, setCurrentUser] = useState();

  // if (isAuthenticated) {
  //   try {
  //     const data2 = createUser(user);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  const createUserAccount = async () => {
    if (!isAuthenticated) return;

    try {
      const response = await createUser(user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    // const userId = `${user.email.slice(0, user.email.indexOf("@"))}-user`;
    // try {
    //   const response = await getCurrentUserData(user.email);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const getMessages = () => {
    const _name = window.pathname;
    // const _roomId = router.query.id;
    const messagesRef = gun.get(_name);

    messagesRef.map().once((message) => {
      dispatch({
        type: "add",
        data: {
          sender: message.sender,
          content: message.content,
          avatar: message.avatar,
          createdAt: message.createdAt,
          messageId: message.messageId,
        },
      });
    });
  };

  useEffect(() => {
    createUserAccount();
  }, [user]);

  useEffect(() => {
    console.log(window.location.search);
    // const searchParam = new URLSearchParams(window.location.search);
    // console.log(searchParam);
    setRoomName(window.location.search);
    dispatch({ type: "clear", data: {} });
    setPlaceholder(`Message ${window.location.search}`);
    setMessageText("");
    getMessages();
  }, [window.location.search]);

  return (
    <ChatContext.Provider
      value={{
        // currentAccount,
        roomName,
        setRoomName,
        placeholder,
        messageText,
        setMessageText,
        state,
        gun,
        currentUser,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
