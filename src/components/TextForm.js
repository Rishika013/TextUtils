import React, {useState} from 'react';


export default function TextForm(props) {
      
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    
    const handleDownClick = ()=>{
      //console.log("Lowercase was clicked"+ text);
      let lowerText = text.toLowerCase();
      setText(lowerText)
      props.showAlert("Converted to Lowercase!", "success");
    }
   
    const handleClearClick = ()=>{
      //console.log("Text was Clear"+ text);
      let lowerText ='';
      setText(lowerText)
      props.showAlert("Text Cleared!", "success");
    } 
   
      const handleOnChange = (event)=>{
        // console.log("On change");
         setText(event.target.value);
      }

      const handleCopy = ()=>{
       //console.log("I am copy");
       var text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copy to Clipboard!", "success");
      }

      const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
      }


    const [text, setText] = useState('');
    return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#E4DCCF':'white',color:props.mode==='dark'?'#042743':'#042743'}}  id="myBox" rows="10"></textarea>
      </div>
      <button className=" btn btn-warning m-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-warning m-2" onClick={handleDownClick}>Convert to Lowercase</button>
      <button className="btn btn-warning m-2" onClick={handleClearClick}>Clear Text</button>
      <button className='btn btn-warning m-2' onClick={handleCopy}>Copy Text</button>
      <button className='btn btn-warning m-2' onClick={handleExtraSpaces}>Remove Extra Space</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
      <p> {0.008 *text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
    
  )
}
