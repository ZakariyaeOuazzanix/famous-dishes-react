

export default function AfterImgBtn({setCurrentImg, currentImg, ImagesCount}){

  function nextImg(){
    if(currentImg === ImagesCount -1){
      setCurrentImg(0);
    }
    else{
      setCurrentImg(currentImg +1);
    }
  }

  return (
    <>
      <div className="absolute top-[45%] right-1 w-6 h-6 rounded-full bg-gray-200 z-10 flex justify-center items-center text-sm hover:bg-gray-300 active:scale-95 duration-200 cursor-pointer" onClick={nextImg}>
        <strong className="mb-1">&gt;</strong>
      </div>


    </>
  );
}