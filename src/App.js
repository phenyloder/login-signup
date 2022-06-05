import './App.css';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [user, setLoginUser] = useState({})

  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={(user && user._id) ? <Homepage setLoginUser={setLoginUser} user={user} /> : <Login setLoginUser={setLoginUser}/>} />
        <Route path='/login' element={<Login setLoginUser={setLoginUser}/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
