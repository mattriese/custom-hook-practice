import './App.css';
import LoginForm from './LoginForm';
import UserContext from './Context';
import useCustomHook from './CustomHook';
import Display from './Display';

function App() {
  const { currentUser } = useCustomHook();
  console.log("currentUser in App=== ", currentUser);
  return (
    <UserContext.Provider value={currentUser}>
      <div className="App">
        <Display />
        <hr></hr>
        <LoginForm />
      </div>
    </UserContext.Provider>
  );
}

export default App;
