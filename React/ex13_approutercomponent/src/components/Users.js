import React from 'react';
import {Link} from 'react-router-dom'

const Users = () => {

    //데이터
    const users = [
        { id: 1, name: '김' },
        { id: 2, name: '이' },
        { id: 3, name: '박' }
      ];


    return (
        <div>
             <h1>사용자 목록</h1>
             {/* 
                반복구문  map (조회) , filter(삭제)
             */}
             {
                users.map(user=> (
                      <li key={user.id}>
                          <Link to={`/user/${user.id}`}>{user.name}</Link>
                      </li>  
                ))
             }    
        </div>
    );
};

export default Users;