import { useEffect, useRef } from "react";

export default function Slide({ obj }) {

  const imageContainer = useRef(null);

  useEffect(()=>{
    const observer = new IntersectionObserver((entry) => {
      const image = entry[0]
      if(image.isIntersecting){
        setTimeout(()=>{
          image.target.style.opacity = "1"
          image.target.style.right = "50%"
          image.target.style.transform = "translateX(50%)"
        },500)
      }
    })

    if(imageContainer.current) observer.observe(imageContainer.current);
    
  },[])

  return (
    <section className="relative">
      <h2 className="text-[36px]">{obj.title}</h2>
      <h3 className="text-[18px] pt-[10px]">{obj.sub}</h3>
      <div className="text-[16px] pt-[20px]">
        <p>{obj.contents}</p>
      </div>
      <div ref={imageContainer} className={`absolute pt-[100px] duration-1000 bottom-[100px] opacity-0 -right-1/3 ${obj.image === "/svg/QuicklyAndEasily.svg" ? "w-[250px]" : "w-[300px]"}`}>
      <img 
          src={obj.image} 
          alt="About Image"
          className="w-full" 
        />
      </div>
    </section>
  );
}
