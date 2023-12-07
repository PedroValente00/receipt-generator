import { useState } from 'react';
import './App.css';
import logo from "./shell.bmp"
const { jsPDF } = require("jspdf")
const doc = new jsPDF();

function App() {
  const [bla, setBla] = useState("");

  // const handleChange = (e) =>{
  //   setBla(e.target.value)
  // }

  function handleSubmit(e){
    e.preventDefault();
    // console.log("the name is "+e.target.name.value)
    doc.text(`Name: ${e.target[0].value}`,10,30);
    doc.text(`Price: ${e.target[1].value}`,10,40);
    doc.text(`Date: ${e.target[2].value}`,10,50);
    doc.addImage(logo, "JPEG", 150, 10, 40, 40);
    doc.save(`${e.target.name.value}.pdf`);
  }

  return (
    <div className="App">
        <p>Receipt generator</p>        
      <form onSubmit={handleSubmit}>
        <p><label htmlFor="name">Name of the customer: </label>
        <input type="text" name="name" id="name"/> 
        </p>
        <p><label htmlFor="price">Amount paid in GBP: </label>
        <input type="text" name="price" id="price"  /> 
        </p>
        <p><label htmlFor="date">Date: </label>
        <input type="text" name="date" id="date" /> 
        </p>
        <button>Get receipt</button>
</form>
    </div>
  );
}

export default App;
