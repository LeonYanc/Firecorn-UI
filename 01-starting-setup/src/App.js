import "./App.css";
import React, {useState} from "react";
import Umls from "./Umls";

import Userinput from "./Userinput";
const DUMMY_umls = [
    {
      id: "1",
      olduml:"jeep"
     
    },];
function App (){
   
    const [umllist, setUmllist] = useState(DUMMY_umls);
    const onAddumlDataHandle=(umllist)=>{
        setUmllist((prevUmllist)=>{
            return[umllist,...prevUmllist];
        });
    };
    function deleteTodo(id){
       
             const Umllist = umllist.filter(item => item.id !== id);
             setUmllist(Umllist);
     
    }


    return(
       
        <div >
           <Userinput onAddumlData={onAddumlDataHandle}/>
           <Umls items={umllist} onDelete={deleteTodo}/>


        </div>
               
               
                
                
    );
};
export default App;