import './App.css';
import { useState, createContext, useContext } from "react";

//1. Context  생성
const ThemeContext = createContext(); //전역적으로

function App() {

  const [theme , setTheme] = useState('light');
  
  return (
    //2. Provider 컨텍스트 값을 하위 컴포넌트에게 전달
     <ThemeContext.Provider value={{theme,setTheme}}>
           <Toolbar/>
     </ThemeContext.Provider>
  );
}

function Toolbar(){  // theme  가 테마기능을 사용하지 않아요 
  return (
    <div>
         <ThemeButton />
    </div>
  )
}

function ThemeButton(){
  //나는  부모로부터 전달받은 값이 필요해
  //3. useContext 값을 ...가져와요
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}



export default App;
