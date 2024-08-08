export default function Image({url, altImg}){

  return (

    <>
      <img src={url} alt={altImg} className="max-h-[60vh]"/>
    </>
  );
}