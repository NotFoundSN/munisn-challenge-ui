import Form from './componentes/Form/Form';
import Header from './componentes/Header/Header';
import Login from './componentes/Login/Login';
import View from './componentes/View/View';
import React from 'react';
import {                                            //redireccionamiento
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Form></Form>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/view" element={<View></View>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
