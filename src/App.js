import './App.css';
const { jsPDF } = require("jspdf");
const doc = new jsPDF();

function App() {

  function handleFileUpload(){
    const upload = document.forms[0].querySelector("input[type=file]");
    const thumbnail = document.querySelector("#thumbnail")
    thumbnail.src = URL.createObjectURL(upload.files[0]);
  }

  function handleSubmit(e){
    const leftIndent = 20;
    const rightIndent = 90;
    const font = "helvetica";
    e.preventDefault();

    const logo = document.forms[0].querySelector("input[type=file]").files.length;
    const url = document.querySelector("#thumbnail").src;
    if(logo){
      doc.addImage(url, "JPEG", 20, 6, 40, 35);
    }
    doc.setFontSize(14);
    doc.setTextColor(0, 150, 170);
    doc.setFont(font, "bold");
    doc.text("Payment receipt", leftIndent, 50);
    doc.setFontSize(12);
    doc.text("Charge session details", leftIndent, 60);

    doc.setFontSize(8);
    doc.setTextColor(0, 0, 0);
    doc.text(`Charge point serial number`, leftIndent,70);
    doc.setFont(font, "normal"); doc.text(`${e.target[0].value}`, rightIndent, 70);
    doc.setFont(font, "bold"); doc.text(`Location`, leftIndent,80);
    doc.setFont(font, "normal");doc.text(`${e.target[1].value}`, rightIndent,80);
    doc.setFont(font, "bold"); doc.text(`Charge session ID`, leftIndent,90);
    doc.setFont(font, "normal"); doc.text(`${e.target[2].value}`, rightIndent,90);
    doc.setFont(font, "bold"); doc.text(`Session start`, leftIndent,100);
    doc.setFont(font, "normal"); doc.text(`${e.target[3].value}`, rightIndent,100);
    doc.setFont(font, "bold"); doc.text(`Session end`, leftIndent,110);
    doc.setFont(font, "normal"); doc.text(`${e.target[4].value}`, rightIndent,110);
    doc.setFont(font, "bold"); doc.text(`Charged volume (kW)`, leftIndent,120);
    doc.setFont(font, "normal"); doc.text(`${e.target[5].value}`, rightIndent,120);

    doc.setTextColor(0, 150, 170);
    doc.setFontSize(12);
    doc.setFont(font, "bold");
    doc.text("Payment details", leftIndent, 130);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(8);
    doc.setFont(font, "bold"); doc.text(`Amount (excl VAT)`, leftIndent,140);
    doc.setFont(font, "normal"); doc.text(`${e.target[6].value}`, rightIndent,140);
    doc.setFont(font, "bold"); doc.text(`VAT amount`, leftIndent,150);
    doc.setFont(font, "normal"); doc.text(`${e.target[7].value}`, rightIndent,150);
    doc.setFont(font, "bold"); doc.text(`Amount (incl. VAT)`, leftIndent,160);
    doc.setFont(font, "normal"); doc.text(`${e.target[8].value}`, rightIndent,160);
    doc.setFont(font, "bold"); doc.text(`VAT percentage`, leftIndent,170);
    doc.setFont(font, "normal"); doc.text(`${e.target[9].value}`, rightIndent,170);
    doc.setFont(font, "bold"); doc.text(`Price description`, leftIndent,180);
    doc.setFont(font, "normal"); doc.text(`${e.target[10].value}`, rightIndent,180);
    doc.setFont(font, "bold"); doc.text(`Date`, leftIndent,190);
    doc.setFont(font, "normal"); doc.text(`${e.target[11].value}`, rightIndent,190);
    doc.setFont(font, "bold"); doc.text(`Payment method`, leftIndent,200);
    doc.setFont(font, "normal"); doc.text(`${e.target[12].value}`, rightIndent,200);


    doc.setTextColor(0, 150, 170);
    doc.setFontSize(12);
    doc.setFont(font, "bold");
    doc.text("Merchant details", leftIndent, 210);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(8);

    doc.setFont(font, "bold"); doc.text("Merchant", leftIndent,220);
    doc.setFont(font, "normal"); doc.text("EV Charging Company Inc", rightIndent,220);
    doc.setFont(font, "bold"); doc.text("Address", leftIndent,230);
    doc.setFont(font, "normal"); doc.text("Vandelay Industries, 3th Floor, 2 Southampton", rightIndent,230);
    doc.setFont(font, "normal"); doc.text("Maximiliam Street, AJ7H 7DB, Wesminster London", rightIndent,234);
    doc.setFont(font, "bold"); doc.text("Contact", leftIndent,240);
    doc.setFont(font, "normal"); doc.text("idontexist@evcharging.com", rightIndent,240);
    doc.setFont(font, "bold"); doc.text("Chamber of Commerce", leftIndent,250);
    doc.setFont(font, "normal"); doc.text("10197338", rightIndent,250);
    doc.setFont(font, "bold"); doc.text("VAT number", leftIndent,260);
    doc.setFont(font, "normal"); doc.text("GB748569274", rightIndent,260);

    doc.setTextColor(0, 150, 170);
    doc.setFontSize(10);
    doc.setFont(font, "bold");
    doc.text("https://github.com/PedroValente00", leftIndent, 275);

    doc.save("receipt.pdf");
  }

  return (
    <div className="App">
        <h1>Receipt generator</h1>   
      <form onSubmit={handleSubmit}>
        <p className='title'>Charge session details</p>
        <p><label htmlFor="cPId">Charge point serial number </label>
        <input type="text" name="cPId" id="cPId" defaultValue="045X8_LL_25" /> 
        </p>
        <p><label htmlFor="location">Location </label>
        <input type="text" name="location" id="location" defaultValue="London"  /> 
        </p>
        <p><label htmlFor="sessionID">Charge session ID </label>
        <input type="text" name="sessionID" id="sessionID" defaultValue="017236" /> 
        </p>
        <p><label htmlFor="sessionStart">Session start </label>
        <input type="text" name="sessionStart" id="sessionStart" defaultValue="08 March 2024" /> 
        </p>
        <p><label htmlFor="sessionEnd">Session end </label>
        <input type="text" name="sessionEnd" id="sessionEnd" defaultValue="08 March 2024" /> 
        </p>
        <p><label htmlFor="kW">Charged volume (kW) </label>
        <input type="text" name="kW" id="kW" defaultValue="21.13" /> 
        </p>
        <p className='title'>Payment details</p>
        <p><label htmlFor="price">Price without VAT (GBP) </label>
        <input type="text" name="price" id="price" defaultValue="12.13"/> 
        </p>
        <p><label htmlFor="vat">VAT amount (GBP) </label>
        <input type="text" name="vat" id="vat" defaultValue="2.17" /> 
        </p>
        <p><label htmlFor="priceWithVat">Amount with VAT (GBP) </label>
        <input type="text" name="priceWithVat" id="priceWithVat" defaultValue="15.19" /> 
        </p>
        <p><label htmlFor="vatPercent">VAT % </label>
        <input type="text" name="vatPercent" id="vatPercent" defaultValue="20" /> 
        </p>
        <p><label htmlFor="description">Price description </label>
        <input type="text" name="description" id="description" defaultValue="GBP 0.60/kW incl. VAT" /> 
        </p>
        <p><label htmlFor="date">Payment date </label>
        <input type="text" name="date" id="date" defaultValue="08 November 2024" /> 
        </p>
        <p><label htmlFor="method">Payment method </label>
        <input type="text" name="method" id="method" defaultValue="Contactless" /> 
        </p>
        <p><label htmlFor="file">Upload logo to use (optional): </label>
          <input type="file" name="file" id="file" onChange={handleFileUpload} />
        </p>
        <p><img src="" alt="" id="thumbnail"/></p>
        <p>
        <button>Download receipt</button>
        </p>
      </form>
    </div>
  );
}

export default App;
