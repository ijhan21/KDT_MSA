import React , {useState} from 'react';
import Child from './Child';


const Parent = () => {

    const [count,setCount] = useState(0);
    const [name,setName] = useState("홍길동");

    return (
        <div>
            <h3>Parent</h3>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count+1)}> Count 증가하기</button>
            <button onClick={() => setName("김유신")}> Props 값 변경 전달</button>
            <hr />
            {/* memo 사용해서 props 변경될때만 하위 컴포넌트가 재랜더링 ..  */}
            <Child name={name} />
        </div>
    );
};

export default Parent;