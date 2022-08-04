import React from "react"
import logo from './logo.svg';
import './App.css';
// import 
import "bootstrap/dist/css/bootstrap.min.css"
// import single Button
// import Button from "react-bootstrap/Button"



import {Button, Alert} from 'react-bootstrap'



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Alert variant="secondary">This is a button!</Alert>
          <Button>
            Test Button
          </Button>
      </header>
    </div>
  );
}

export default App;
