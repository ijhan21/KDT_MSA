import React ,{memo} from 'react';

const Child = ({name}) => {
    console.log("🆚Child Component 가 랜더링 되었습니다")
    return (
        <div>
            Child 컴포넌트 {name}
        </div>
    );
};
//export default Child;
export default React.memo(Child);