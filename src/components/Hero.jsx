export default function Hero() {
  // Responsive values organized
  const responsiveValues = {
    height: {
      section: 'h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[850px]',
      textContainer: 'h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px]',
      padding: 'pb-8 sm:pb-12 md:pb-14 lg:pb-16',
      paddingLeft: 'pl-8 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-24'
    },
    text: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[7xl]',
    circle: {
      top: 'top-[90px] sm:top-[110px] md:top-[100px] lg:top-[80px] xl:top-[63px]',
      right: 'right-[-10px] sm:right-[-15px] md:right-[-20px] lg:right-[-21px] xl:right-[-21.7px]',
      size: 'w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] xl:w-[175.91px] xl:h-[175.91px]'
    }
  }

  // SVG components
  const MainGradient = () => (
    <svg 
      className="absolute bottom-[140px] sm:bottom-[155px] md:bottom-[165px] lg:bottom-[165px] xl:bottom-[110px] 2xl:bottom-0 left-[-80px] sm:left-[80px] md:left-[-10px] lg:left-0 xl:left-0 2xl:left-[270px] w-[400px] h-[300px] sm:w-[500px] sm:h-[350px] md:w-[700px] md:h-[450px] lg:w-[900px] lg:h-[550px] xl:w-[1100px] xl:h-[650px] 2xl:w-[1349px] 2xl:h-[701px]" 
      xmlns="http://www.w3.org/2000/svg" 
      width="1349" 
      height="701" 
      viewBox="0 0 1349 701" 
      fill="none"
    >
      <path d="M1256.78 1.31469C1252.83 1.73751 1249.01 2.58314 1245.34 3.42878C919.994 66.2878 807.59 339.147 774.406 453.167C767.345 477.408 740.092 489.529 717.498 478.395C654.518 447.67 528.276 402.005 361.365 419.905C117.071 446.12 0.0078125 671.059 0.0078125 671.059L19.4948 851.461C19.4948 851.461 103.374 590.723 374.921 561.69C571.063 540.69 701.682 670.918 759.014 744.911C782.313 774.931 819.311 790.576 857.014 786.629C902.06 781.837 934.962 742.515 932.703 697.274C908.838 231.892 1274.43 165.227 1274.43 165.227C1319.76 160.294 1352.66 119.704 1347.72 74.4622C1342.78 29.2207 1302.11 -3.61819 1256.78 1.31469Z" fill="url(#paint0_linear_16406_1982)"/>
      <defs>
        <linearGradient id="paint0_linear_16406_1982" x1="62.5119" y1="862.269" x2="1153.8" y2="125.927" gradientUnits="userSpaceOnUse">
          <stop offset="0.04" stopColor="#292664" stopOpacity="0"/>
          <stop offset="0.24" stopColor="#6B8ED2" stopOpacity="0.24"/>
          <stop offset="0.43" stopColor="#5CBAFF"/>
          <stop offset="0.75" stopColor="#E759AE"/>
          <stop offset="0.99" stopColor="#F4475C"/>
        </linearGradient>
      </defs>
    </svg>
  )

  const BottomGradient = () => (
    <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" width="2216" height="888" viewBox="0 0 1598 730" fill="none">
      <g filter="url(#filter0_f_16455_1991)">
        <path d="M531.602 370.016L-0.234375 233.883H-45.9375V899.312H1703.09L1654.84 736.031L1487.85 682.906L1333.16 710.055L1007.97 608.688L749.375 575.289L531.602 370.016Z" fill="url(#paint0_linear_16455_1991)"/>
      </g>
      <defs>
        <filter id="filter0_f_16455_1991" x="-279.637" y="0.182816" width="2216.42" height="1132.83" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="116.85" result="effect1_foregroundBlur_16455_1991"/>
        </filter>
        <linearGradient id="paint0_linear_16455_1991" x1="828.574" y1="233.883" x2="828.574" y2="899.312" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F2E79" stopOpacity="0"/>
          <stop offset="1" stopColor="#202049"/>
        </linearGradient>
      </defs>
    </svg>
  )

  const SideGradient = () => (
    <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" width="1206" height="888" viewBox="0 0 1206 826" fill="none">
      <g filter="url(#filter0_f_16455_1993)">
        <path d="M359.01 153.499L319.01 -67.0002L-177.693 -105.994L-588.99 662.591L1065.65 1229.37L1072.93 1059.27L932.16 954.896L777.022 930.452L502.224 729.173L268.407 613.778L359.01 153.499Z" fill="url(#paint0_linear_16455_1993)" fillOpacity="0.3"/>
      </g>
      <defs>
        <filter id="filter0_f_16455_1993" x="-721.79" y="-238.794" width="1927.52" height="1600.97" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="66.4" result="effect1_foregroundBlur_16455_1993"/>
        </filter>
        <linearGradient id="paint0_linear_16455_1993" x1="549.307" y1="206.506" x2="52.3067" y2="544.506" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F2E79" stopOpacity="0"/>
          <stop offset="1" stopColor="#202049"/>
        </linearGradient>
      </defs>
    </svg>
  )

  const RedCircle = () => (
    <div className={`absolute ${responsiveValues.circle.top} ${responsiveValues.circle.right} ${responsiveValues.circle.size}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 155 176" fill="none">
        <path d="M88.8052 175.907C137.381 175.907 176.759 136.529 176.759 87.9536C176.759 39.3782 137.381 0 88.8052 0C40.2297 0 0.851562 39.3782 0.851562 87.9536C0.851562 136.529 40.2297 175.907 88.8052 175.907Z" fill="#F5485D"/>
      </svg>
    </div>
  )

  return (
    <section className={`relative w-full ${responsiveValues.height.section} overflow-hidden mb-[34px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}>
      {/* Ảnh nền chính */}
      <div className="absolute inset-0">
        <img 
          src="/NDM.png" 
          alt="NDM background"
          className="w-full h-full object-cover object-[62%_50%]"
        />
      </div>

      <div className="absolute inset-0 z-1">
        <img 
          src="/NDM4.png" 
          alt="NDM background"
          className="w-full h-full object-cover object-[62%_50%]"
        />
      </div>

      {/* SVG gradients */}
      <div className="absolute inset-0">
        <MainGradient />
        <BottomGradient />
        <SideGradient />
        <RedCircle />
      </div>

      {/* Text "ĐỒNG HÀNH KHỞI THỊNH VƯỢNG!" - responsive */}
      <div className={`absolute bottom-0 left-0 w-full ${responsiveValues.height.textContainer} flex items-end ${responsiveValues.height.padding} ${responsiveValues.height.paddingLeft} z-30 animate-slideUp`}>
        <h1 className={`text-white ${responsiveValues.text} font-bold leading-[120%] uppercase [text-shadow:0_4px_17.2px_rgba(0,0,0,0.25)]`}>
          ĐỒNG HÀNH <br /> KHỞI THỊNH VƯỢNG!
        </h1>
      </div>
    </section>
  )
}