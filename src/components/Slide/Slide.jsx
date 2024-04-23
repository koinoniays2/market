import { useEffect, useRef, useState } from "react";

export default function Slide({ obj }) {

  const imageContainer = useRef(null);
  const [showImage, setShowImage] = useState("");

  useEffect(()=>{
    const observer = new IntersectionObserver((entry) => {
      const image = entry[0]
      if(image.isIntersecting){
        setTimeout(()=>{
          image.target.style.opacity = "1"
          image.target.style.right = "50%"
          setShowImage("translate-x-[50%] md:translate-x-[70%]")
          // image.target.style.transform = "translateX(70%)"
        },500)
      }
    })

    if(imageContainer.current) observer.observe(imageContainer.current);
    
  },[])

  return (
    <section className="relative">
      <h2 className="text-[36px] md:text-[64px]">{obj.title}</h2>
      <h3 className="text-[18px] md:text-[32px] pt-[10px] font-light">{obj.sub}</h3>
      <div className="text-[18px] md:text-[20px] pt-[20px]">
        {obj.contents.map((element, index) => (<p key={index}>{element}</p>))}
      </div>
      <div ref={imageContainer} className={`absolute pt-[100px] duration-1000 bottom-[50px] md:bottom-[100px] opacity-0 -right-1/3 ${showImage} ${obj.image === "/svg/QuicklyAndEasily.svg" ? "w-[250px] md:w-[500px] lg:w-[550px]" : "w-[300px] md:w-[500px] lg:w-[550px]"}`}>
      <img 
          src={obj.image} 
          alt="About Image"
          className="w-full" 
        />
      </div>
    </section>
  );
}
