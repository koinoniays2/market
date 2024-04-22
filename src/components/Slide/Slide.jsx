import { useEffect, useRef } from "react";

export default function Slide({ obj }) {
  const objRef = useRef(null);

  useEffect(
    () => {
      const observer = new IntersectionObserver((entry) => {
        if (entry[0].isIntersecting) {
          console.log("gd");
        }
      });
      observer.observe(objRef.current);
    },
    {
      threshold: 0.5,
    }
  );

  return (
    <div className="h-lvh flex flex-col justify-around px-[20px] bg-[#FB9E01]">
      {/* 컨테이너 */}
      <div className="flex flex-col pt-10 text-black">
        {/* 타이틀 */}
        <div className="w-full text-4xl mb-5 font-semibold">{obj.title}</div>
        {/* 서브타이틀 */}
        <div className="mb-2.5 text-[18px] font-medium">{obj.sub}</div>
        {/* 콘텐츠 */}
        <div className="text-[14px] mb-[38px]">{obj.contents}</div>
      </div>
      {/* 이미지 */}
      <div ref={objRef} className="w-full flex justify-center">
        <img src={obj.image} alt="" />
      </div>
    </div>
  );
}
