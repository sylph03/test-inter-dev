import { useState, useEffect, useRef } from "react";

export default function About() {

  const aboutref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(aboutref.current); // chỉ trigger 1 lần
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (aboutref.current) {
      observer.observe(aboutref.current);
    }

    return () => {
      if (aboutref.current) observer.unobserve(aboutref.current);
    };
  }, []);

  return (
    <section
      ref={aboutref}
      className={`h-[1093.207px] xl:h-[1014px] w-full bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${visible ? "animate-fadeUp" : "opacity-0"}
      bg-[linear-gradient(110deg,rgba(47,46,121,0.20)_10.86%,rgba(0,0,0,0)_47.66%),url('/path-to-image'),linear-gradient(4deg,#7E9EC7_46.7%,#79A4D3_97.79%)] bg-no-repeat bg-cover`}
      >
      <div className="relative w-full h-full">
        {/* Ảnh nền */}
        <div className="bg-[url('/Image.png')] bg-cover bg-end bg-center xl:bg-center w-full h-full xl:bg-[url('/image400.png')]">
          {/* <img className="w-full h-[921px]" src="/image400.png" alt="NDM background" /> */}
        </div>

        <div className="absolute top-[62px] xl:top-1/2 left-0 xl:-translate-y-1/2">
          <div className="mx-[20px] xl:mx-[99px]">
            {/* Company name */}
            <div className="w-full flex items-center justify-start gap-1.5 mb-[16px] xl:mb-[12.5px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                <circle cx="3" cy="3.5" r="3" fill="white"/>
              </svg>
              <span className="text-[14px] xl:text-[16px] font-inter not-italic font-semibold leading-[16.8px] xl:leading-[24px] tracking-[-0.14px] xl:tracking-[-0.16px] uppercase [text-shadow:0_4px_16.1px_rgba(47,46,121,0.19)]">
                Công ty cổ phần tập đoàn AMI&M Việt Nam
              </span>
            </div>

            {/* Title */}
            <h1 className="w-[354px] text-[44px] xl:text-[64.705px] xl:w-[512px] mb-[24px] xl:mb-[48.82px] font-inter not-italic font-bold leading-[52.8px] xl:leading-[77.646px] tracking-[-1.76px] xl:tracking-[-2.588px] uppercase [text-shadow:0_4px_16.1px_rgba(47,46,121,0.19)]">
              Khởi nguồn từ Tình bằng hữu
            </h1>
            
            {/* Description */}
            <div className="flex flex-col gap-[27px] xl:gap-[32px] mb-[24px] xl:mb-[67px]">
              <p className="w-[334px] xl:w-[512px] text-[14px] xl:text-[18px] font-inter not-italic font-medium leading-[21px] xl:leading-[27px] tracking-[-0.14px] xl:tracking-[-0.36px] [text-shadow:0_4px_16.1px_rgba(47,46,121,0.19)]">
                Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí hướng chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt động.
              </p>
              <p className="w-[334px] xl:w-[582px] text-[14px] xl:text-[18px] font-inter not-italic font-medium leading-[21px] xl:leading-[27px] tracking-[-0.14px] xl:tracking-[-0.36px] [text-shadow:0_4px_16.1px_rgba(47,46,121,0.19)]">
                Tại Ami&M, chúng tôi được sống và làm việc hết mình! <br className="xl:block hidden" />
                Được gắn bó và kết nối cũng những người bằng hữu mà chúng tôi gọi là ANH EM - AM, được bứt phá các giới hạn bản thân để phát triển, thoả sức thử thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị mà mình tin tưởng.
              </p>
            </div>
          </div>

          {/* Button view more */}
          <button className="relative overflow-hidden group mx-[10px] xl:mx-[99px] px-[25px] py-[14px] xl:px-[34px] xl:py-[20px] bg-[#3E4089] xl:bg-[#2F2E79] rounded-[30px] xl:rounded-[46px] inline-flex items-center gap-[10px] xl:gap-[7px] text-[14px] xl:text-[16px] font-inter not-italic font-semibold leading-[22.4px] xl:leading-[24px] tracking-[-0.14px] xl:tracking-[-0.16px] uppercase [text-shadow:0_4px_16.1px_rgba(47,46,121,0.19)] text-white cursor-pointer">
            {/* Gradient overlay for smooth hover */}
            <span className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-in-out bg-gradient-to-r from-[#328AE2] to-[#FF0D39] group-hover:opacity-100"></span>
            <span className="relative z-10 inline-flex items-center gap-[7px]">
              <span className="text-[12px] xl:text-[16px] text-center font-inter font-semibold xl:font-bold not-italic leading-normal xl:leading-[22.4px] uppercase mr-[7px]">
                Hành trình của Ami&M
              </span>
              <span className="w-[8.411px] h-[7.764px] xl:w-[13px] xl:h-[13px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" fill="none">
                  <g clipPath="url(#clip0_16621_1556)">
                    <path d="M6.5 0.824219C6.5 1.45851 7.09585 2.40767 7.6982 3.20481C8.47385 4.23111 9.39954 5.12767 10.4617 5.81219C11.2575 6.32476 12.2238 6.81681 13 6.81681M6.5 12.8242C6.5 12.1899 7.09585 11.2408 7.6982 10.4436C8.47385 9.41739 9.39954 8.52077 10.4617 7.83624C11.2575 7.32367 12.2238 6.83163 13 6.83163M13 6.82422H0" stroke="white" strokeWidth="1.5"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_16621_1556">
                      <rect width="13" height="12" fill="white" transform="translate(0 0.824219)"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </span>
          </button>
        </div>

        {/* icon tròn trắng */}
        <div className="absolute top-[915px] left-[335px] xl:top-[500px] xl:left-[1049px] w-[17.664px] h-[17.664px] xl:w-[50px] xl:h-[50px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="24.5" className="stroke-[#3E4089] xl:stroke-white"/>
          </svg>
        </div>

        {/* icon tròn đỏ */}
        <div className="absolute top-[620px] right-[230px] xl:top-[153px] xl:right-[243px] w-[48.994px] h-[48.994px] xl:w-[126px] xl:h-[126px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126 126" fill="none">
            <circle cx="63" cy="63" r="63" fill="#ED1B2F"/>
          </svg>
        </div>

        {/* tròn xanh lá */}
        <div className="absolute bottom-[110px] right-[280px] xl:bottom-[191px] xl:right-[88px] w-[24.553px] xl:w-[94px] h-[24.553px] xl:h-[94px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94" fill="none">
            <circle cx="47" cy="47" r="47" fill="#8DC63F"/>
          </svg>
        </div>

        {/* ruy-băng */}
        <div className="absolute left-0 w-full bottom-[-40px] sm:bottom-[-60px] lg:bottom-[-80px] xl:bottom-[-100px] z-0 pointer-events-none">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1599 319" 
            fill="none"
            className="w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px]"
            preserveAspectRatio="none"
          >
            <g style={{ mixBlendMode: 'darken' }} opacity="0.99">
              <path d="M1623 0C1623 125.308 518.667 194.226 -14 210.522V266.5C808.5 351.5 1268.5 324.806 1623 241.5V0Z" fill="url(#paint0_linear_16621_1528)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_16621_1528" x1="184.702" y1="159.29" x2="1468.36" y2="364.408" gradientUnits="userSpaceOnUse">
                <stop stopColor="#328AE2"/>
                <stop offset="1" stopColor="#FF0D39"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}