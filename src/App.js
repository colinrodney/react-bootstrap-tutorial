import React from "react"
import './App.css';
// import 
import "bootstrap/dist/css/bootstrap.min.css"
// import single Button
// import Button from "react-bootstrap/Button"



import {Button, Form} from 'react-bootstrap'



function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      {/* FORM */}
      <Form style={{backgroundColor: "#eee"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

      
    </div>
  );
}

export default App;
