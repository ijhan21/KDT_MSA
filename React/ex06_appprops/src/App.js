import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting'
import List from './components/List'
import User from './components/User'
function App() {

  const userName ="king";
  const countdata = 100;

  const user = {
     name:"kim",
     age:30,
     email:'i7027@naver.com'
  }

  const todos = ["AAA" , "BBB" , "CCC"];
  return (
    <div className="App">
        <Greeting name={userName}  uname="world"  count={countdata} />
        <List items={todos} />
        <User user={user} />
    </div>
  );
}

export default App;
