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
      avatar: "/PartnerFeedback/image2.png"
    },
    {
      id: 3,
      name: "TS. name 3",
      position: "Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà Nội",
      imgIcon: "/PartnerFeedback/feedback3.png",
      feedback: "Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực ngân hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong muốn đóng góp vào sự phát triển chung của quá trình giáo dục định hướng thế hệ trẻ.",
      avatar: "/PartnerFeedback/image3.png"
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
    <section>
      <div className="relative h-[1000px] bg-black pt-[182.178px]">
        {/* overlay */}
        <svg className="absolute top-[-32px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1599 188" fill="none">
          <path d="M-4.59277 19.8513L1599.36 0.624254L1600.43 182.802L-2.41938 201.934L-4.59277 19.8513Z" fill="#102A4D"/>
        </svg>
        <svg className="absolute top-[182.178px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1599 740" fill="none">
          <path d="M-1 0.5H1599V739.5H-1V0.5Z" fill="url(#paint0_linear_17612_1867)"/>
          <defs>
            <linearGradient id="paint0_linear_17612_1867" x1="799" y1="0.5" x2="799" y2="739.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#102A4D"/>
              <stop offset="1" stop-color="#191868"/>
              <stop offset="1" stop-color="#191868"/>
            </linearGradient>
          </defs>
        </svg>

        {/* content */}
        <div className="relative w-full pl-[201px]">
          <div className="flex flex-col gap-[23px]">
            {/* title */}
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                <circle cx="3" cy="3.5" r="3" fill="white" fill-opacity="0.8"/>
              </svg>
              <span className="font-inter text-[rgba(255, 255, 255, 0.80)] font-base not-italic font-semibold leading-6 tracking-[-0.16px]">HỢP TÁC VỮNG BỀN</span>
            </div>
            {/* feedback */}
            <div className="flex flex-col gap-[33px]">
              {/* slide */}
              <div className="w-[695px] flex overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)`, }}>
                  { data.map((item) => (
                    // text
                    <div className="flex flex-col gap-[23px] w-full flex-shrink-0">
                      <p className="w-[695px] font-inter text-[28px] not-italic font-semibold leading-[39.2px] tracking-[-0.28px]">
                        {item.feedback}
                      </p>
                      <div className="flex flex-col">
                        <div className="font-inter text-[22px] leading-[28.6px] tracking-[-0.44px] font-semibold">{item.name}</div>
                        <div className="flex flex-col-reverse xl:flex-row">
                          <div className="flex gap-2.5 items-center">
                            <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="1.30435" cy="2.9999" r="1.30435" fill="#8DC63F"/>
                              <circle cx="8.56494" cy="3" r="1.95605" fill="#35AA94"/>
                              <circle cx="17.0649" cy="3" r="2.54395" fill="#0088CB"/>
                            </svg>
                            {item.position}
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
              <div className="flex gap-[21px]">
                { data.map((item, index) => (
                  // image
                  <div
                    onClick={() => {
                      setActiveIndex(index)
                      setAutoPlay(false)
                    }}
                    className="relative w-[94px] h-[94px] rounded-[100px]">
                    <img src={item.imgIcon}/>
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