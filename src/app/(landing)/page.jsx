"use client";

import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import MsgSection from "@/components/MsgSection/MsgSection";
import Slide from "@/components/Slide/Slide";
import SlideContainer from "@/components/SlideContainer/SlideContainer";
import { useState } from "react";

const slideContents = [
  {
    title: "Market Vendor",
    sub: "플리마켓 기본 셋팅 물품 제공",
    contents: [
      "테이블, 스탠드, 마네킹 등 제공해드립니다.",
      "오직 고객과 상품판매에만 집중해주세요!",
      "(개인 결제시스템은 준비해주셔야합니다.)",
    ],
    image: "/svg/MarketVendor.svg",
  },

  {
    title: "Quickly and Easily",
    sub: "빠르고 간편한 플리마켓 참가신청",
    contents: [
      "안전한 마켓 참가를 위해 불필요한 개인정보는 요구하지 않습니다.",
      "(단, 판매 제품의 안전과 인증을 확인하기 위해 추가 정보를 요청할 수도 있습니다.)",
    ],
    image: "/svg/QuicklyAndEasily.svg",
  },

  {
    title: "Promotional Alert",
    sub: "스트릿마켓 친구추가 고객에게마켓 알림톡 전송",
    contents: [
      "스트릿마켓을 친구추가한 분들께",
      "플리마켓 알림톡 전송을 합니다.",
      "알림톡 서비스로 홍보효과를 누려보세요!!",
    ],
    image: "/svg/PromotionalAlert.svg",
  },
];






export default function LandingPage() {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div>
      <div className="bg-[#FFD700] flex justify-center">
      <Header slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
        <main className="w-full h-dvh overflow-hidden px-[20px] md:px-[50px]">
          <SlideContainer slideIndex={slideIndex} setSlideIndex={setSlideIndex}>
            <Hero />
            <About />
            <MsgSection />
            {slideContents.map((element, index)=>(<Slide key={index} obj={element} />))}
            <Footer />
          </SlideContainer>
        </main>
      </div>
    </div>
  );
}
