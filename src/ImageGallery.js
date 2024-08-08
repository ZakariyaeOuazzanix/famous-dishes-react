import Image from "./Image";
import ImageNumber from "./ImageNumber";
import ImageTitle from "./ImageTitle";
import NextButton from "./NextButton";
import ShowDetailsBtn from "./ShowDetailsBtn";
import { dishesList } from "./DishesData";
import { useState } from "react";
import BackButton from "./BackButton";

export default function ImageGallery(){

const [currentDish, setcurrentDish] = useState(0);

return(
    <>
      <div className="p-5 w-[90vw] rounded-lg bg-gray-50 mx-auto my-5 shadow-xl lg:w-[700px] md:w-[570px]">

        <div className="flex items-start justify-between">
          <BackButton currentDish={currentDish} setcurrentDish={setcurrentDish} totalDishes={dishesList.length}/>
          <NextButton currentDish={currentDish} setcurrentDish={setcurrentDish} totalDishes={dishesList.length}/>
        </div>

        <div className="flex flex-col items-center gap-y-3 mt-3">
          <ImageTitle name = {dishesList[currentDish].name} origin={dishesList[currentDish].origin}/>
          <ImageNumber imageNumber={currentDish +1} totalDishes={dishesList.length}/>
          <ShowDetailsBtn details={dishesList[currentDish].description}/>
          <Image srcImg={dishesList[currentDish].url} altImg={dishesList[currentDish].alt}/>
        </div>
        

      </div>
    </>
  );
}