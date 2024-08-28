import './App.css';
import {useEffect, useState , useCallback} from 'react';

function App() {

  const [number,setNumber] = useState(0);
  const [toggle , setToggle] = useState(true);

  /*
  const someFunction = () => {
    console.log("number : " + number);
    return;
  }
  */
  const someFunction = useCallback(() =>{
    console.log("number : " + number);
    return;
  },[number]);



  useEffect(()=>{
      console.log("useEffect Call");
  },[someFunction]);   //함수가 주소값을 가지고 있다 (함수도 객체 )
                       //함수가 주소가 바뀌면 .... useEffect 실행 .. 다른 값으로 판단

// useEffect [값] 바뀌면 호출.....  같으면 ... (처음:xx번지 ...  랜더링이 안되고 사용하면 보장)
//                                           (처음:xx번지 ... 랜더링이 되면 초기화 함수 재할당 주소 변경) 


  /*
            useEffect (콜백함수,[의존성 배열])
            
            1. useEffect(()=>{ 작업 });  랜더링 될때마다
            
            2번의 논리 알고 있어  (value 함수의 이름 )
            2. useEffect(()=>{ 작업 }, [value]);  화면에 첫 랜터링 될대 실행 ,  value 값이 바뀔때 실행
            
            3. useEffect(()=>{ 작업 }, []);     화면에 첫 랜터링  한번 실행 

           답) useState 바꾸면 랜더링 발생 >> 함수 초기화 (다른 주소값 할당) >> useEffect  함수의 주소가 다르니
               useEffect  계속 호출

           해결) useCallBack


  */

  return (
    <div className="App">
        <input type='number'
               value={number}
               onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={()=>setToggle(!toggle)}>{toggle.toString()}</button>
        <hr />
        <button onClick={someFunction}>Call someFunction</button>
    </div>
  );
}

export default App;
