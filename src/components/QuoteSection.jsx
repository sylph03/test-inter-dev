import { useEffect, useState, useRef } from "react";

export default function QuoteSection() {

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);


  // tách text thành 2 line
  const line1 = "“Tình bằng hữu, sự chính trực và tinh thần ";
  const line2 =
    "tự nâng tầm hun đúc nên tinh thần của một tổ chức không ngừng học tập để kiến tạo giá trị.”";
  const fullText = line1 + line2;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !textRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const textRect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Lấy top của text và bottom của component
      const textTop = textRect.top;
      const compBottom = rect.bottom;

      const refHeight = compBottom - textTop; // khoảng tham chiếu
      const scrolled = windowHeight - textTop; // đã cuộn qua bao nhiêu

      let p = scrolled / refHeight;
      p = Math.max(0, Math.min(1, p));

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef}>
      <div className="relative w-full h-full bg-white">
        <div className="relative w-full h-full overflow-hidden">
          {/* ảnh */}
          <img src="/QuoteSection.png" alt="QuoteSection" className="w-full h-[494px] xl:h-[900px] object-cover" />

          {/* overlay */}
          <div className="absolute left-0 bottom-0 w-full h-1/2 xl:h-[380.33px] bg-gradient-to-t from-[#102A4D]/90 to-transparent"></div>
          <div className="absolute left-0 bottom-0 w-full h-1/2 xl:h-[448.321px] bg-gradient-to-t from-[#102A4D]/90 to-transparent"></div>
          <svg className="hidden xl:block absolute left-[107px] bottom-[-210px] w-full h-[984px]" xmlns="http://www.w3.org/2000/svg" width="1349" height="740" viewBox="0 0 1349 740" fill="none">
            <path opacity="0.05" d="M1243.41 1.06737C1238.84 1.55647 1234.44 2.53468 1230.2 3.5129C854.464 76.2269 724.653 391.865 686.329 523.761C678.175 551.803 646.701 565.824 620.608 552.944C547.874 517.402 402.081 464.578 209.321 485.284C-72.8069 515.609 -208 775.814 -208 775.814L-185.495 984.5C-185.495 984.5 -88.6257 682.884 224.977 649.298C451.494 625.006 602.343 775.651 668.553 861.245C695.461 895.972 738.188 914.068 781.731 909.503C833.753 903.96 871.751 858.473 869.141 806.139C841.581 267.794 1263.79 190.678 1263.79 190.678C1316.14 184.972 1354.14 138.018 1348.43 85.683C1342.72 33.3485 1295.76 -4.63889 1243.41 1.06737Z" fill="white"/>
          </svg>

          {/* text  */}
          <div ref={textRef} className="absolute bottom-[31.5px] xl:bottom-[127px] right-1/2 translate-x-1/2">
            <div className="w-[286.895px] xl:w-[1291px] text-center text-[rgba(249,249,249,0.25)] text-xl xl:text-[40px] not-italic font-bold leading-[25px] xl:leading-[59.2px] tracking-[-0.2px] xl:tracking-[-0.4px]">
              {/* line 1 */}
              {line1.split("").map((char, i) => {
                const charProgress = (i + 1) / fullText.length;
                const opacity =
                  progress >= charProgress ? 1 : progress / charProgress;

                return (
                  <span
                    key={`l1-${i}`}
                    style={{
                      color: opacity >= 1 ? "#f9f9f9" : `rgba(249,249,249,${0.25 + 0.75 * opacity})`,
                      transition: "color 0.1s linear",
                    }}
                  >
                    {char}
                  </span>
                );
              })}

              {/* xuống dòng chỉ ở XL */}
              <br className="hidden xl:block" />

              {/* line 2 */}
              {line2.split("").map((char, i) => {
                const index = line1.length + i;
                const charProgress = (index + 1) / fullText.length;
                const opacity =
                  progress >= charProgress ? 1 : progress / charProgress;

                return (
                  <span
                    key={`l2-${i}`}
                    style={{
                      color: opacity >= 1 ? "#f9f9f9" : `rgba(249,249,249,${0.25 + 0.75 * opacity})`,
                      transition: "color 0.1s linear",
                    }}
                  >
                    {char}
                  </span>
                );
              })}
              {/* “Tình bằng hữu, sự chính trực và tinh thần <br className="hidden xl:block"></br> tự nâng tầm hun đúc nên tinh thần của một tổ chức không ngừng học tập để kiến tạo giá trị.” */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
{/* <span style={{ color: "rgba(249, 249, 249, 0.25)" }}></span> */}
