import React from "react";
import './App.css';
import Form from './Components/Form';
import Main from './Components/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  return (

    <>
      {/* <Main /> */}
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/main" element={<Main />} />
      </Routes>
   
    </>
  );
}

export default App;
