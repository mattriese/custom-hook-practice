import { useState } from "react";

export default function useCustomHook() {
  const [currentUser, setCurrentUser] = useState("");

  function login(name) {
    // console.log("loginform name::", name);
    setCurrentUser(name);
  }

  function logout(evt) {
    evt.preventDefault();
    setCurrentUser("");
  }
  return {
    currentUser,
    login,
    logout
  }
}
