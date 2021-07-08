import { useState, useContext } from "react";
import UserContext from "./Context";

export default function useCustomHook() {
  let contextUser = useContext(UserContext)
  const [currentUser, setCurrentUser] = useState(contextUser);

  function login(name) {
    // console.log("loginform name::", name);
    contextUser = name;
    setCurrentUser(contextUser);
  }

  function logout(evt) {
    evt.preventDefault();
    contextUser = "";
    setCurrentUser(contextUser);
  }
  return {
    currentUser,
    login,
    logout
  }
}
