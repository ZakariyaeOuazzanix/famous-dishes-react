
export default function Image({srcImg, altImg}){

  return (
    <div className="w-fit h-fit">
    <img src={srcImg} alt={altImg} className="max-h-[60vh]"/>

    </div>
  );
}