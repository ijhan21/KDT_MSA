import './App.css';
import {useInput} from './useInput'

function displayData(message){
  alert(message);
}

function App() {

   const [inputvalue ,handleChange ,handleSubmit] = useInput('hello',displayData);   

  return (
    <div className="App">
         <h3>useInput</h3>
         <input type={inputvalue}
                onChange={handleChange}
         />
   
         <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;
