import React from "react"
import logo from './logo.svg';
import './App.css';
import "./test.css"
// import 
import "bootstrap/dist/css/bootstrap.min.css"
// import single Button
// import Button from "react-bootstrap/Button"



import {Button, Alert, Card} from 'react-bootstrap'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media.istockphoto.com/photos/african-american-hippy-with-afro-gesturing-peace-picture-id173595072?s=612x612"/>
      <Alert variant="secondary">This is a button!</Alert>
          <Button>
            Test Button
          </Button>
      </header>
      {/* <Card>
        <Card.Img variant="top" src={"https://source.unsplash.com/UC0HZdUitWY"}/>
        <Card.Body>
          <Card.Title>Something...</Card.Title>
          <Card.Text>
            The quick brown fox jumped over the moon.
          </Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default App;
