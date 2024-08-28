import logo from './logo.svg';
import './App.css';
import {useState , useEffect} from 'react';

function App() {

  const [count, setCount] = useState(1)
  const [name,setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  //useEffect (랜더링 될때마다 .. 마운트 , 업데이터 , 언마운트)
   useEffect(()=>{
      console.log('매번 랜더링...')
   });

   //마운트 , count  useState 변화가 ...
    useEffect(()=>{
      console.log(' count 랜더링...')
   },[count]);

   //마운트 , name useState  변화가 ...
  useEffect(()=>{
    console.log(' name 랜더링...')
   },[name]);


   useEffect(()=>{
    console.log('[]  랜더링...')
   },[]);
 //식사 1시 10 분에 시작 ...
  return (
    <div className="App">
      <button onClick={handleCountUpdate}>update</button>
      <span>count:{count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
    </div>
  );
}

export default App;
