
export default function BeforeImgBtn({setCurrentImg, currentImg, ImagesCount}){

  function goBack(){
    if(currentImg ===0){
      setCurrentImg(ImagesCount -1);
    }
    else {
      setCurrentImg(currentImg -1);
    }
  }

  return (
    <>
      <div className="absolute top-[45%] left-1 w-6 h-6 rounded-full bg-gray-200 z-10 flex justify-center items-center text-sm hover:bg-gray-300 active:scale-95 duration-200 cursor-pointer" onClick={goBack}>
        <strong className="mb-1">&lt;</strong> 
      </div>

    </>
  );
}