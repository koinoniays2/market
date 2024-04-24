'use client'

import { useEffect, useRef, useState } from "react"
import throttel from "@/utils/throttel";


export default function SlideContainer( {children, slideIndex, setSlideIndex} ) {

  const [slideLength, setSlideLength] = useState(0);
  const [touchStartClientY, setTouchStartClientY] = useState(null);
  const delay = 1000;
  const container = useRef(null);
  const inThrottle = useRef(false);
  
  useEffect(()=>{
    if(container.current) {
      setSlideLength(container.current.children.length-1);
    }
  },[container])

  const onScrollChange = (event) => {
    if(event.deltaY < 0 && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else if(event.deltaY > 0 && slideIndex < slideLength) {
      setSlideIndex(slideIndex + 1);
    }
  }
  const handleWheel = throttel(onScrollChange, delay, inThrottle);
  
  const handleTouchStart = (event) => {
    setTouchStartClientY(event.touches[0].clientY)
  }

  const onTouchChange = (event) => {
    const touchMoveClientY = event.touches[0].clientY;

    if(touchStartClientY-5 > touchMoveClientY && slideIndex < slideLength) {
      setSlideIndex(slideIndex + 1);
    } else if (touchStartClientY+5 < touchMoveClientY && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  }
  const handleTouchMove = throttel(onTouchChange, delay, inThrottle)

  return (
    <div 
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={(handleTouchMove)}
      className={`w-full duration-1000 flex justify-center `}
      style={{transform : `translateY(-${slideIndex * 100}vh)`}}
    >
      <div 
        ref={container} 
        className="w-full max-w-5xl lg:px-[50px]"
      >
        {children}
      </div>
    </div>
  )
}
