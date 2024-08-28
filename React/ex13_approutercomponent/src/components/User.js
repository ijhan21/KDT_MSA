import React from 'react';
import {useParams} from 'react-router-dom'

const User = () => {

    //user/:id  
    //URL 에서 동적으로 파라메터 가져오기
    //MPA  :   localhost:8090/user/1     > spring   @pathvariable()
    
    const {userId} = useParams();

    const users={
        1:{id:1 , name:"김" ,email:"kim@naver.com"},
        2:{id:2 , name:"이" ,email:"lee@naver.com"},
        3:{id:3 , name:"박" ,email:"park@naver.com"}
    }

    const user = users[userId];
    //ex) user = users[1];


    return (
        <div> 
                <h3>user information</h3>
                {
                    user ? (   // user ? () : ()
                                <div>
                                    <h3>{user.name}</h3>
                                    <p>ID:{user.id}</p>
                                    <p>Email : {user.email}</p>
                                </div>
                            ) : 
                            ( 
                               <p>User not found</p>          
                            )
                }    
        </div>
    );
};

export default User;