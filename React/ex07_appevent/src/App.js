import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [count,setCount] = useState(0);
  //useState 값이 변환 다시 랜더링 (함수가 재호출 : 일반변수 초기화 ...)
  const [text , setText] = useState('');

  const handleClick = () =>{
    setCount(count + 1);
  }

  const inputClick = (e) =>{
      setText(e.target.value);
  }


  return (
    <div style={{padding:'15px'}}>
         <p> count : {count}</p>
         <button onClick={handleClick}>count증가</button>
         <hr />
         <input type="text" value={text} onChange={inputClick} />
         <p>Enter text : {text}</p>
    </div>
  );
}

export default App;
