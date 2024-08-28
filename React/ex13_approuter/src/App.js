import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route, Routes , Link} from "react-router-dom"

//컴포넌트 (페이지)
function Home(){
  return(
    <div>
        <h3>Home Page</h3>
        <p>Welcome to HomePage</p>
    </div>
  )
}
//컴포넌트 (페이지)
function About(){
  return(
    <div>
        <h3>About Page</h3>
        <p>Welcome to AboutPage</p>
    </div>
  )
}

//컴포넌트 (페이지)
function Contact(){
  return(
    <div>
        <h3>Contact Page</h3>
        <p>Welcome to ContactPage</p>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* JSX {} 안에 주석 : 라우팅 설정하기 */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
