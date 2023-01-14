
import "./App.css";
import UmlItem from "./UmlItem";
function Umls(props) {
    function onremove(){
        props.onDelete(this.id);
    }
   

    return (
        
            <div>
                
                
                <div className="InputUml">
                    {props.items.map(umllist=> <UmlItem id={umllist.id} olduml={umllist.olduml} onDelete={onremove}/>)}
                    
                    
                    
                    
                </div>
            </div>
        
    )
        ;
}

export default Umls;
