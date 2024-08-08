
export default function DescriptionArt({show, description}){
  
  return(
    <>
      {
        show ?  <p id='description' className="duration-300 text-center">{description}</p>  
        : <> </>
      }
      
    </>
  );
}
