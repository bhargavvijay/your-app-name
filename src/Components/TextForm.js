import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    console.log('props.mode in TextForm:', props.mode);

    const [text,setText]=useState('');
    const handleUpClick=()=>{
        console.log("UpperCase invoked");
        let new_text=text.toUpperCase();
        setText(new_text);
        props.showAlert('Converted to Uppercase','success');
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleLowClick=()=>{
        let new_text=text.toLowerCase();
        setText(new_text);
        props.showAlert('Converted to Lowercase','success');

    }
    const handleClearClick=()=>{
        setText("");
        props.showAlert('Text Cleared','success');


    }
    const wordCount=()=>{
        let newText=text;
        if(text.length==0)
        {
            return 0
        }
        else{
            newText=newText.trim();
            let count=0;
            for(let i=0;i<newText.length;i++)
            {
                if(newText[i]===' ')
                {
                    count++
                }
            }
            return ++count;

            }
            
            
        }
    
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#07060e'}}>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#07060e' : 'white' ,color:props.mode==='dark'?'white':'#07060e'}}
 onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" style={{margin:'0px 10px 0px 0px'}} onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary" style={{margin:'0px 10px 0px 0px'}}onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#07060e'}}><br/>
        <h4>Your Text Summary</h4>
        <p style={{display:"inline-block", margin: '0 10px 0px 0px' }}><b>Words</b>={wordCount()}</p>
        <p style={{display:"inline-block", margin:'0 10px 0px 0px'}}><b>Letters</b>={text.length}</p>
        <p style={{display:"inline-block"}}><b>Time it will take to read</b>={1.0/125*(wordCount())} min</p>
        <h5>Preview</h5>
        <p>{text.length==0?'Enter something in textbox to preview it here':text}</p>
    </div>
    </>
  )
}
TextForm.defaultProps={ 
    heading:"Enter Text"
}
