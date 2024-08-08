

export default function NextButton({currentDish, setcurrentDish, totalDishes}){

  function goToNext(){
    if(currentDish !== totalDishes -1){
      let NewIdx = currentDish +1;
      setcurrentDish(NewIdx);
    }
    else{
      setcurrentDish(0);
    }

  }
  return(
    <>
      <button onClick={goToNext} className="bg-gray-300 px-3 py-2 rounded-md hover:bg-gray-400 duration-200 active:scale-95">Next</button>
    </>
  );
}