import { useState, useEffect } from "react";

export default function PartnerFeedback() {

  const data = [
    {
      id: 1,
      name: "TS. Đinh Thanh Vân",
      position: "Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà Nội",
      imgIcon: "/PartnerFeedback/feedback1.png",
      feedback: "Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực ngân hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong muốn đóng góp vào sự phát triển chung của quá trình giáo dục định hướng thế hệ trẻ.",
      avatar: "/PartnerFeedback/image1.png"
    },
    {
      id: 2,
      name: "TS. name 2",
      position: "Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà Nội",
      imgIcon: "/PartnerFeedback/feedback2.png",
      feedback: "Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực ngân hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong muốn đóng góp vào sự phát triển chung của quá trình giáo dục định hướng thế hệ trẻ.",
      avatar: "/NDM4.png"
    },
    {
      id: 3,
      name: "TS. name 3",
      position: "Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà Nội",
      imgIcon: "/PartnerFeedback/feedback3.png",
      feedback: "Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực ngân hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong muốn đóng góp vào sự phát triển chung của quá trình giáo dục định hướng thế hệ trẻ.",
      avatar: "/Investment/3721.png"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

    // Auto play (3 giây đổi 1 slide)
  useEffect(() => {
    if (!autoPlay) return; // nếu autoPlay = false thì không chạy nữa

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay, data.length]); // chạy lại khi autoPlay thay đổi

  return (
    <section className="relative">
      <div className="relative h-full bg-black pt-[182.178px] pb-[171px] overflow-hidden">
        {/* overlay */}
        <svg className="absolute top-[-32px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1599 188" fill="none">
          <path d="M-4.59277 19.8513L1599.36 0.624254L1600.43 182.802L-2.41938 201.934L-4.59277 19.8513Z" fill="#102A4D"/>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-[#102A4D] to-[#191868]"></div>
        <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" width="469" height="557" viewBox="0 0 469 557" fill="none">
          <g opacity="0.2" filter="url(#filter0_f_17633_59)">
            <path d="M20 671.5C145.369 671.5 247 570.988 247 447C247 323.012 145.369 222.5 20 222.5C-105.369 222.5 -207 323.012 -207 447C-207 570.988 -105.369 671.5 20 671.5Z" fill="white"/>
            <path d="M20 671.5C145.369 671.5 247 570.988 247 447C247 323.012 145.369 222.5 20 222.5C-105.369 222.5 -207 323.012 -207 447C-207 570.988 -105.369 671.5 20 671.5Z" fill="url(#paint0_linear_17633_59)"/>
          </g>
          <defs>
            <filter id="filter0_f_17633_59" x="-428.6" y="0.899994" width="897.2" height="892.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="110.8" result="effect1_foregroundBlur_17633_59"/>
            </filter>
            <linearGradient id="paint0_linear_17633_59" x1="-598.213" y1="1082.29" x2="384.598" y2="707.953" gradientUnits="userSpaceOnUse">
              <stop offset="0.04" stop-color="#292664" stop-opacity="0"/>
              <stop offset="0.24" stop-color="#6B8ED2" stop-opacity="0.24"/>
              <stop offset="0.43" stop-color="#5CBAFF"/>
              <stop offset="0.75" stop-color="#E759AE"/>
              <stop offset="0.99" stop-color="#F4475C"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" width="1140" height="557" viewBox="0 0 1140 557" fill="none">
          <path opacity="0.2" d="M1047 0.789885C1042.99 1.21826 1039.13 2.075 1035.41 2.93175C705.864 66.6168 592.009 343.061 558.396 458.579C551.244 483.14 523.639 495.42 500.753 484.139C436.961 453.011 309.089 406.746 140.023 424.881C-107.425 451.44 -226 679.335 -226 679.335L-206.261 862.108C-206.261 862.108 -121.299 597.944 153.754 568.529C352.428 547.253 484.734 679.192 542.805 754.158C566.406 784.573 603.881 800.422 642.071 796.424C687.698 791.569 721.025 751.73 718.737 705.894C694.564 234.397 1064.88 166.856 1064.88 166.856C1110.79 161.859 1144.12 120.735 1139.11 74.8987C1134.11 29.0626 1092.91 -4.20782 1047 0.789885Z" fill="url(#paint0_linear_17633_65)"/>
          <defs>
            <linearGradient id="paint0_linear_17633_65" x1="-162.689" y1="873.058" x2="1226.1" y2="183.206" gradientUnits="userSpaceOnUse">
              <stop offset="0.04" stop-color="#292664" stop-opacity="0"/>
              <stop offset="0.24" stop-color="#6B8ED2" stop-opacity="0.24"/>
              <stop offset="0.43" stop-color="#5CBAFF"/>
              <stop offset="0.75" stop-color="#E759AE"/>
              <stop offset="0.99" stop-color="#F4475C"/>
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute top-1/4 right-1/2 xl:bottom-1/2 xl:right-[190px]">
          <svg className="w-[51.655px] xl:w-[210px] h-[51.081px] xl:h-[210px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 209" fill="none">
            <path d="M105.043 208.082C163.009 208.082 210 161.613 210 104.291C210 46.9688 163.009 0.5 105.043 0.5C47.0769 0.5 0.0859375 46.9688 0.0859375 104.291C0.0859375 161.613 47.0769 208.082 105.043 208.082Z" fill="white"/>
            <path d="M105.043 208.082C163.009 208.082 210 161.613 210 104.291C210 46.9688 163.009 0.5 105.043 0.5C47.0769 0.5 0.0859375 46.9688 0.0859375 104.291C0.0859375 161.613 47.0769 208.082 105.043 208.082Z" fill="url(#paint0_linear_17633_64)"/>
            <defs>
              <linearGradient id="paint0_linear_17633_64" x1="-342" y1="423" x2="262.525" y2="280.071" gradientUnits="userSpaceOnUse">
                <stop offset="0.04" stop-color="#292664" stop-opacity="0"/>
                <stop offset="0.24" stop-color="#6B8ED2" stop-opacity="0.24"/>
                <stop offset="0.43" stop-color="#5CBAFF"/>
                <stop offset="0.679776" stop-color="#E759AE"/>
                <stop offset="1" stop-color="#ED1B2F"/>
              </linearGradient>
            </defs>
          </svg>
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 52" fill="none">
            <path d="M53.2868 51.8124C56.9939 51.8124 60.1346 50.9313 62.709 49.169C65.1804 47.4068 67.034 45.0744 68.2697 42.1719C69.4024 39.2694 69.9688 36.1595 69.9688 32.8424C69.9688 28.0739 68.9905 23.5647 67.034 19.3145C64.9745 15.0644 62.3486 11.3326 59.1564 8.11912C55.8612 4.80195 52.3085 2.26225 48.4985 0.5L37.8406 8.4301C40.6209 9.67404 43.2468 11.1771 45.7182 12.9394C48.1896 14.598 50.352 16.4639 52.2056 18.5371C53.9561 20.6103 55.2948 22.7354 56.2216 24.9123L55.4493 25.3787C54.8314 24.9641 54.1621 24.6531 53.4413 24.4458C52.6175 24.2385 51.5362 24.1348 50.1976 24.1348C48.344 24.1348 46.4905 24.6013 44.6369 25.5342C42.6804 26.4672 41.0843 27.8666 39.8486 29.7325C38.5099 31.5984 37.8406 33.9826 37.8406 36.8852C37.8406 40.0987 38.5614 42.8457 40.003 45.1262C41.4447 47.3031 43.3497 48.9617 45.7182 50.102C48.0866 51.2423 50.6095 51.8124 53.2868 51.8124ZM15.4435 51.8124C19.1506 51.8124 22.2914 50.9313 24.8657 49.169C27.3371 47.4068 29.1907 45.0744 30.4264 42.1719C31.5591 39.2694 32.1255 36.1595 32.1255 32.8424C32.1255 28.0739 31.1472 23.5647 29.1907 19.3145C27.1312 15.0644 24.5053 11.3326 21.3131 8.11912C18.0179 4.80195 14.4653 2.26225 10.6552 0.5L-0.00271606 8.4301C2.77761 9.67404 5.40347 11.1771 7.87487 12.9394C10.3463 14.598 12.5087 16.4639 14.3623 18.5371C16.1129 20.6103 17.4515 22.7354 18.3783 24.9123L17.606 25.3787C16.9882 24.9641 16.3188 24.6531 15.598 24.4458C14.7742 24.2385 13.693 24.1348 12.3543 24.1348C10.5007 24.1348 8.64718 24.6013 6.79363 25.5342C4.8371 26.4672 3.241 27.8666 2.00529 29.7325C0.666626 31.5984 -0.00271606 33.9826 -0.00271606 36.8852C-0.00271606 40.0987 0.718109 42.8457 2.15976 45.1262C3.60141 47.3031 5.50645 48.9617 7.87487 50.102C10.2433 51.2423 12.7662 51.8124 15.4435 51.8124Z" fill="white"/>
          </svg>
        </div>
        <img className="hidden xl:block absolute right-[115px] bottom-[-21px]" src="/PartnerFeedback/image323.png"/>
        <img className="hidden xl:block absolute bottom-0 right-[135px] w-[522px] h-auto" src={data[activeIndex]?.avatar}/>

        {/* content */}
        <div className="relative w-full pl-[19.33px] xl:pl-[201px]">
          <div className="flex flex-col gap-[62px] xl:gap-[23px]">
            {/* title */}
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                <circle cx="3" cy="3.5" r="3" fill="white" fill-opacity="0.8"/>
              </svg>
              <span className="font-inter text-[rgba(255, 255, 255, 0.80)] text-sm xl:text-base not-italic font-bold xl:font-semibold leading-[16.8px] xl:leading-6 tracking-[-0.14px] xl:tracking-[-0.16px] uppercase">HỢP TÁC VỮNG BỀN</span>
            </div>
            {/* feedback */}
            <div className="flex flex-col gap-[33px]">
              {/* slide */}
              <div className="w-full xl:w-[695px] flex overflow-hidden">
                <div className="flex xl:gap-0 transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)`, }}>
                  { data.map((item) => (
                    // text
                    <div className="flex flex-col gap-[23px] w-full flex-shrink-0">
                      <img className="block xl:hidden w-[124.844px] h-[124.844px]" src={item.imgIcon}/>
                      <p className="w-[266px] xl:w-[695px] font-inter text-sm xl:text-[28px] not-italic font-medium xl:font-semibold leading-[21px] xl:leading-[39.2px] tracking-[-0.14px] xl:tracking-[-0.28px]">
                        {item.feedback}
                      </p>
                      <div className="flex flex-col gap-1">
                        <div className="font-inter text-xs xl:text-[22px] leading-[15.6px] xl:leading-[28.6px] tracking-normal xl:tracking-[-0.44px] font-semibold">{item.name}</div>
                        <div className="flex flex-col-reverse xl:flex-row">
                          <div className="flex-col xl:flex xl:flex-row gap-1 xl:gap-2.5 items-center">
                            <svg className="hidden xl:block" width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="1.30435" cy="2.9999" r="1.30435" fill="#8DC63F"/>
                              <circle cx="8.56494" cy="3" r="1.95605" fill="#35AA94"/>
                              <circle cx="17.0649" cy="3" r="2.54395" fill="#0088CB"/>
                            </svg>
                            <p className="inline-block w-[193.899px] xl:w-full font-inter xl:text-white text-[rgba(240,250,255,0.53)] text-[10px] xl:text-sm not-italic font-semibold leading-[15px] xl:leading-[21px] tracking-[-0.14px]">
                              {item.position}
                            </p>
                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="1.30435" cy="1.30435" r="1.30435" transform="matrix(-1 0 0 1 20.2173 1.69556)" fill="#ED1B2F"/>
                              <circle cx="1.95605" cy="1.95605" r="1.95605" transform="matrix(-1 0 0 1 13.6084 1.04395)" fill="#D24D70"/>
                              <circle cx="2.54395" cy="2.54395" r="2.54395" transform="matrix(-1 0 0 1 5.69629 0.456055)" fill="#996598"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* icon img */}
              <div className="flex xl:hidden">
                <svg onClick={() => {
                  if (!data || data.length === 0) return;
                  setActiveIndex((prev) => (prev - 1) % data.length)
                  setAutoPlay(false)
                }} xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                  <g clip-path="url(#clip0_14164_2988)">
                    {/* <circle cx="18.3293" cy="18.4866" r="18.871" transform="rotate(-180 18.3293 18.4866)" stroke="white" stroke-width="0.770244"/> */}
                    <circle cx="18.3294" cy="18.4866" r="0.770244" transform="rotate(-180 18.3294 18.4866)" fill="#E6F2EE"/>
                    <path d="M24.4915 19.2568L25.2617 19.2568L25.2617 17.7163L24.4915 17.7163L24.4915 19.2568ZM11.6229 17.9419C11.3221 18.2427 11.3221 18.7304 11.6229 19.0312L16.5247 23.933C16.8255 24.2338 17.3132 24.2338 17.614 23.933C17.9148 23.6322 17.9148 23.1445 17.614 22.8437L13.2568 18.4866L17.614 14.1294C17.9148 13.8286 17.9148 13.3409 17.614 13.0401C17.3132 12.7393 16.8255 12.7393 16.5247 13.0401L11.6229 17.9419ZM24.4915 17.7163L12.1676 17.7163L12.1675 19.2568L24.4915 19.2568L24.4915 17.7163Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_14164_2988">
                      <rect width="38.5122" height="38.5122" fill="white" transform="translate(37.5857 37.7424) rotate(-180)"/>
                    </clipPath>
                  </defs>
                </svg>
                <svg onClick={() => {
                  if (!data || data.length === 0) return;
                  setActiveIndex((prev) => (prev + 1) % data.length)
                  setAutoPlay(false)
                }} xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                  <g clip-path="url(#clip0_14164_2993)">
                    {/* <circle cx="18.9485" cy="18.4861" r="18.871" stroke="white" stroke-width="0.770244"/> */}
                    <circle cx="18.9485" cy="18.4861" r="0.770244" fill="#E6F2EE"/>
                    <path d="M12.7864 17.7158L12.0161 17.7158L12.0161 19.2563L12.7864 19.2563L12.7864 17.7158ZM25.6549 19.0307C25.9557 18.7299 25.9557 18.2422 25.6549 17.9414L20.7531 13.0396C20.4523 12.7388 19.9646 12.7388 19.6638 13.0396C19.363 13.3404 19.363 13.8281 19.6638 14.1289L24.021 18.4861L19.6638 22.8432C19.363 23.144 19.363 23.6317 19.6638 23.9325C19.9646 24.2333 20.4523 24.2333 20.7531 23.9325L25.6549 19.0307ZM12.7864 19.2563L25.1103 19.2563L25.1103 17.7158L12.7864 17.7158L12.7864 19.2563Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_14164_2993">
                      <rect width="38.5122" height="38.5122" fill="white" transform="translate(-0.307861 -0.769775)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="hidden xl:flex gap-[21px]">
                { data.map((item, index) => (
                  // image
                  <div
                    onClick={() => {
                      setActiveIndex(index)
                      setAutoPlay(false)
                    }}
                    className={`relative ${activeIndex === index ? "w-[94px] h-[94px]" : "w-[70px] h-[70px]"} rounded-[100px] cursor-pointer`}
                  >
                    <img className="w-full h-full object-cover" src={item.imgIcon}/>
                    <div className="absolute inset-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 95" fill="none">
                        <path d="M47 1.73495C47 1.0529 46.4468 0.498306 45.765 0.516221C36.4075 0.762091 27.3257 3.79762 19.6918 9.24738C11.7225 14.9366 5.72905 22.9728 2.54853 32.2335C-0.632002 41.4942 -0.840778 51.5171 1.95136 60.9022C4.74349 70.2874 10.3971 78.5661 18.1226 84.5823C25.8481 90.5984 35.2597 94.0515 45.0428 94.4592C54.826 94.867 64.4923 92.209 72.6916 86.8566C80.8909 81.5042 87.2138 73.7246 90.7772 64.6043C94.1906 55.8679 94.9087 46.3192 92.8545 37.1866C92.7048 36.5212 92.0316 36.1208 91.3703 36.2878C90.7091 36.4549 90.3103 37.1263 90.459 37.7919C92.3877 46.4254 91.7028 55.4484 88.4767 63.7055C85.1005 72.3464 79.1099 79.7172 71.3415 84.7884C63.5731 89.8595 54.4148 92.3778 45.1457 91.9915C35.8766 91.6052 26.9596 88.3336 19.6401 82.6336C12.3206 76.9336 6.96411 69.0899 4.3187 60.1979C1.6733 51.306 1.8711 41.8098 4.88449 33.0358C7.89788 24.2617 13.5764 16.6478 21.1269 11.2576C28.342 6.10681 36.9221 3.23226 45.765 2.98701C46.4468 2.9681 47 2.41699 47 1.73495Z" fill="url(#paint0_linear_17627_128)"/>
                        <defs>
                          <linearGradient id="paint0_linear_17627_128" x1="47" y1="0.5" x2="47" y2="62.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0.24"/>
                            <stop offset="1" stop-color="white"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}