import './App.css';
import {useState , useRef} from 'react'


function App() {
  
  const [count , setCount] = useState(0);
  const countRef = useRef(0);  // {current:0}
  
  //read countRef , write  countRef.current=200

  console.log(countRef)
  console.log("랜더링 .....")

  const increaseCount = () =>{
      setCount(count + 1);
  } 

  const increaseRef = () =>{
       countRef.current =  countRef.current + 1;
       console.log("ref : " , countRef.current);
  }


  return (
          <div>
              <p>useState : {count}</p>
              <p>useRef : {countRef.current}</p>
              <button onClick={increaseCount}>useState 증가</button>
              <button onClick={increaseRef}>useRef 증가</button>
          </div>
  );
}

export default App;
