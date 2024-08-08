import { useState } from "react";
import DescriptionArt from "./DescriptionArt";

export default function ShowDetailsBtn({details}){

const [showDetails, setShowDetails] = useState(false);

function toggleDetails(){
  setShowDetails(!showDetails);
}

  return(
    <>
      <button className="bg-blue-300 px-3 py-2 mr-3 rounded-md hover:bg-blue-400 duration-200 active:scale-95" onClick={toggleDetails}>
        {
          showDetails ? <>Hide details</>  : <>Show details</>
        
        } 
      </button>
      <DescriptionArt show={showDetails} description={details}/>
    </>
  );
}