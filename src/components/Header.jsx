import { useState } from "react"

export default function Header() {
  const [toggleHeader, setToggleHeader] = useState(true)
  const [hasLogoMoved, setHasLogoMoved] = useState(false)

  // Handlers
  const handleToggle = () => {
    setToggleHeader(prev => !prev)
    setHasLogoMoved(true)
  }

  // Dynamic classes
  const headerBgClass = toggleHeader 
    ? 'bg-gradient-to-b from-[rgba(47,46,121,0.09)] to-[rgba(87,85,223,0)]' 
    : 'bg-white'
  
  const logoClass = hasLogoMoved
    ? 'absolute top-[10px] xl:top-[14px] left-[16px] xl:left-[99px] w-[72.574px] h-[37.778px] xl:w-[180px] xl:h-[66px]'
    : 'absolute top-[30px] left-[16px] xl:left-[99px] w-[120px] h-[62px] xl:w-[221px] xl:h-[118px]'
  
  const languageBgClass = toggleHeader 
    ? 'bg-[rgba(35,31,32,0.13)]' 
    : 'bg-white'
  
  const menuButtonClass = toggleHeader
    ? 'bg-white xl:bg-[rgba(35,31,32,0.13)] xl:text-[#F9F9F9]'
    : 'bg-white text-black'
  
  const menuIconClass = toggleHeader
    ? 'bg-black xl:bg-[#F9F9F9]'
    : 'bg-black'

  return (
    <header 
      className={`absolute inset-x-0 top-0 z-20 h-[62px] xl:h-[101px] transition-colors duration-500 ${headerBgClass}`}
    >
      {/* Nội dung header */}
      <div 
        onClick={handleToggle}
        className="flex items-center justify-end h-full px-[16px] xl:px-[99px] relative cursor-pointer">
        {/* logo - di chuyển chéo về bên trái mượt mà */}
        <svg 
          className={`transition-all duration-1000 ease-in-out ${logoClass}`}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 221 118" 
          fill="none"
        >
          <g clipPath="url(#clip0_16232_1997)">
            <path d="M124.89 78.8613H115.969V116.789H124.89V78.8613Z" fill={toggleHeader ? 'white' : '#5056A5'}/>
            <path d="M143.228 95.5409C142.558 95.5451 141.913 95.2831 141.435 94.8125C140.957 94.3419 140.686 93.701 140.679 93.0302V83.4992C140.774 79.9497 146.053 79.9418 146.147 83.4992V90.795H150.781V85.7816C150.379 76.1561 136.447 76.1561 136.046 85.7816V94.6594C136.041 95.3412 136.225 96.0111 136.578 96.5945C136.931 97.178 137.438 97.6524 138.044 97.9649C137.412 98.2558 136.884 98.7309 136.527 99.3278C136.17 99.9248 136.003 100.616 136.046 101.31V110.085C136.447 119.719 150.387 119.719 150.781 110.085V100.129H153.927V95.5409H143.228ZM143.417 115.052C142.697 115.056 142.004 114.774 141.49 114.268C140.977 113.762 140.686 113.073 140.679 112.352V102.64C140.682 102.307 140.751 101.978 140.881 101.672C141.011 101.366 141.201 101.088 141.438 100.855C141.675 100.622 141.956 100.438 142.265 100.313C142.573 100.189 142.903 100.126 143.236 100.129H146.147V112.36C146.141 113.079 145.85 113.766 145.338 114.27C144.826 114.775 144.136 115.056 143.417 115.052Z" fill={toggleHeader ? 'white' : '#5056A5'}/>
            <path d="M9.31586 116.789C9.31586 99.9935 8.22235 77.1615 16.2152 63.8449C17.175 62.1449 18.5753 62.1763 19.5666 63.8921C26.2535 75.6032 26.7728 94.7912 26.403 116.789H35.6861V100.812C35.6861 78.775 26.6469 67.2527 21.4153 62.4125C20.4737 61.5243 19.2312 61.025 17.9371 61.0148C16.643 61.0046 15.3928 61.4842 14.4373 62.3574C-0.714575 76.524 -0.022272 98.0338 0.02493 116.789H9.31586Z" fill={toggleHeader ? 'white' : '#5056A5'}/>
            <path d="M56.2137 116.793V90.5611C56.2137 86.1694 59.5571 82.612 63.6873 82.612C67.8175 82.612 71.1374 86.1616 71.1374 90.5454V116.793H80.5227V90.5611C80.5227 86.1694 83.8662 82.612 87.9885 82.612C92.1108 82.612 95.4464 86.1616 95.4464 90.5454V116.793H104.824V96.4639C104.903 80.6444 86.4072 72.3491 75.8261 84.0917C65.2529 72.3491 46.7575 80.6523 46.8441 96.4639V116.793H56.2137Z" fill={toggleHeader ? 'white' : '#5056A5'}/>
            <path d="M172.377 116.79V72.913C172.377 70.93 173.165 69.0282 174.566 67.626C175.968 66.2239 177.869 65.4361 179.851 65.4361C181.833 65.4361 183.734 66.2239 185.136 67.626C186.537 69.0282 187.325 70.93 187.325 72.913V116.806H196.71V72.913C196.71 70.93 197.497 69.0282 198.899 67.626C200.301 66.2239 202.202 65.4361 204.184 65.4361C206.166 65.4361 208.067 66.2239 209.468 67.626C210.87 69.0282 211.657 70.93 211.657 72.913V116.806H221.035V78.7685C221.113 63.0829 202.618 54.8583 192.045 66.4986C181.464 54.8505 162.976 63.0829 163.055 78.7685V116.79H172.377Z" fill={toggleHeader ? 'white' : '#5056A5'}/>
            <path d="M17.8513 92.2543C19.6978 92.2543 21.1948 90.7567 21.1948 88.9094C21.1948 87.062 19.6978 85.5645 17.8513 85.5645C16.0047 85.5645 14.5078 87.062 14.5078 88.9094C14.5078 90.7567 16.0047 92.2543 17.8513 92.2543Z" fill="#8DC63F"/>
            <path d="M120.398 72.1748C123.479 72.1748 125.976 69.6765 125.976 66.5947C125.976 63.5129 123.479 61.0146 120.398 61.0146C117.318 61.0146 114.82 63.5129 114.82 66.5947C114.82 69.6765 117.318 72.1748 120.398 72.1748Z" fill="#5056A5"/>
            <path d="M133.023 47.5915C136.716 47.5915 139.71 44.5964 139.71 40.9017C139.71 37.207 136.716 34.2119 133.023 34.2119C129.33 34.2119 126.336 37.207 126.336 40.9017C126.336 44.5964 129.33 47.5915 133.023 47.5915Z" fill="#996598"/>
            <path d="M157.859 27.6031C162.169 27.6031 165.663 24.1076 165.663 19.7957C165.663 15.4838 162.169 11.9883 157.859 11.9883C153.549 11.9883 150.055 15.4838 150.055 19.7957C150.055 24.1076 153.549 27.6031 157.859 27.6031Z" fill="#D24D70"/>
            <path d="M192.07 17.8539C196.997 17.8539 200.991 13.858 200.991 8.92891C200.991 3.99976 196.997 0.00390625 192.07 0.00390625C187.143 0.00390625 183.148 3.99976 183.148 8.92891C183.148 13.858 187.143 17.8539 192.07 17.8539Z" fill="#ED1B2F"/>
            <path d="M32.7198 63.8987C34.6706 63.8987 36.2521 62.3165 36.2521 60.3648C36.2521 58.4132 34.6706 56.8311 32.7198 56.8311C30.769 56.8311 29.1875 58.4132 29.1875 60.3648C29.1875 62.3165 30.769 63.8987 32.7198 63.8987Z" fill="#35AA94"/>
            <path d="M52.9411 50.2596C55.0961 50.2596 56.8431 48.5118 56.8431 46.3559C56.8431 44.1999 55.0961 42.4521 52.9411 42.4521C50.7861 42.4521 49.0391 44.1999 49.0391 46.3559C49.0391 48.5118 50.7861 50.2596 52.9411 50.2596Z" fill="#1EA0CA"/>
            <path d="M77.3747 46.4196C79.8382 46.4196 81.8353 44.4217 81.8353 41.9571C81.8353 39.4926 79.8382 37.4946 77.3747 37.4946C74.9111 37.4946 72.9141 39.4926 72.9141 41.9571C72.9141 44.4217 74.9111 46.4196 77.3747 46.4196Z" fill="#0088CB"/>
            <path d="M102.043 53.4703C104.815 53.4703 107.062 51.2222 107.062 48.449C107.062 45.6758 104.815 43.4277 102.043 43.4277C99.2706 43.4277 97.0234 45.6758 97.0234 48.449C97.0234 51.2222 99.2706 53.4703 102.043 53.4703Z" fill="#3777BC"/>
          </g>
          <defs>
            <clipPath id="clip0_16232_1997">
              <rect width="221" height="117.3" fill="white" transform="translate(0.0078125)"/>
            </clipPath>
          </defs>
        </svg>

        <div className="flex items-center gap-2 xl:gap-3">
          {/* language */}
          <div className={`flex items-center justify-between h-[44px] w-[88px] xl:h-[50px] xl:w-[98px] rounded-[25px] border border-white/30 transition-colors duration-500 ${languageBgClass} px-[7px] py-[9px]`}>
            <div className="rounded-full bg-[#2F2E79] w-[34px] h-[34px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
              <span className="text-white tracking-[-0.14px]">VIE</span>
            </div>
            <div className="rounded-full w-[34px] h-[34px] xl:w-[40px] xl:h-[40px] flex items-center justify-center">
              <span className={`text-[#F9F9F9] ${toggleHeader ? 'text-[#F9F9F9]' : 'text-black'} font-bold`}>ENG</span>
            </div>
          </div>

          {/* menu */}
          <button 
            type="button"
            aria-label="Toggle menu"
            aria-pressed={toggleHeader}
            className={`inline-flex items-center justify-center h-[44px] w-[44px] xl:w-auto xl:h-[50px] xl:gap-[10px] rounded-full xl:rounded-[25px] border border-white/30 transition-colors duration-500 ${menuButtonClass} xl:py-[14px] xl:px-[31px] py-[10px] px-[24px] uppercase font-bold text-[16px]`}>
            <span className="hidden xl:block">Menu</span>
            <span className="grid gap-[3px]">
              <span className={`block w-[18px] h-[2px] ${menuIconClass}`} />
              <span className={`block w-[18px] h-[2px] ${menuIconClass}`} />
              <span className={`block w-[18px] h-[2px] ${menuIconClass}`} />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}