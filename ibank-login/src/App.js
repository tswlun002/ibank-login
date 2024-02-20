import './App.css';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
       <Route path='/'>
        <Route index element={<h1>Hello Capitec Login</h1>}/>
       </Route>
    </Routes>
  );
}
export default App;
