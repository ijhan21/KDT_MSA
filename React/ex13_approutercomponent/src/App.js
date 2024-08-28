import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/user/:userId' element={<User/>} />
            {/*  localhost:3000/user/1 ,    localhost:3000/user/2  동적 라우팅  */}
          </Routes>
      </BrowserRouter>
  );
}

export default App;
