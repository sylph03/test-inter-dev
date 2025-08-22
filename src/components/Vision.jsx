import { useEffect, useRef } from "react";


export default function Vision() {

  const contentRef = useRef(null);
  
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const lines = el.querySelectorAll('[data-animate-line]');
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const scrollingUp = window.scrollY < lastScrollY; // true nếu đang cuộn lên
          if (entry.isIntersecting) {
            lines.forEach((line, index) => {
              line.classList.add('animate-fadeUp');
              line.style.animationDelay = `${0.2 + index * 0.2}s`;
            });
            // observer.unobserve(entry.target);
          }
          else if(scrollingUp) {
            lines.forEach((line) => {
              line.classList.remove('animate-fadeUp');
              line.style.animationDelay = '';
            });
          }
        });
        lastScrollY = window.scrollY;
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full h-[798px] flex justify-center items-center">
      <div className="w-[1000px] h-[558.824px] bg-[url('/vision.png')] bg-cover bg-center pt-[144px] pb-[197.82px] pr-[30px] pl-[9px]">
        <div className="flex flex-col gap-[16px] items-center">
          {/* Title */}
          <div className="flex gap-[7px] items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
              <circle cx="3" cy="3.67578" r="3" fill="#165BB8"/>
            </svg>

            <span className="text-[14px] xl:text-[16px] font-inter font-bold xl:font-semibold leading-[16.8px] xl:leading-[24px] tracking-[-0.14px] xl:tracking-[-0.16px] text-[#165BB8] uppercase">Tầm nhìn</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none">
              <circle cx="3" cy="3.67578" r="3" fill="#165BB8"/>
            </svg>
          </div>
          {/* Content */}
          <div className="text-center transition-all duration-0.4s ease" ref={contentRef}>
            <span data-animate-line className="text-[#011942] text-[24px] xl:text-[40px] font-bold leading-[28.8px] xl:leading-[51.6px] tracking-[-0.96px] xl:tracking-[-0.4px] text-center opacity-0 transition-transform duration-0.4s ease">
              Ami&M xây dựng&nbsp;
            </span>
            <span data-animate-line className="bg-[linear-gradient(92deg,#328AE2_13.28%,#FF0D39_91.27%)] bg-clip-text text-transparent text-[24px] xl:text-[40px] font-bold leading-[28.8px] xl:leading-[51.6px] tracking-[-0.96px] xl:tracking-[-0.4px] text-center opacity-0 transition-transform duration-0.4s ease">
              hệ sinh thái đa ngành phát triển nhanh và bền vững&nbsp;
            </span>
            <span data-animate-line className="text-[#011942] text-[24px] xl:text-[40px] font-bold leading-[28.8px] xl:leading-[51.6px] tracking-[-0.96px] xl:tracking-[-0.4px] text-center opacity-0 transition-transform duration-0.4s ease">
              trên hành trình kiến tạo sự thịnh vượng đích thực!
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}