const UmlItem = (props) => {
  function deletehandler(event){
    
    props.onDelete(props.id);
    

}

    return (
      <li>
        
          <div >
            olduml  :{props.olduml}
          </div>
          <div >
            newuml  :{props.newuml}
            </div>
            
                        <button  onClick={deletehandler}>delete</button>
                   
            
       
      </li>
    );
  };
  export default UmlItem;