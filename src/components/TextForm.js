import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAle("Converted to uppercase!","success");
    }
    const handlelowClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAle("Converted to lowercase!","success");
    }
    const handleclearClick=()=>{
        let newtext='';
        setText(newtext);
        props.showAle("Text is cleared!!","success");
    }
    

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('enter the text here');

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAle("Text has been copied!","success");
    }
    const handleSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAle("Extra spaces are removed!","success");
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark' ? 'white':'black'}}>
     
      <h1>Enter your text below....</h1>
      <div className="mb">
  <textarea className="form-control my-3 " value={text} style={{backgroundColor:props.mode==='dark' ? 'black':'white',color:props.mode==='light' ? 'black':'white'


  }} onChange={handleOnChange} id="myBox" rows="8"></textarea> 
</div>

<button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to upper case</button>
<button className="btn btn-primary mx-3" onClick={handlelowClick}>convert to lower case</button>
<button className="btn btn-primary mx-3" onClick={handleclearClick}>clear the text</button>
<button className="btn btn-primary mx-3" onClick={handleCopy}>copy the text</button>
<button className="btn btn-primary mx-3" onClick={handleSpaces}>remove extra spaces</button>

  </div>
    <div className="container "style={{color:props.mode==='dark' ? 'white':'black'}}>
        <h1>your text summary</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident consequuntur expedita hic itaque dolorem ad, explicabo, officiis, voluptatibus veritatis vel harum deserunt velit blanditiis optio omnis ut suscipit temporibus ipsa.</p>
    <p>
        your text contains {text.split(" ").length} words and {text.length} characters
    </p>
    <p>{0.008* (text.split(" ").length)} is the time taken to read the text</p>
    <h2>Preview</h2>
    <p>{text} is your text</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit corrupti provident nihil aliquid dolorum a excepturi. Ex tenetur deserunt accusantium nisi quia suscipit dolor maiores, necessitatibus neque possimus deleniti nemo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et distinctio incidunt molestiae quasi placeat fuga qui officiis provident id pariatur ad nihil enim, ipsa earum temporibus natus commodi. Velit, vitae.</p>
    
    </div>
    </>
  )
}
