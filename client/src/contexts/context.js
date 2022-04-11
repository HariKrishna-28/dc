import { createContext, useReducer, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Gun from "gun";
import { useAuth0 } from "@auth0/auth0-react";
import createUser from "../api/createUser";

export const chatContext = createContext();

// const gun = Gun([process.env.REACT_APP_SERVER_URL]);

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

  const createUserAccount = async () => {
    if (!isAuthenticated) return;
    console.log(isAuthenticated);

    try {
      createUser(user);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const data = {
    //     Name: user.name,
    //     "Email Address": user.email,
    //     "Profile Image": user.picture,
    //   };

    //   try {
    //     await fetch(`${process.env.REACT_APP_URL}/createuser`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }

    //   try {
    //     await fetch(`${process.env.REACT_APP_URL}/createdm`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  //   console.log(isAuthenticated);
  //   console.log(user);

  useEffect(() => {
    createUserAccount();
  }, [user]);
  return (
    <chatContext.Provider value={{ user }}>{children}</chatContext.Provider>
  );
};
