import './App.css';
import {useState , useReducer} from 'react';


//함수생성: 
//마치 자바의 eum 열거형을 사용해서 편하게 접근
//데이터 베이스 코드성 테이블  01 입금 , 02 출금 >> JAVA 열거타입
const ACTION_TYPES ={
  deposit: 'deposit',
  withdraw: 'withdraw'
}



const reducer = (state,action) => {
  //console.log("reducer 호출 ",state,action);
  //{type:"deposit", payload:1000}
  switch(action.type){
    case ACTION_TYPES.deposit: //입급
          return state + action.payload;
    case ACTION_TYPES.withdraw: //출금
          return state - action.payload;
    default :
          return state;      
  }



  return state + action.payload;
};
/*
reducer : 로직 ...state (값) 변경하는 논리
action : 행위에 따리 논리가 적용 (입급 , 출금, 계좌 생성 , 송금 )
dispatch : 요구 ...해주.... 
money : 잔액

행위
입금 , 출금
onclick 이벤트가 발생 > dispatch() 부르면 > reducer  호출
*/

function App() {

  const [number,setNumber] = useState(0);
  const [money , dispatch] = useReducer(reducer,0)

  return (
    <div className="App">
        <h3>KOSA 은행 </h3>
        <p>잔액:{money}</p>
        <input type="number" 
               value={number} 
               onChange={(e)=> setNumber(parseInt(e.target.value))}
               step="1000" />
        <hr />
        <button onClick={()=>{
             dispatch({type:"deposit", payload:number})
         }}>예금하기</button>
         <hr />
         <button onClick={()=>{
             dispatch({type:"withdraw", payload:number})
         }}>출금하기</button>    
    </div>
  );
}

export default App;
