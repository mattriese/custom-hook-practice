import './App.css';
import LoginForm from './LoginForm';
import Display from './Display';
import useCustomHook from './CustomHook';

function App() {
  const { currentUser } = useCustomHook();
  console.log("currentUser in App=== ", currentUser);
  return (
    <div className="App">
      <p>Display component inside App (sibling of LoginForm)</p>
      <Display />
      <LoginForm />
    </div>
  );
}

export default App;
