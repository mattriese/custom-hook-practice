import './App.css';
import UserContext from './Context';
import useCustomHook from './CustomHook';
import App from './App';

function App2() {
  const { currentUser } = useCustomHook();
  console.log("currentUser in App2=== ", currentUser);

  return (
    <div>
      <UserContext.Provider value={currentUser}>
        <App />
      </UserContext.Provider>
    </div>
  );
}

export default App2;
