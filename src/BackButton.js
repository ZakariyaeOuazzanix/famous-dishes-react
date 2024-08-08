
export default function BackButton({currentDish, setcurrentDish, totalDishes}){

  function goBack(){
    if(currentDish !== 0){
      let NewIdx = currentDish -1;
      setcurrentDish(NewIdx);
    }
    else{
      setcurrentDish(totalDishes -1);
    }

  }

  return (
    <>
      <button onClick={goBack} className="bg-gray-300 px-3 py-2 mr-3 rounded-md hover:bg-gray-400 duration-200 active:scale-95">Back</button>
    </>
  );
}