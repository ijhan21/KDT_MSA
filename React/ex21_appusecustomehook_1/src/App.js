import './App.css';
import {useFetch} from './useFetch';



const baseUrl = "https://jsonplaceholder.typicode.com/";

function App() {

  const {data,fetchUrl} = useFetch(baseUrl,'users');

  return (
    <div className="App">
        <h3>Fetch Call</h3>
        <button onClick={()=> fetchUrl('users')}>users</button>
        <button onClick={()=> fetchUrl('posts')}>posts</button>
        <button onClick={()=> fetchUrl('todos')}>todos</button>
        <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}

export default App;
