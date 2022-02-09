import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Topnavbar from './components/Topnavbar';
import Login from './pages/Login';

const App = () => (
  <Router>
    <Topnavbar />

    <Routes>
      <Route exact path='/' element={<Main/>} />
      <Route exact path='/main' element={<Main/>} />
      <Route exact path='/login' element={<Login/>} />
    </Routes>
  </Router>
)

export default App;
