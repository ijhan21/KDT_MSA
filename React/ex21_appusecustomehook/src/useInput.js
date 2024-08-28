import {useState} from  'react'

export function useInput(initValue , submitAction) {
    const [inputvalue,setInputValue] = useState(initValue);
  
    const handleChange = (e) =>{
      setInputValue(e.target.value);
    }
  
    const handleSubmit = () =>{
       setInputValue('');
       submitAction(inputvalue);
    }

    return [inputvalue ,handleChange ,handleSubmit];
}
