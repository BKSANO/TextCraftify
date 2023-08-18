import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("uppercase was clicked");
    setText(text.toUpperCase());
    props.showAlert("Text Converted to UpperCase","success")
  };
  const handleLowClick = () => {
    console.log("uppercase was clicked");
    setText(text.toLowerCase());
    props.showAlert("Text Converted to LowerCase","success")
  };

  const handleOnChange = (event) => {
    console.log("on changed");
    let newText=event.target.value
    setText(newText);
  };

  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success")
  }
  const handleExtraSpaces = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces","success")
  }
  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared","success")
  }

  const handleVowelConsonant = () =>{
    let countVowel=0;
    for (let index = 0; index <= text.length; index++) {
      if (text.charAt(index).match(/[aeiouAEIOU]/)) {
        countVowel++;
      }
    }

    let countConst=0
    for (let index = 0; index <= text.length; index++) {
      if (
        text
          .charAt(index)
          .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
      ) {
        countConst++;
      }
    }
    props.showAlert(`Text has ${countVowel} Vowels and ${countConst} Consonants`,"primary")
  }


  const handleSentenceCase = () => {
    let lowerCase = text.toLowerCase();
    let regex = /([^.!?]+[!?.\d\s]+)/g;
    let sentences = lowerCase.match(regex);
    if(sentences!=null && sentences.length>=1){
      let newText = sentences
      .map((sentence) => {
        return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
          ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
          : sentence);
      })
      .join("");
    setText(newText);
    }

  };

  return (
    <div style={{color : props.mode==='dark'?'white':'black'}}>
      <div className="container">
        <h2 className="mb-4">{props.heading}</h2>
        <div>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor : props.mode==='dark'?'#333333':'white', color : props.mode==='dark'?'white':'black'}}
          />
         <div className="container my-3">
          <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSentenceCase}>Sentence Case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpeakClick}>Speak</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleVowelConsonant}>Count Vowel & Consonant</button>
         </div>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>Your content has {text.split(/[.?!]\s/).filter((element)=>{return element.length!==0}).length} sentence, {text.split(/\r\n|\r|\n/).filter((element)=>{return element.length!==0}).length} paragraph, {text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters,
        And it needs {text.split(" ").filter((element)=>{return element.length!==0}).length * .01} Minutes to reads.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </div>
  );
}
