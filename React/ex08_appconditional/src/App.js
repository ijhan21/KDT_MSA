import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [isLogin,setIsLogin] = useState(false);

  const handleLogin = () =>{
        setIsLogin(true);
  };

  const handleLogout = () =>{
        setIsLogin(false);
  };


  return (
    <div className="App">
        {  //jsx
            isLogin ? (<div><button onClick={handleLogout}>Logout</button></div>) 
                      : (<div><button onClick={handleLogin}>Login</button></div>)
        }
    </div>
  );
}

export default App;
