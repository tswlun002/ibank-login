import './App.css';
import {Routes, Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <Routes>
       <Route path='/' element={<MainLayout/>}>
        <Route index element={<Login/>}/>
        <Route path='portifolio'  element={<Portfolio/>}/>
       </Route>
    </Routes>
  );
}
export default App;
