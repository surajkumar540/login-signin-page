import React from 'react';
import Login from './components/Login';
import Signin from './components/Signup';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ForgetPass from './components/ForgetPass';

const App = () => {
  return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />}></Route>
         <Route path="/signup" element={<Signin />}></Route> 
         <Route path="/forgetpass" element={<ForgetPass />}></Route> 
         </Routes>
     </BrowserRouter>


  );
}

export default App;
