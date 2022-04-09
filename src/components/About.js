import React, { useState } from 'react'

export default function About() {

const [mystyle, setmystyle] = useState(

{
    color:'black',
    backgroundColor:'white'
})

const [btntext,setbtntext] = useState("Enable Dark Mode")



const toggleStyle=()=>{
    if(mystyle.color==='black'){
        setmystyle({


            color:'white',
            backgroundColor:'black',
            border: '1px solid white'
        } )
        setbtntext("Enable Light Mode")
    }

else{ setmystyle({


    color:'black',
    backgroundColor:'white'
} )

setbtntext("Enable Dark Mode")

}

}


  return (
    <div className="container" style={mystyle}>
        <h2 className="my-3">About Us</h2>

<div className="accordion" id="accordionExample">
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About This Website
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle} >
        <strong>This is a Text Utilities Web Page Designed Solely For The Purpose Of Learning React.</strong> It is an accordionExample imported from Bootstrap.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About The Functionality Of The Website.
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This Website Provide Text Utilities Like : </strong> 
        <li>UpperCase Conversion</li>
        <li>LowerCase Conversion</li>
        <li>Removing Extra Spacing</li>
        <li>Clearing All The Text</li>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        About The Source Of Learning.
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>The Source Of Learning This Website Is a Youtube Channel : Code With Harry</strong> 
        I have learned Whole Web Development Coarse From This YouTube Channel Including : Html, Css, JavaScript And React.

      </div>
    </div>
  </div>
</div>
<div className="container">
<button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btntext}</button>
    </div>
    </div>
  )
}
