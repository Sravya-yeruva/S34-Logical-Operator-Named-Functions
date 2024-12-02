import React, { useRef } from 'react'

function MarkSheet() {
    let FirstNameInputRef=useRef();
    let LastNameInputRef=useRef();
    let TelMarksInputRef=useRef();
    let HinMarksInputRef=useRef();
    let EngMarksInputRef=useRef();
    let MatMarksInputRef=useRef();
    let SciMarksInputRef=useRef();
    let SocMarksInputRef=useRef();

    let TelMarksResult=useRef();
    let HinMarksResult=useRef();
    let EngMarksResult=useRef();
    let MatMarksResult=useRef();
    let SciMarksResult=useRef();
    let SocMarksResult=useRef();

    let CalculateResult=()=>{
      let FirstName=FirstNameInputRef.current.value;
                let LastName=LastNameInputRef.current.value;
                let TelMarks=Number(TelMarksInputRef.current.value);
                let HinMarks=Number(HinMarksInputRef.current.value);
                let EngMarks=Number(EngMarksInputRef.current.value);
                let MatMarks=Number(MatMarksInputRef.current.value);
                let SciMarks=Number(SciMarksInputRef.current.value);
                let SocMarks=Number(SocMarksInputRef.current.value);
                let TotalMarks= TelMarks+ HinMarks+ EngMarks+ MatMarks+ SciMarks+ SocMarks;

                ResultLabelRef.current.innerHTML=(`${FirstName} ${LastName}  got total Marks ${TotalMarks}`);
      console.log("calculate")
    };
    

    let ResultLabelRef=useRef();
  return (
    <div>
      <h1 className='headingH'>Logical Operator and Named Functions</h1>
      <hr></hr>
      <h1>1.Precedence Operator</h1>
      <button type="button" onClick={()=>{
        let a=(7/5)*8-10+11
        alert(a)
      }}>Precedence</button>
      <hr></hr>
      <form>
        <fieldset>
            <legend>Please Enter Your Details</legend>
        </fieldset>
        <div>
        <label>First Name:</label>
        <input type="text" ref={FirstNameInputRef}></input>
        <label></label>
        </div>
        <div>
        <label>Last Name:</label>
        <input type="text" ref={LastNameInputRef}></input>
        <label></label>
        </div>
        <div>
        <label>Telugu Marks:</label>
        <input type="Number" ref={TelMarksInputRef}
        onFocus={()=>{
          TelMarksInputRef.current.style.backgroundColor='lightblue'
        }}
        onChange={()=>{
          if(TelMarksInputRef.current.value >=0 && TelMarksInputRef.current.value <=100){
            if(TelMarksInputRef.current.value >=35){
              TelMarksResult.current.innerHTML="Pass 😊";
              TelMarksResult.current.style.backgroundColor="green";
              
            }
            else{
              TelMarksResult.current.innerHTML="Fail 😓";
              TelMarksResult.current.style.backgroundColor="red";
            }
          }
          else{
            TelMarksResult.current.innerHTML="Invalid 🙆‍♂️" ;
            TelMarksResult.current.style.backgroundColor="yellow";
          }
        }}
        onBlur={()=>{
          TelMarksInputRef.current.style.backgroundColor="Pink"
        }}
        ></input>
        <label ref={TelMarksResult}></label>
        </div>
        <div>
        <label>Hindi Marks:</label>
        <input type="Number" ref={HinMarksInputRef}
        onFocus={()=>{
          HinMarksInputRef.current.style.backgroundColor="lightblue"
        }}
        onChange={()=>{
          if(HinMarksInputRef.current.value >=0 && HinMarksInputRef.current.value <=100){
            if(HinMarksInputRef.current.value >=35){
              HinMarksResult.current.innerHTML="pass 😊";
              HinMarksResult.current.style.backgroundColor="green";
            }
            else{
              HinMarksResult.current.innerHTML="Fail 😓";
              HinMarksResult.current.style.backgroundColor="green";
            }
      
           
        
          }
          else{
            HinMarksResult.current.innerHTML="invalid 🙆‍♂️";
            HinMarksResult.current.style.backgroundColor="yellow";
          }
      

        }}
        onBlur={()=>{
          HinMarksInputRef.current.style.backgroundColor="pink";
        }}
        ></input>
        <label ref={HinMarksResult}></label>
        </div>
        <div>
        <label>English Marks:</label>
        <input type="Number" ref={EngMarksInputRef}
        onFocus={()=>{
          EngMarksInputRef.current.style.backgroundColor="lightblue";
        }}
        onChange={()=>{
          if(EngMarksInputRef.current.value >=0 && EngMarksInputRef.current.value <=100){
            if(EngMarksInputRef.current.value >=35){
               EngMarksResult.current.innerHTML="pass 😊"
               EngMarksResult.current.backgroundColor="green"
            } else{
              EngMarksResult.current.innerHTML="Fail 😓"
              EngMarksResult.current.style.backgroundColor="green"
            }
          } else{
            EngMarksResult.current.innerHTML="Invalid 🙆‍♂️"
            EngMarksResult.current.style.backgroundColor="yellow"
          }
        }}
        onBlur={()=>{
          EngMarksInputRef.current.style.backgroundColor="pink"
        }}
        ></input>
        <label ref={EngMarksResult}></label>
        </div>
        <div>
        <label>Maths Marks:</label>
        <input type="Number" ref={MatMarksInputRef}
        onFocus={()=>{
          MatMarksInputRef.current.style.backgroundColor='lightblue'
        }}
        onChange={()=>{
          if(MatMarksInputRef.current.value >=0 && MatMarksInputRef.current.value <=100){
            if(MatMarksInputRef.current.value >=35){
              MatMarksResult.current.innerHTML="Pass 😊";
              MatMarksResult.current.style.backgroundColor="green";
              
            }
            else{
              MatMarksResult.current.innerHTML="Fail 😓";
              MatMarksResult.current.style.backgroundColor="red";
            }
          }
          else{
            MatMarksResult.current.innerHTML="Invalid 🙆‍♂️" ;
            MatMarksResult.current.style.backgroundColor="yellow";
          }
        }}
        onBlur={()=>{
          MatMarksInputRef.current.style.backgroundColor="Pink"
        }}
        ></input>
        <label ref={MatMarksResult}></label>
        </div>
        <div>
        <label>Science Marks:</label>
        <input type="Number" ref={SciMarksInputRef}
        onFocus={()=>{
          SciMarksInputRef.current.style.backgroundColor='lightblue'
        }}
        onChange={()=>{
          if(SciMarksInputRef.current.value >=0 && SciMarksInputRef.current.value <=100){
            if(SciMarksInputRef.current.value >=35){
              SciMarksResult.current.innerHTML="Pass 😊";
              SciMarksResult.current.style.backgroundColor="green";
              
            }
            else{
              SciMarksResult.current.innerHTML="Fail 😓";
              SciMarksResult.current.style.backgroundColor="red";
            }
          }
          else{
            SciMarksResult.current.innerHTML="Invalid 🙆‍♂️" ;
            SciMarksResult.current.style.backgroundColor="yellow";
          }
        }}
        onBlur={()=>{
          SciMarksInputRef.current.style.backgroundColor="Pink"
        }}
        ></input>
        <label ref={SciMarksResult}></label>
        </div>
        <div>
        <label>Social Marks:</label>
        <input type="Number" ref={SocMarksInputRef}></input>
        <label ref={SocMarksResult}
        onFocus={()=>{
          SocMarksInputRef.current.style.backgroundColor='lightblue'
        }}
        onChange={()=>{
          if(SocMarksInputRef.current.value >=0 && SocMarksInputRef.current.value <=100){
            if(SocMarksInputRef.current.value >=35){
              SocMarksResult.current.innerHTML="Pass 😊";
              SocMarksResult.current.style.backgroundColor="green";
              
            }
            else{
              SciMarksResult.current.innerHTML="Fail 😓";
              SciMarksResult.current.style.backgroundColor="red";
            }
          }
          else{
            SocMarksResult.current.innerHTML="Invalid 🙆‍♂️" ;
            SocMarksResult.current.style.backgroundColor="yellow";
          }
        }}
        onBlur={()=>{
          SocMarksInputRef.current.style.backgroundColor="Pink"
        }} 
        ></label>
        </div>
        <div>
            <button type="button" onMouseMove={()=>{
                let FirstName=FirstNameInputRef.current.value;
                let LastName=LastNameInputRef.current.value;
                let TelMarks=Number(TelMarksInputRef.current.value);
                let HinMarks=Number(HinMarksInputRef.current.value);
                let EngMarks=Number(EngMarksInputRef.current.value);
                let MatMarks=Number(MatMarksInputRef.current.value);
                let SciMarks=Number(SciMarksInputRef.current.value);
                let SocMarks=Number(SocMarksInputRef.current.value);
                let TotalMarks= TelMarks+ HinMarks+ EngMarks+ MatMarks+ SciMarks+ SocMarks;

                ResultLabelRef.current.innerHTML=(`${FirstName} ${LastName}  got total Marks ${TotalMarks}`);

                alert(`Final Result ${TotalMarks}`);
                CalculateResult();
            }}>Result</button>
        </div>
        <div>
          <label style={{width:"400px"}} ref={ResultLabelRef}>TotalMarks Of a Student</label>
        </div>
      </form>
    </div>
  )
}

export default MarkSheet
