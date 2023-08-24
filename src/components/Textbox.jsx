import React, { useState } from 'react'
import './Textbox.css';

const Textbox = () => {

  const [text, setText] = useState('Sample Text');

  const handleTextChange = (event)=> {
    setText(event.target.value);
  };

  const toUpperCase = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLowerCase = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const toClearText = ()=> {
    setText('');
  };

  return (
    <div className='container'>
      <h2>Input your text here</h2>
      <textarea name="text" id="myTextBox" cols="115" value={text} onChange={handleTextChange} rows="10" placeholder='Enter text'></textarea>

      <button onClick={toUpperCase}>Upper Case</button>
      <button onClick={toLowerCase}>Lower Case</button>
      <button onClick={toClearText}>Clear Text</button>

      <h3>Text Analysis Report</h3>
      <p>Your text contains <b> {text.split(' ').length} words</b> and <b>{text.length} letters</b>.</p>
      <br/><p>{Math.floor(text.split(' ').length / 200)} minutes read</p>
      <h3>Preview Text</h3>
      <p><i>{text.length>0?text:'Preview your text here'}</i></p>
    </div>
  )
}

export default Textbox