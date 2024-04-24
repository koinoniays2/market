
export default function About() {
  return (
    <section className="relative">
      <h2 className="text-[46px] md:text-[72px]">About</h2>
      <div className="text-[16px] md:text-[20px]">
        <p>COVID-19 종식 후,</p>
        <p>빠르게 성장하는 플리마켓 문화는 독특한 상품과</p>
        <p>예술 작품, 그리고 지역 특색이 담긴 제품 등을</p>
        <p>특징으로 하며, 환경과 경제적 가치를 중시하는 2030세대의 새로운 트렌드 중 하나입니다.</p>
      </div>
      <br />
      <div className="text-[15px] md:text-[20px]" >
        <p>우리는 올바른 플리마켓 문화를 세우기 위해 지속적으로</p>
        <p>플리마켓을 개최하고 다양한 셀러를 모집하여</p>
        <p>셀러들과 플리마켓 이용객이 모두 만족하는</p>
        <p>서비스를 제공하기 위해 노력하는 회사입니다.</p>
      </div>
      <div className="w-[320px] md:w-[650px] lg:w-[700px] pt-[50px] absolute bottom-[30px] md:bottom-0 right-1/2 translate-x-1/2 lg:right-0 lg:translate-x-0 ">
        <img 
          src="/svg/About.svg" 
          alt="About Image"
          className="w-full" 
        />
      </div>
    </section>
  )
}