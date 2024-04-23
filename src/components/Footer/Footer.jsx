import email from "../../../public/svg/email.svg";
import call from "../../../public/svg/call.svg";
import kakao from "../../../public/svg/kakao.svg";
import time from "../../../public/svg/time.svg";

export default function Footer() {
  return (
    <footer className="w-full h-dvh pt-[75px] relative flex justify-center">
      <div className="absolute bottom-[20px] md:bottom-[100px]">
        <div>
          <h2 className="text-[20px] md:mb-[20px]">스트릿마켓 주의사항</h2>
          <div className="leading-5 md:text-[18px]">
            <div className="md:mb-[5px]">
              <p>
                1. 스트릿마켓에서 운영 중 발생된 CS문제는 스트릿마켓이 응대를
                합니다.
              </p>
              <p>(단, 이 외 발생한 CS문제는 셀러 본인이 해결하셔야합니다.)</p>
            </div>
            <div>
              <p>
                2. 현금영수증 문제 발생시 이는 스트릿마켓이 해결하지 않습니다.
              </p>
              <p>
                (현금영수증 문제는 법적필수고지사항입니다. 이는 셀러에게
                귀책사유가 되므로 스트릿마켓이 해결하지않습니다.)
              </p>
            </div>
          </div>
        </div>

        <div className="mb-[40px] md:mt-20 md:flex md:justify-between">
          <div className="mt-[20px]">
            <h2 className="text-[20px]">STREETMARKET</h2>
            <ul>
              <li>(주)스트릿마켓</li>
              <li>012-34-567890123</li>
              <li>서울</li>
            </ul>
          </div>
          <div className="mt-[20px]">
            <h2 className="text-[20px]">CONTACT</h2>
            <ul className="">
              <li className="flex gap-2">
                <img src={email.src} alt="" />
                streetmarket@gmail.com
              </li>
              <li className="flex gap-2">
                <img src={call.src} alt="" />
                010-1123-4567
              </li>
              <li className="flex gap-2">
                <img src={kakao.src} alt="" />
                streetmarket
              </li>
              <li className="flex gap-2 leading-4">
                <img src={time.src} alt="" />
                10:00 - 18:00
                <br /> 주말, 공휴일 휴무
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <p>COPYRIGHT INFORMATION GOES HERE © 2017. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
