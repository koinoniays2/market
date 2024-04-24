import UserForm from "../Form/userForm";

export default function Hero() {
  return ( 
    <section className="w-full pt-[80px] md:pt-[150px] lg:pt-[200px]">
      <div className="text-[20px]">
        <p>셀러만을 위한 스트릿마켓의 특별한 서비스</p>
        <p>지금 바로 스트릿마켓의 알림을 신청하고 경험해보세요!</p>
      </div>
      <div className="w-full h-full relative">
        <UserForm />
      </div>
    </section>
  )
}