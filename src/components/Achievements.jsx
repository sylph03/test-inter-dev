export default function Achievements() {

  const data = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" fill="none">
          <circle cx="19" cy="19.5" r="19" fill="#ED1B2F"/>
          <path d="M24.8758 60.7363L9 73.838L28 98.2188L29.5136 96.8419C34.2777 92.5085 40.4863 90.1071 46.9264 90.1071H59.9146C67.5417 90.1071 74.8641 87.1141 80.3074 81.7716L96.1447 66.2276C99.0734 63.3531 99.0734 58.6348 96.1447 55.7603C93.2924 52.9608 88.7236 52.9608 85.8712 55.7603L75.61 65.8316C71.4999 69.8655 65.971 72.1255 60.212 72.1255H48.3882C47.8351 72.1255 47.3867 71.6771 47.3867 71.1239C47.3867 70.5708 47.8351 70.1224 48.3882 70.1224H63.6477C67.1945 70.1224 70.0698 67.2472 70.0698 63.7004C70.0698 60.1536 67.1945 57.2784 63.6478 57.2784H34.4984C30.9866 57.2784 27.5843 58.501 24.8758 60.7363Z" stroke="#2A2B6B" stroke-width="3.84" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M52.1048 48.9283C52.7711 37.8273 61.383 15.6167 90.5002 15.5818C89.686 29.1498 80.8671 54.8143 52.1048 48.9283Z" fill="#2A2B6B" stroke="#2A2B6B" stroke-width="3.88214"/>
          <path d="M49.6592 48.8624C49.2104 41.3868 43.411 26.4297 23.803 26.4063C24.3512 35.5432 30.2901 52.8261 49.6592 48.8624Z" fill="#2A2B6B" stroke="#2A2B6B" stroke-width="3.88214"/>
        </svg>
      ),
      number: "686",
      unit: "tỷ",
      text: "Tổng tài sản và Vốn chủ sở hữu"
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 87" fill="none">
          <circle cx="19" cy="19.5" r="19" fill="#ED1B2F"/>
          <path d="M41 37.5C50.0386 45.592 51.6433 70.205 51.3158 81.5C51.3158 71.8908 54.8526 52.6724 69 52.6724" stroke="#2A2B6B" stroke-width="3.84" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M60.0374 55.6742C59.5284 48.9187 64.0082 37.3378 86 45.0584C85.3214 50.0447 80.8078 60.114 68.1829 60.5" stroke="#2A2B6B" stroke-width="3.84" stroke-linecap="round"/>
          <path d="M46.459 46.6533C40.6995 48.7787 26.9443 48.2228 18 28.9961C24.2678 25.5628 39.2426 21.639 49 33.4104" stroke="#2A2B6B" stroke-width="3.84" stroke-linecap="round"/>
        </svg>
      ),
      number: "93,9",
      unit: "tỷ",
      text: "Doanh thu thuần"
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 95 99" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="19.5" r="19" fill="#ED1B2F"/>
          <path d="M51.5494 88.0655C52.2072 77.1067 60.7089 55.1804 89.4532 55.146C88.6494 68.5403 79.9434 93.8761 51.5494 88.0655Z" fill="#2A2B6B" stroke="#2A2B6B" stroke-width="3.84" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M51.0209 88.0655C50.3631 77.1067 41.8615 55.1804 13.1171 55.146C13.9209 68.5403 22.6269 93.8761 51.0209 88.0655Z" stroke="#2A2B6B" stroke-width="3.84" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="49.4531" y="47.5" width="4" height="42" fill="#2A2B6B"/>
          <path d="M36.9531 40.5C36.9531 31.8272 44.211 22.1825 52.0728 16.9998M52.0728 16.9998C58.7148 12.6213 66.1447 9.99984 70.9531 9.99984V28.2498C70.9531 38.8813 62.3346 47.4998 51.7031 47.4998V47.4998C41.0716 47.4998 32.4531 38.8813 32.4531 28.2498V9.99984C36.5329 9.66651 46.1685 10.5998 52.0728 16.9998Z" stroke="#2A2B6B" stroke-width="3.84" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M41.4531 11C41.4531 8 49.2531 2.5 52.4531 2.5C55.4531 2.5 62.4531 8.3 62.4531 11.5" stroke="#2A2B6B" stroke-width="3.84" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      ),
      number: "24,6",
      unit: "tỷ",
      text: "Lợi nhuận gộp"
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 87" fill="none">
          <circle cx="19" cy="19.5" r="19" fill="#ED1B2F"/>
          <path d="M77 5.5H39.7203C39.2547 5.5 38.8038 5.6624 38.4451 5.95921L25.2249 16.9001C24.7658 17.2801 24.5 17.845 24.5 18.4409V79C24.5 80.1046 25.3954 81 26.5 81H77C78.1046 81 79 80.1046 79 79V7.5C79 6.39543 78.1046 5.5 77 5.5Z" stroke="#2A2B6B" stroke-width="3"/>
          <path d="M36 81.1562L27 81.1562C25.533 81.1562 24.3438 79.967 24.3438 78.5L24.3438 69.5C24.3438 67.9182 25.5673 67.0157 26.6504 67.2754C27.4475 67.4665 28.2304 67.72 28.9912 68.0352C30.8907 68.822 32.6165 69.9759 34.0703 71.4297C35.5241 72.8835 36.678 74.6093 37.4648 76.5088C37.78 77.2696 38.0335 78.0525 38.2246 78.8496C38.4843 79.9327 37.5818 81.1562 36 81.1562Z" fill="#2A2B6B" stroke="#2A2B6B" stroke-width="2.68752"/>
          <path d="M78.6562 69.5L78.6562 78.5C78.6562 79.967 77.467 81.1562 76 81.1562L67 81.1562C65.4182 81.1562 64.5157 79.9327 64.7754 78.8496C64.9665 78.0525 65.22 77.2696 65.5352 76.5088C66.322 74.6093 67.4759 72.8835 68.9297 71.4297C70.3835 69.9759 72.1093 68.822 74.0088 68.0352C74.7696 67.72 75.5525 67.4665 76.3496 67.2754C77.4327 67.0157 78.6562 67.9182 78.6562 69.5Z" fill="#2A2B6B" stroke="#2A2B6B" stroke-width="2.68752"/>
          <path d="M33.5 43L45.329 29.3512C45.9958 28.5817 47.1343 28.4361 47.9734 29.013L53.1291 32.5575C53.9236 33.1037 54.9946 33.0054 55.6764 32.3236L66.5 21.5" stroke="#2A2B6B" stroke-width="3" stroke-linecap="round"/>
          <path d="M60 19.5L66.0461 19.9031C66.9126 19.9608 67.6428 20.5711 67.8534 21.4136L69 26" stroke="#011942" stroke-width="3" stroke-linecap="round"/>
          <rect x="33" y="50.5" width="37" height="3" rx="1.5" fill="#2A2B6B"/>
          <rect x="33" y="56.5" width="37" height="3" rx="1.5" fill="#2A2B6B"/>
          <rect x="33" y="62.5" width="25" height="3" rx="1.5" fill="#2A2B6B"/>
        </svg>
      ),
      number: "20+",
      unit: "",
      text: "Dự án trọng điểm"
    },
    {
      id: 5,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 87" fill="none">
          <circle cx="19" cy="19.5" r="19" fill="#ED1B2F"/>
          <mask id="path-2-inside-1_14164_3733" fill="white">
            <rect x="24" y="32.5" width="19" height="51" rx="2"/>
          </mask>
          <rect x="24" y="32.5" width="19" height="51" rx="2" stroke="#2A2B6B" stroke-width="6" mask="url(#path-2-inside-1_14164_3733)"/>
          <rect x="32" y="59.5" width="3" height="11" rx="1.5" fill="#011942"/>
          <rect x="32" y="44.5" width="3" height="11" rx="1.5" fill="#011942"/>
          <path d="M33 33.5V15.6492C33 14.7489 33.6016 13.9596 34.4697 13.7208L65.4697 5.19584C66.7429 4.8457 68 5.80375 68 7.12425V81.5" stroke="#2A2B6B" stroke-width="3"/>
          <rect x="12" y="80.5" width="79" height="3" rx="1.5" fill="#2A2B6B"/>
          <path d="M80 27.5H70C68.8954 27.5 68 28.3954 68 29.5V79.5C68 80.6046 68.8954 81.5 70 81.5H80C81.1046 81.5 82 80.6046 82 79.5V29.5C82 28.3954 81.1046 27.5 80 27.5Z" fill="#2A2B6B" stroke="#2A2B6B" stroke-width="3"/>
        </svg>
      ),
      number: "03",
      unit: "văn phòng",
      text: "Trên các tỉnh thành"
    },
  ]

  return (
    <section>
      <div className="relative w-full h-full mt-[51px] mb-[73px] xl:mb-0">
        <div className="hidden xl:block absolute left-[-347px] top-1/3 w-[786px] h-[786px] rounded-[786px] opacity-2 bg-[linear-gradient(180deg,#2A2B6B_0%,rgba(42,43,107,0.00)_18.58%)]"></div>

        <div className="grid grid-cols-1 xl:grid-cols-2">
          {/* Left */}
          <div className="xl:sticky top-2.5 xl:top-[277px] xl:h-[364px] w-full">
            <div className="h-full w-full px-2.5 py-8 xl:pl-[100px] z-10">
              <div className="flex flex-col items-start gap-[7px] mb-4 xl:mb-[19px]">
                <div className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                    <circle cx="3" cy="3.5" r="3" fill="#165BB8"/>
                  </svg>
                  <div className="font-inter text-[#165BB8] text-sm xl:text-base not-italic font-bold xl:font-semibold leading-[16.8px] xl:leading-6 tracking-[-0.14px] xl:tracking-[-0.16px] uppercase">TỪNG BƯỚC PHÁT TRIỂN</div>
                </div>
                <h1 className="text-[32px] xl:text-[88px] not-italic font-bold leading-[38.4px] xl:leading-[105.6px] tracking-[-1.28px] xl:tracking-[-3.52px] bg-gradient-to-r from-[#328AE2] to-[#FF0D39] bg-clip-text text-transparent">Dấu ấn Ami&M</h1>
              </div>
              <p className="w-[308.311px] xl:w-[527px] font-inter text-[#333] text-lg not-italic font-medium leading-[27px] tracking-[-0.36px]">
                Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự là những dấu ấn sâu đậm về sự đổi mới, trách nhiệm xã hội và sự tin cậy từ những Người đồng hành.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="relative overflow-hidden flex flex-col">
            <div className="hidden xl:block absolute top-1/3 right-[-367px] w-[786px] h-[786px] rounded-[786px] opacity-2 bg-[linear-gradient(180deg,#2A2B6B_0%,rgba(42,43,107,0.00)_18.58%)]"></div>
            {data.map((item) => (
              <div className="xl:h-[244px] p-6 xl:py-[37px] xl:pl-[51px] xl:border border-b-[#EDEDED] border-l-[#EDEDED]">
                <div className="inline-flex justify-center items-center gap-4 xl:gap-[62px]">
                  {/* icon */}
                  <div className="relative">
                    <svg className="w-[80px] xl:x-[170px] h-[80px] xl:h-[170px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 171" fill="none">
                      <circle cx="85" cy="85.5" r="85" fill="#FBFBFB"/>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] xl:w-[86px] h-[40px] xl:h-[86px]">
                      {item.icon}
                    </div>
                  </div>
                  {/* content */}
                  <div className="group flex xl:pt-[0.125px] xl:pr-[3px] xl:pb-[19px] pl-0 flex-col items-start gap-1 xl:gap-[1.875px]">
                    {/* number */}
                    <div className="relative text-[#2A2B6B] font-inter text-[32px] xl:text-[68px] not-italic leading-[41.92px] xl:leading-[89.08px] tracking-[-0.32px] xl:tracking-[-0.68px]">
                      <span className="font-extrabold text-transparent bg-clip-text bg-[linear-gradient(87deg,#328AE2_13.81%,#FF0D39_128.44%)] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-0 pointer-events-none z-1">
                        <span className="font-bold xl:font-extrabold">{item.number}</span>
                        <span className="font-semibold"> {item.unit}</span>
                      </span>
                      <span className="font-bold xl:font-extrabold">{item.number}</span>
                      <span className="font-semibold"> {item.unit}</span>
                    </div>
                    {/* text */}
                    <p className="font-inter text-[#646464] text-sm xl:text-xl not-italic font-medium xl:font-semibold leading-[21px] xl:leading-7 tracking-[-0.14px] xl:tracking-[-0.2px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}