import { useEffect, useState } from "react";

export default function Header({ slideIndex, setSlideIndex }) {
 
  const [isSlideFirst, setIsSlideFirst] = useState(true);

  const style = {
    height : isSlideFirst ? "h-0" : "h-[60px] md:h-[80px]",
    titleContainer: isSlideFirst ? "translate-y-[20%] " : "top-[10%]",
    title: isSlideFirst ? "text-[52px] md:text-[92px] lg:text-[120px]" : "text-[36px] md:text-[52px] text-[#FFD700]",
  }

  useEffect(()=>{
    if(slideIndex > 0) setIsSlideFirst(false);
    else setIsSlideFirst(true)
  }, [slideIndex])

  const handleClick = () => {
    setSlideIndex(0)
  }

  return (
    <div className={`w-full bg-black flex justify-center fixed z-50 duration-1000 ${style.height}`}>
      <header className={`w-full h-full max-w-5xl px-[20px] md:px-[50px]`}>
        <div className="w-full h-full flex justify-between">
          <div className="w-full relative ">
            <div className={`absolute left-0 ${style.titleContainer} duration-1000`}>
              <h1 className={`${style.title} duration-1000`}>Street Market</h1>
            </div>
            <div className=" h-full overflow-hidden">
              <div className={`absolute right-0 bottom-0 overflow-hidden duration-1000`}>
                <button onClick={handleClick} className="bg-[#FFD700] px-4 pt-2 pb-2 text-[14px] md:text-[20px] rounded-t-xl">서비스 알람신청</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}