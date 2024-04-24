import { useEffect, useRef } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

export default function MsgSection() {

  const myMsg = useRef(null);

  useEffect(()=>{
    AOS.init();
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        const messages = entries[0].target.children;
        Array.from(messages).forEach((element, index) => {
          setTimeout(()=>{
            element.setAttribute('data-aos', '')
          }, 500 * index)
        });
      }
    }, {threshold: 1})

    if(myMsg.current) observer.observe(myMsg.current);

  },[])


  return (
    <section className="relative">
      <h2 className="text-[36px] md:text-[64px]">Customer Service</h2>
      <h3 className="text-[18px] md:text-[32px] pt-[10px] font-light">스트릿마켓의 전담 CS팀 서비스</h3>
      <div className="text-[18px] md:text-[20px] pt-[20px]">
        <p>스트릿마켓에는 자체 CS팀이 준비되어있습니다.</p>
        <p>마켓기간 운영 중,  발생된 문제는 스트릿마켓 CS팀에게 맡겨주세요!</p>
      </div>
      <div className="w-full flex flex-row-reverse justify-center lg:justify-start">
        <div className="w-full relative max-w-[668px] text-[14px] md:text-[18px] mt-5 md:mt-[80px]">
          <img 
            className="hidden md:block absolute w-[300px] left-1/2 -translate-x-1/2"  
            src="/svg/Phone.svg" 
            alt="phone background" />
          <div ref={myMsg} className="md:pt-10 space-y-1">
            <div data-aos="zoom-in-right" className="w-full">
              <div className="relative bg-white ml-[20px] p-3 md:p-5 w-[240px] md:w-[270px] rounded-2xl border-[3px] border-black">
                <p>물건을 구매했는데 어느 셀러에게서 구매했는지 모르겠어요!</p>
                <img 
                  className="w-5 absolute -left-[19px] top-3"
                  src="/svg/bubble_tail_white.svg" 
                  alt="bubble_tail" />
              </div>            
            </div>
            <div data-aos="zoom-in-left" className="w-full flex flex-row-reverse">
              <div className="relative bg-[#FFEF5C] mr-[20px] p-3 md:p-5 w-[240px] md:w-[300px] rounded-2xl border-[3px] border-black">
                <p>안녕하세요 고객님!</p>
                <p>영수증 또는 상품사진 첨부해주시면 확인 후 연결시켜드리겠습니다.</p>
                <img 
                  className="w-5 absolute -right-[19px] top-3 scaleX scale-x-[-1] "
                  src="/svg/bubble_tail_gold.svg" 
                  alt="bubble_tail" />
              </div>            
            </div>
            <div data-aos="zoom-in-right" className="w-full">
              <div className="relative bg-white ml-[20px] p-3 md:p-5 w-[240px] md:w-[300px] rounded-2xl border-[3px] border-black">
                <p>물건을 구매했는데 집에서 확인하니 상품이 파손되어 있어요!</p>
                <p>어떻게 해야하죠?</p>
                <img 
                  className="w-5 absolute -left-[19px] top-3"
                  src="/svg/bubble_tail_white.svg" 
                  alt="bubble_tail" />
              </div>   
            </div>
            <div data-aos="zoom-in-left" className="w-full flex flex-row-reverse">
              <div className="relative bg-[#FFEF5C] mr-[20px] p-3 md:p-5 w-[240px] md:w-[310px] rounded-2xl border-[3px] border-black">
                <p>고객님, 많이 속상하시죠? 죄송합니다. 확인 후 빠르게 도와드리겠습니다.</p>
                <img 
                  className="w-5 absolute -right-[19px] top-3 scaleX scale-x-[-1] "
                  src="/svg/bubble_tail_gold.svg" 
                  alt="bubble_tail" />
              </div>            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
