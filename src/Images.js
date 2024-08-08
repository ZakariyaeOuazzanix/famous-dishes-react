
import { useEffect, useState } from "react";
import Image from "./Image";
import BeforeImgBtn from "./BeforeImgBtn";
import AfterImgBtn from "./AfterImgBtn";

export default function Images({urls, altImg, currentDish}){

const [currentImg, setCurrentImg] = useState(0);

useEffect(() => {
  setCurrentImg(0); // Reset child state when current dish changes
}, [currentDish]);

const ImagesCount = urls.length;

  return (
    <div className="w-fit h-fit relative">
      <div className="flex justify-center items-center w-full">
        <div className="absolute top-1 w-8 h-8 rounded-full bg-gray-200 z-10 flex justify-center items-center text-sm">{currentImg +1}/{urls.length}</div>
      </div>

      <BeforeImgBtn setCurrentImg={setCurrentImg} currentImg={currentImg} ImagesCount={ImagesCount}/>

      <AfterImgBtn setCurrentImg={setCurrentImg} currentImg={currentImg} ImagesCount={ImagesCount}/>
      <Image url={urls[currentImg]} altImg={altImg}/>

    </div>
  );
}