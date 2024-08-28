import './App.css';
import {useState , useMemo} from 'react';
//복잡한 계산
const hardCalculate = (number) =>{
  console.log("복잡한 논리를 가지는 계산")
  for(let i = 0 ; i < 999999999; i++){} //복잡한 논리 계산
  return number + 10000;
}

const easyCauculate = (number) =>{
  console.log("쉬운 계산");
  return number + 1;
}



function App() {
  const [hardNumber,setHardNumber] = useState(1);
  //state 값이 변경되면 App 함수는 다시 랜더링된다 ... 호출된다 ..
  const [easyNumber,setEasyNumber] =useState(1);

  //특정함수에 .... hardNumber  변화에 의해서 호출 ...setHardNumber + 1
  //const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(()=>{
      return hardCalculate(hardNumber)
  },[hardNumber])
  
  
  
  const easySum = easyCauculate(easyNumber);

  return (
    <div className="App">
        <h3>복잡한 계산기 논리 수행</h3>
        <input type="number"
         value={hardNumber}
         onChange={(e)=>setHardNumber(parseInt(e.target.value))}
        />
        <span>+ 10000 = {hardSum}</span>

        <h3>쉬운 계산기 논리 수행</h3>
        <input type="number"
         value={easyNumber}
         onChange={(e)=>setEasyNumber(parseInt(e.target.value))}
        />
        <span>+ 1 = {easySum}</span>
    </div>
  );
}
/*
   코드의 문제점
   두개 논리
   1. 복잡한 논리 함수  
   2. 단순한 논리 함수

   useState 값이 변경되면 ... App() 컴포넌트 재호출 .. 재런더링 ...
   함수의 값은 일반변수 초기화 ... useState 값 유지 ...

   2개 함수가 
   easy  쉬운 함수만 처리하기 싶어요 
   hardSum 호출
   easySum 호출

   결국  easySum +1 논리만 ... 

   제시) 함수의 초기화 두개의 함수 호출  (비율적)


   해결)
        useMemo는 메모이제이션(Memoization)을 통해 특정 값이 변경될 때만 재계산을 수행하도록 
        하여 불필요한 연산을 줄여줍니다
        값(useState)이 변하지 않으면 이전에 계산된 값을 재사용하는 것입니다. 
        이 방법은 특히 계산 비용이 큰 연산을 할 때 유용합니다.
        
        결국 ...useState  변경시에만 특정 계산을 수행
*/
export default App;
