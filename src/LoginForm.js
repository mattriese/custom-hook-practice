import React, {useState} from "react";
import useCustomHook from "./CustomHook";
import Display from "./Display";

export default function LoginForm() {
  const { login, currentUser, logout } = useCustomHook()
  const [formData, setFormData] = useState()
  console.log("currentUser in LoginForm=== ", currentUser);

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
  }
  return (
    <div>
      {!currentUser && (
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text"
          onChange={handleChange}
          value={formData}>
        </input>
        <button>Login</button>
      </form>
      )}
      {currentUser && (
      <form onSubmit={logout}>
        <button>Logout</button>
      </form>
      )}
      <p>h1 inside LoginForm component (not a Display component)</p>
      <h1>"currentUser: {currentUser}"</h1>
      <hr></hr>
      <p>Display component inside LoginForm (child of LoginForm)</p>
      <Display />
    </div>
  )
}
