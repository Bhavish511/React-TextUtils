import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("upper btn clicked");
        setText(text.toUpperCase());
    }
    const handleLoClick = () => {
        // console.log("Lower btn clicked");
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log("Handle on change clicked");
    }
    const handleCleClick = () => {
        setText('');
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    // Remove Extra Spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const [text, setText] = useState('');
    // text = "New text"; // Wrong way to change the state variable
    // setText("New text"); // Correct way to change the state variable

  return (
    <>
        <div className="container" style={{color: props.mode==='dark' ?'white':'#042743'}}>
            <h1>{props.heading}</h1>    
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode==='dark' ?'gray':'white', color: props.mode==='dark' ?'white':'#042743'}} value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-success mx-1" onClick={handleCleClick}>Clear Text</button>
            <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-success mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color: props.mode==='dark' ?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split("").length ? text.split(" ").length : 0} words and {text.length} characters</p>
            <p>{0.008 * (text.split("").length ? text.split(" ").length : 0)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Nothing to preview!"}</p>
            
        </div>
    </>
  )
}
