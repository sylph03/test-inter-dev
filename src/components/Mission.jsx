import { useEffect, useState, useRef } from "react"

const data = [
  {
    id: 1,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 89" fill="none">
        <circle cx="25.451" cy="31.4293" r="24.951" fill="#F4475C"/>
        <path d="M68.9463 58.04C70.2519 56.7417 72.0988 56.0588 74.0029 56.2188H74.002C75.9018 56.3722 77.6332 57.3563 78.7588 58.9189L78.9248 59.1621C80.5722 61.7015 80.1213 65.2078 77.876 67.4482L77.3848 67.9375L77.3662 67.9004L64.6338 79.335H64.6328C59.919 83.5629 53.8371 85.8945 47.5068 85.8945H23.1631C22.2263 85.8945 21.4658 85.1341 21.4658 84.1973C21.466 83.2606 22.2264 82.501 23.1631 82.501H47.5068C52.9992 82.501 58.2761 80.4805 62.3662 76.8096L75.5273 64.9941C76.5896 63.9268 76.8203 62.2932 76.1494 61.126L76.0039 60.8994C75.448 60.1292 74.6437 59.6717 73.7266 59.5977V59.5967C72.8225 59.5361 71.9292 59.8552 71.2881 60.4941L71.2803 60.502L71.2715 60.5098L61.2686 69.625C60.0959 70.8014 58.4718 71.5342 56.6777 71.5342H44.709C43.7723 71.5342 43.0119 70.7745 43.0117 69.8379C43.0117 68.9011 43.7722 68.1406 44.709 68.1406H56.6777C57.501 68.1406 58.2504 67.8156 58.8057 67.2871C58.8372 67.2523 58.8715 67.2148 58.9102 67.1787L58.9189 67.1709L58.9365 67.1533C59.4515 66.6014 59.7686 65.8631 59.7686 65.0498C59.7685 63.3464 58.3811 61.959 56.6777 61.959H42.5254C36.5897 61.9591 31.0095 64.2683 26.8076 68.4629L24.3965 71.001L24.3975 71.002C23.7519 71.695 22.6704 71.7122 21.9961 71.0684V71.0674C21.315 70.4236 21.2901 69.3492 21.9336 68.6719L24.3682 66.1084L24.377 66.0986C29.2411 61.2346 35.6806 58.5685 42.5254 58.5684H56.6777C59.7132 58.5684 62.2671 60.663 62.9697 63.4834L68.9463 58.04ZM37.8594 27.4521L37.8672 27.4531C41.708 27.7236 44.8199 28.5848 47.2344 30.1562C49.3163 31.5115 50.8502 33.3774 51.8877 35.7832C52.9259 33.3774 54.4599 31.5115 56.542 30.1562C58.9565 28.5846 62.0688 27.7236 65.9111 27.4531L65.9219 27.4521C67.0948 27.3957 68.2673 27.8017 69.124 28.6582C69.9718 29.5059 70.4173 30.6793 70.3301 31.875C69.9612 37.1049 68.4954 40.9829 65.6426 43.583C62.8786 46.102 58.8934 47.3432 53.585 47.5547V50.6826C53.585 51.6194 52.8245 52.3799 51.8877 52.3799C50.9509 52.3798 50.1904 51.6194 50.1904 50.6826V47.5547C44.8821 47.3432 40.8968 46.1023 38.1328 43.583C35.2799 40.9825 33.8141 37.1034 33.4453 31.8721C33.3607 30.6796 33.803 29.5093 34.6504 28.6592C35.4491 27.8579 36.515 27.439 37.6348 27.4453L37.8594 27.4521ZM37.5684 30.8379C37.3815 30.8392 37.1937 30.9177 37.0508 31.0605C36.9133 31.198 36.8368 31.3763 36.8301 31.5537L36.832 31.6289V31.6318C37.145 36.0779 38.294 39.1103 40.457 41.0791C42.5441 42.9787 45.6618 43.9644 50.1523 44.1611C49.9566 39.6711 48.9698 36.553 47.0703 34.4658C45.1015 32.3026 42.0688 31.1535 37.624 30.8418V30.8408C37.6177 30.8405 37.6117 30.8411 37.6064 30.8408C37.5933 30.84 37.5805 30.8394 37.5742 30.8389C37.5717 30.8387 37.5698 30.838 37.5684 30.8379ZM66.1777 30.8379L66.1533 30.8389C61.7075 31.1518 58.6748 32.301 56.7061 34.4639C54.8065 36.5509 53.8198 39.6689 53.623 44.1592C58.1136 43.9636 61.2319 42.9777 63.3193 41.0781C65.4826 39.1094 66.6316 36.0766 66.9434 31.6318V31.6299C66.9586 31.4255 66.8813 31.2143 66.7246 31.0576C66.5787 30.9119 66.3911 30.8359 66.2021 30.8359C66.1964 30.8359 66.1926 30.8359 66.1895 30.8359L66.1777 30.8379Z" fill="#2A2B6B" stroke="#2A2B6B"/>
      </svg>
    ),
    title: "Với cán bộ nhân viên",
    content:
      "Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân",
  },
  {
    id: 2,
    svg: (
      <svg viewBox="0 0 94 89" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25.4505" cy="31.4293" r="24.951" fill="#F4475C"/>
        <g clip-path="url(#clip0_16855_195)">
          <path d="M71.135 76.8382V71.1348C71.135 68.1095 69.9258 65.2082 67.7733 63.069C65.6208 60.9298 62.7015 59.728 59.6574 59.728H36.7022C33.6582 59.728 30.7388 60.9298 28.5863 63.069C26.4339 65.2082 25.2246 68.1095 25.2246 71.1348V76.8382" stroke="#2A2B6B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M48.1754 53.6529C54.5143 53.6529 59.653 48.5459 59.653 42.2461C59.653 35.9463 54.5143 30.8394 48.1754 30.8394C41.8364 30.8394 36.6978 35.9463 36.6978 42.2461C36.6978 48.5459 41.8364 53.6529 48.1754 53.6529Z" stroke="#2A2B6B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M88.347 76.8383V71.1349C88.3451 68.6075 87.4986 66.1524 85.9406 64.1549C84.3825 62.1574 82.2011 60.7307 79.7388 60.0989" stroke="#2A2B6B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M68.2632 31.21C70.7321 31.8382 72.9203 33.2652 74.483 35.2659C76.0457 37.2667 76.8939 39.7275 76.8939 42.2602C76.8939 44.793 76.0457 47.2538 74.483 49.2545C72.9203 51.2553 70.7321 52.6823 68.2632 53.3105" stroke="#2A2B6B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_16855_195">
            <rect width="68.8656" height="58.0256" fill="white" transform="translate(22.354 27.3677)"/>
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Với khách hàng",
    content:
      "Cung cấp sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang đến cho khách hàng trải nghiệm tốt nhất",
  },
  {
    id: 3,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 91" fill="none">
        <circle cx="25.45" cy="31.4293" r="24.951" fill="#F4475C"/>
        <path d="M50.2383 34.4028C53.5214 34.4028 56.5788 35.5844 58.9385 37.73H58.9395L61.2227 39.811L63.2793 37.8755C67.1018 34.2785 73.0721 33.4098 77.7441 35.7515H77.7432L83.9561 38.8589L84.4092 39.0688C85.4826 39.528 86.6543 39.77 87.8203 39.77H91.9961C93.1509 39.77 94.0887 40.707 94.0889 41.8618C94.0889 43.0167 93.151 43.9536 91.9961 43.9536H87.8203C85.9654 43.9536 84.1047 43.5432 82.418 42.7612L82.083 42.6001L75.8701 39.4927L75.8691 39.4917C72.7374 37.9211 68.7057 38.5099 66.1465 40.9214L53.5342 52.7954C52.2957 54.0399 52.1155 55.9362 52.998 57.1626C53.5882 57.9804 54.4407 58.4644 55.4102 58.5444C56.3705 58.6149 57.3196 58.2748 57.9971 57.5952L58.0029 57.5894L58.0098 57.5835L69.1875 46.8833C70.0217 46.0837 71.3473 46.1149 72.1455 46.9507C72.9396 47.7825 72.9154 49.1065 72.0781 49.9067L67.0459 54.7241L86.7197 69.479C87.4262 69.3573 88.1447 69.2905 88.8672 69.2905H91.999C93.1538 69.2905 94.0907 70.2275 94.0908 71.3823C94.0908 72.5372 93.1539 73.4741 91.999 73.4741H88.8672C87.1271 73.4742 85.398 74.0134 83.9648 74.9995L83.6816 75.2026L67.333 87.4624L67.332 87.4614C65.5134 88.871 63.3289 89.5796 61.1396 89.5796C58.9507 89.5796 56.7497 88.869 54.9199 87.4458L38.5898 75.2026H38.5889C37.1036 74.0875 35.2595 73.4741 33.4033 73.4741H30.2744C29.1195 73.4741 28.1826 72.5372 28.1826 71.3823C28.1828 70.2275 29.1196 69.2906 30.2744 69.2905H33.4062C36.1659 69.2905 38.895 70.199 41.0996 71.853L57.4482 84.1128L57.4541 84.1167L57.46 84.1216C59.6308 85.8151 62.6413 85.8077 64.7969 84.1362L64.8066 84.1284L81.1738 71.853H81.1748C81.4704 71.6317 81.7746 71.4243 82.0869 71.231L63.9834 57.6567L60.9365 60.5737C59.5493 61.961 57.6572 62.7397 55.6865 62.7397C53.1349 62.7397 50.9009 61.4064 49.6055 59.6079C47.4858 56.6651 47.9569 52.4568 50.6152 49.8013L50.6309 49.7856L58.1699 42.686L56.123 40.8228C53.5009 38.4369 49.3692 38.0041 46.4014 39.4917L46.4004 39.4927L40.1885 42.6001H40.1875C38.414 43.4867 36.4315 43.9536 34.4502 43.9536H30.2744C29.1195 43.9536 28.1826 43.0167 28.1826 41.8618C28.1827 40.707 29.1196 39.77 30.2744 39.77H34.4502C35.7826 39.77 37.1222 39.4536 38.3145 38.8589L44.5273 35.7515C46.2884 34.8669 48.2632 34.4029 50.2383 34.4028Z" fill="#2A2B6B" stroke="#2A2B6B" stroke-width="1.5"/>
      </svg>
    ),
    title: "Với đối tác",
    content:
      "Tin tưởng và muốn hợp tác dài lâu trên nền tảng phát triển bền vững và hướng tới những giá trị tốt đẹp",
  },
  {
    id: 4,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 89" fill="none">
        <circle cx="25.451" cy="31.4293" r="24.951" fill="#F4475C"/>
        <path d="M74.1906 51.1582C74.1906 66.2201 61.9805 78.4302 46.9185 78.4302C31.8566 78.4302 19.6465 66.2201 19.6465 51.1582C19.6465 36.0962 31.8566 23.8861 46.9185 23.8861C61.9805 23.8861 74.1906 36.0962 74.1906 51.1582Z" stroke="#2A2B6B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M64.3276 51.1581C64.3276 60.7721 56.5339 68.5658 46.9199 68.5658C37.3059 68.5658 29.5122 60.7721 29.5122 51.1581C29.5122 41.5441 37.3059 33.7504 46.9199 33.7504C56.5339 33.7504 64.3276 41.5441 64.3276 51.1581Z" stroke="#2A2B6B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M54.4622 51.1581C54.4622 55.3241 51.0849 58.7014 46.9188 58.7014C42.7528 58.7014 39.3755 55.3241 39.3755 51.1581C39.3755 46.992 42.7528 43.6147 46.9188 43.6147C51.0849 43.6147 54.4622 46.992 54.4622 51.1581Z" stroke="#2A2B6B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),
    title: "Với cộng đồng",
    content:
      "Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực cho các hoạt động cộng đồng",
  },
];

export default function Mission() {

  const imageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && imageHeight > 0) {
        setMarginTop(-imageHeight);
      } else {
        setMarginTop(0);
      }
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, [imageHeight]);
  

  useEffect(() => {
    if (imageRef.current) {
      const updateHeight = () => {
        setImageHeight(imageRef.current.clientHeight);
      };
      
      updateHeight();
      window.addEventListener('resize', updateHeight);
      
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('[data-card-id]');
      let scrollPosition;
      if (window.innerWidth >= 1280) {
        scrollPosition = window.scrollY + window.innerHeight / 2;
      } else {
        scrollPosition = window.scrollY + window.innerHeight * (2/3);
      }
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardTop = rect.top + window.scrollY;
        const cardBottom = cardTop + rect.height;
        
        if (scrollPosition >= cardTop && scrollPosition <= cardBottom) {
          setCurrentCardIndex(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-full pb-[97px]">

      {/* Background SVG lEFT */}
      <svg className="hidden xl:block absolute top-0 left-0" width="274" height="781" viewBox="0 0 274 781" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4">
          <circle cx="-116" cy="390.676" r="290.5" stroke="#3E4089" stroke-opacity="0.1"/>
          <circle cx="-116" cy="390.676" r="309.5" stroke="#3E4089" stroke-opacity="0.09"/>
          <circle cx="-116" cy="390.676" r="326.5" stroke="#3E4089" stroke-opacity="0.09"/>
          <circle cx="-116" cy="390.676" r="345.5" stroke="#3E4089" stroke-opacity="0.06"/>
          <circle cx="-116" cy="390.676" r="367.5" stroke="#3E4089" stroke-opacity="0.05"/>
          <circle cx="-116" cy="390.676" r="389.5" stroke="#3E4089" stroke-opacity="0.03"/>
        </g>
      </svg>

      {/* Background SVG RIGHT */}
      <svg className="hidden xl:block absolute top-[33%] right-0" width="295" height="781" viewBox="0 0 295 781" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="390" cy="390.676" r="290.5" stroke="#3E4089" stroke-opacity="0.1"/>
        <circle cx="390" cy="390.676" r="309.5" stroke="#3E4089" stroke-opacity="0.09"/>
        <circle cx="390" cy="390.676" r="326.5" stroke="#3E4089" stroke-opacity="0.09"/>
        <circle cx="390" cy="390.676" r="345.5" stroke="#3E4089" stroke-opacity="0.06"/>
        <circle cx="390" cy="390.676" r="367.5" stroke="#3E4089" stroke-opacity="0.05"/>
        <circle cx="390" cy="390.676" r="389.5" stroke="#3E4089" stroke-opacity="0.03"/>
      </svg>

      {/* Background SVG BOTTOM */}
      <svg className="hidden xl:block absolute bottom-0 left-0" width="472" height="158" viewBox="0 0 472 158" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="82" cy="390.676" r="290.5" stroke="#3E4089" stroke-opacity="0.1"/>
        <circle cx="82" cy="390.676" r="309.5" stroke="#3E4089" stroke-opacity="0.09"/>
        <circle cx="82" cy="390.676" r="326.5" stroke="#3E4089" stroke-opacity="0.09"/>
        <circle cx="82" cy="390.676" r="345.5" stroke="#3E4089" stroke-opacity="0.06"/>
        <circle cx="82" cy="390.676" r="367.5" stroke="#3E4089" stroke-opacity="0.05"/>
        <circle cx="82" cy="390.676" r="389.5" stroke="#3E4089" stroke-opacity="0.03"/>
      </svg>
      <div className="hidden xl:block absolute bottom-0 left-0 right-0 h-[426px] bg-gradient-to-t from-[rgba(47,46,121,0.11)] to-[rgba(255,255,255,0)]"></div>

      <div className="sticky top-0 w-full bg-white z-[3] xl:relative xl:z-0">
        <div className="inline-flex flex-col items-center w-full pt-[69px] xl:pt-[85px] relative">
          {/* Background SVG TOP */}
          <svg className="absolute top-0 left-0 w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1599 713" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M879.5 341.676C1365.79 341.676 1760 265.34 1760 171.176C1760 77.0112 1365.79 0.675781 879.5 0.675781C393.213 0.675781 -1 77.0112 -1 171.176C-1 265.34 393.213 341.676 879.5 341.676ZM1682 496.676H82V712.676H1682V496.676Z" fill="url(#paint0_linear_1_3978)"/>
            <defs>
              <linearGradient id="paint0_linear_1_3978" x1="855.676" y1="0.675781" x2="855.676" y2="676.868" gradientUnits="userSpaceOnUse">
                <stop stopColor="#373981" stopOpacity="0.1"/>
                <stop offset="0.25" stopColor="#FFE1E5" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Title & Content */}
          <div className="inline-flex flex-col gap-[10px] items-center w-[375px] xl:w-[645px] mb-[26px] xl:mb-[88px] px-[8px] xl:px-0 py-0">
            {/* Title */}
            <div className="flex gap-[7px] items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                <circle cx="3" cy="3.67578" r="3" fill="#165BB8"/>
              </svg>

              <span className="text-[14px] xl:text-[16px] font-inter font-bold xl:font-semibold leading-[16.8px] xl:leading-[24px] tracking-[-0.14px] xl:tracking-[-0.16px] text-[#165BB8] uppercase">Sứ mệnh</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
                <circle cx="3" cy="3.67578" r="3" fill="#165BB8"/>
              </svg>
            </div>
            {/* Content */}
            <div className="text-center self-stretch">
              <span className="bg-[linear-gradient(92deg,#328AE2_13.28%,#FF0D39_91.27%)] bg-clip-text text-transparent text-[24px] xl:text-[40px] font-bold leading-[28.8px] xl:leading-[51.6px] tracking-[-0.96px] xl:tracking-[-0.4px]">
                Mang lại cuộc sống tốt đẹp hơn cho những người đồng hành
              </span>
            </div>
          </div>
        </div>

        {/* Mobile-only group: image + number inside header sticky */}
        <div className="xl:hidden relative">
          {/* Image (no ref on mobile) */}
          <div className="w-full py-[24px] px-[10px]">
            <img src="/mission.png" alt="Mission" className="w-full h-auto rounded-[24px]" />
          </div>

          {/* Number */}
          <div className="absolute bottom-[-40px] right-0 mt-0 mr-[25px] flex w-[56.305px] h-[24px] text-[#2A2B6B] font-inter text-[16px] not-italic leading-[24px] tracking-[2px] uppercase">
            <span>{String(currentCardIndex + 1).padStart(2, '0')}</span>
            /
            <span>{data.length.toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="m-0 xl:ml-[56px] xl:mr-[99px]">
        <div className="flex gap-16 items-start">
          <div className="w-full h-full relative p-0 xl:pb-[122px]">

            {/* Desktop sticky: image + number */}
            <div className="hidden xl:flex bg-transparent xl:sticky xl:top-[129px] xl:w-full justify-between items-start gap-0">
              {/* Number */}
              <div className="mt-[171px] mr-[25px] flex w-[56.305px] h-[24px] text-[#2A2B6B] font-inter text-[16px] not-italic leading-[24px] tracking-[2px] uppercase">
                <span>{String(currentCardIndex + 1).padStart(2, '0')}</span>
                /
                <span>{data.length.toString().padStart(2, '0')}</span>
              </div>
              {/* Image (desktop ref for height) */}
              <div ref={imageRef} className="w-full xl:w-1/2 py-0 px-0">
                <img src="/mission.png" alt="Mission" className="w-full h-auto rounded-[24px]" />
              </div>
            </div>

            {/* Stakeholder Cards */}
            {/* <div className="xl:hidden" style={{ height: imageHeight > 0 ? `${imageHeight}px` : undefined }} /> */}
            <div
              style={{ marginTop: marginTop }}
              className="flex flex-col justify-center items-start px-[10px] xl:px-0 xl:gap-0 gap-[16px] xl:mt-0">
              { data.map((item) => (
                <div 
                  key={item.id}
                  data-card-id={item.id}
                  className="w-full h-auto xl:h-[349px] bg-transparent p-[24px] xl:pt-[85px] xl:pl-[228px] rounded-[16px] border border-[#ededed] xl:border-0 xl:rounded-0 xl:opacity-40 hover:opacity-100 xl:z-[1]"
                >
                  <div className="flex flex-col gap-[10px] items-start">
                    {/* Icon */}
                    <div className="w-[80px] h-[76px] xl:w-[94px] xl:h-[89px]">
                      { item.svg }
                    </div>
                    {/* Title */}
                    <h3 className="text-[20px] xl:text-[26px] not-italic font-bold text-[#165BB8] leading-[25px] xl:leading-[33.8px] tracking-[-0.2px] xl:tracking-[-1.04px] uppercase">
                      { item.title }
                    </h3>
                    {/* Content */}
                    <p className="w-[307px] xl:w-[379px] font-inter text-[14px] xl:text-[18px] not-italic font-medium leading-[21px] xl:leading-[27px] tracking-[-0.14px] xl:tracking-[-0.36px] text-[#011942]">
                      { item.content }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}