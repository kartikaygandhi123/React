import React, {useState} from 'react'



export default function TextForm(props) {

const handleUpCase=()=>{
    // console.log("Clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
}
const handleLowCase=()=>{
    // console.log("Clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
}
const handleOnChange=(event)=>{
     // console.log("On Change");
    setText(event.target.value);
}
const handleTextClear=(event)=>{
     // console.log("On Change");
    setText("");
}

const handleExtraSpaces=()=>{

let newText= text.split(/[ ]+/);
setText(newText.join(" "))

}



    const[text,setText]=useState('Enter Text Here');
    return (
    
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>


<div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpCase}>Convert to uppercase</button>

<button className="btn btn-primary mx-1 my-1" onClick={handleLowCase}>Convert to Lower case</button>

<button className="btn btn-primary mx-1 my-1" onClick={handleTextClear}>Clear The Text</button>

<button className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>
   
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>

<h2>Your Text Summary</h2>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
<p>{0.008*text.split(" ").length} Minutes Read</p>
    
<h3>Preview Text</h3>
<p>{text.length>0?text:"enter something to be previewed"}</p>
</div>
    </>


  )
}
