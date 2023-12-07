// import { useState } from 'react';
import './App.css';
import logo from "./shell.bmp";
const { jsPDF } = require("jspdf");
const doc = new jsPDF();

function App() {
  function handleSubmit(e){
    const leftIndent = 20;
    const rightIndent = 90;
    const font = "helvetica";
    e.preventDefault();

    doc.addImage(logo, "JPEG", 17, 10, 40, 40); // previously on the right side with doc.addImage(logo, "JPEG", 150, indent, 40, 40);
    doc.setFontSize(16);

    doc.setTextColor(0, 150, 170);
    doc.setFont(font, "bold");
    doc.text("Payment receipt", leftIndent, 60);
    doc.text("Charge session details", leftIndent, 70);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Charge point ID`, leftIndent,90);
    doc.setFont(font, "normal"); doc.text(`${e.target[0].value}`, rightIndent, 90);
    doc.setFont(font, "bold"); doc.text(`Location`, leftIndent,100);
    doc.setFont(font, "normal");doc.text(`${e.target[1].value}`, rightIndent,100);
    doc.setFont(font, "bold"); doc.text(`Charge session ID`, leftIndent,110);
    doc.setFont(font, "normal"); doc.text(`${e.target[2].value}`, rightIndent,110);
    doc.setFont(font, "bold"); doc.text(`Session start`, leftIndent,120);
    doc.setFont(font, "normal"); doc.text(`${e.target[3].value}`, rightIndent,120);
    doc.setFont(font, "bold"); doc.text(`Session stopped`, leftIndent,130);
    doc.setFont(font, "normal"); doc.text(`${e.target[4].value}`, rightIndent,130);
    doc.setFont(font, "bold"); doc.text(`Charged volume`, leftIndent,140);
    doc.setFont(font, "normal"); doc.text(`${e.target[5].value}`, rightIndent,140);

    doc.setTextColor(0, 150, 170);
    doc.setFontSize(16);
    doc.setFont(font, "bold");
    doc.text("Payment details", leftIndent, 160);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont(font, "bold"); doc.text(`Amount (excl VAT)`, leftIndent,170);
    doc.setFont(font, "normal"); doc.text(`${e.target[6].value}`, rightIndent,170);
// more stuff to add here

    doc.setTextColor(0, 150, 170);
    doc.setFontSize(16);
    doc.setFont(font, "bold");
    doc.text("Merchant details", leftIndent, 190);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);

    doc.setFont(font, "bold"); doc.text("Merchant", leftIndent,200);
    doc.setFont(font, "normal"); doc.text("The New Motion EVSE Ltd.", rightIndent,200);
    doc.setFont(font, "bold"); doc.text("Address", leftIndent,210);
    doc.setFont(font, "normal"); doc.text("Davidson Building, 4th Floor, 5 Southampton", rightIndent,208);
    doc.setFont(font, "normal"); doc.text("Street, WC2E 7HA, Wesminster London", rightIndent,214);
    doc.setFont(font, "bold"); doc.text("contact", leftIndent,220);
    doc.setFont(font, "normal"); doc.text("dcoperations.uk@newmotion.com", rightIndent,220);
    doc.setFont(font, "bold"); doc.text("Chamber of Commerce", leftIndent,230);
    doc.setFont(font, "normal"); doc.text("10296832", rightIndent,230);
    doc.setFont(font, "bold"); doc.text("VAT number", leftIndent,240);
    doc.setFont(font, "normal"); doc.text("GB248169676", rightIndent,240);

    doc.setTextColor(0, 150, 170);
    doc.setFontSize(16);
    doc.setFont(font, "bold");
    doc.text("Shell Recharge", leftIndent, 260);
    doc.text("uk.shellrecharge.com/charging-at-shell", leftIndent, 270);

    doc.save(`${e.target.name.value}.pdf`);
  }

  return (
    <div className="App">
        <p>Receipt generator</p>        
      <form onSubmit={handleSubmit}>
        <p><label htmlFor="cPId">Charge point ID </label>
        <input type="text" name="cPId" id="cPId"/> 
        </p>
        <p><label htmlFor="location">Location </label>
        <input type="text" name="location" id="location"  /> 
        </p>
        <p><label htmlFor="sessionID">Charge session ID </label>
        <input type="text" name="sessionID" id="sessionID" /> 
        </p>
        <p><label htmlFor="sessionStart">Session start </label>
        <input type="text" name="sessionStart" id="sessionStart" /> 
        </p>
        <p><label htmlFor="sessionEnd">Session stopped </label>
        <input type="text" name="sessionEnd" id="sessionEnd" /> 
        </p>
        <p><label htmlFor="kW">Charged volume </label>
        <input type="text" name="kW" id="kW" /> 
        </p>
        <p><label htmlFor="price">Price without VAT </label>
        <input type="text" name="price" id="price" /> 
        </p>
        <button>Get receipt</button>
      </form>
    </div>
  );
}

export default App;
