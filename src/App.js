import Form from './componentes/Form/Form';
import Header from './componentes/Header/Header';
import Login from './componentes/Login/Login'
import React, { Fragment } from 'react';
import {                                            //redireccionamiento
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Form></Form>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
