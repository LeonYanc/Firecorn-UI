import "./App.css";
import React, {useState} from "react";

    
function Userinput (props){
    
    const [Uml, setUml] = useState()
    
    function Inputhandle(event) {
        console.log(event.target.value)
        setUml(event.target.value)
    }
    function submithandler(event){
        event.preventDefault();
        const umlData={
            id:Math.random().toString(),
            olduml: Uml,
            newuml:""
        }
        console.log(umlData)
        props.onAddumlData(umlData);
        setUml(" ")

    }
    return(
        <form onSubmit={submithandler}>
        <div className="InputUml">
                <h2>"welcome"</h2>
                    <label>InputUml </label>
                    <input type='text' value={Uml} onChange={Inputhandle}/>
                    <div className="submit-button">
                        <button submit>submit</button>
                    </div>
                    

                </div>
                
                </form>
                
                
    );
};
export default Userinput;