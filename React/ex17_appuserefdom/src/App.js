import './App.css';
import {useEffect , useRef} from 'react';


function App() {
    const inputRef = useRef();  
  
    useEffect(() => {
      console.log(inputRef);
      inputRef.current.focus(); //기능 
    },[]);


    const login = ()=>{
      alert(`방가방가${inputRef.current.value}`);
      inputRef.current.focus(); //기능
    }

    return (
  
    <div className="App">
          <input ref={inputRef} text="text" placeholder='username' />
          <button onClick={login}>로그인</button>
    </div>
  );
}

export default App;
