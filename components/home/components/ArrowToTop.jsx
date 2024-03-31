import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ArrowToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="fixed z-30 bottom-16 right-6">
          <FaArrowCircleUp
            className="overflow-hidden text-5xl text-white rounded-full bg-ve-blue"
            onClick={scrollToTop}
          />
        </div>
      )}
    </div>
  );
}
