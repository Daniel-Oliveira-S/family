import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./styles.css";
import test1 from "../assets/test-1.png";
import test2 from "../assets/test-2.png";
import test3 from "../assets/test-3.png";
import test4 from "../assets/test-4.png";
import "./styles.css";
function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    {
      img: test1,
    },
    {
      img: test2,
    },

    {
      img: test3,
    },

    {
      img: test4,
    },
    // Add as many slides as you want
  ];

  const nextSlide = () => {
    setCurrentSlide((oldSlide) => {
      let newSlide = oldSlide + 1;
      if (newSlide === slides.length) {
        newSlide = 0; // Loop back to the start
      }

      return newSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((oldSlide) => {
      let newSlide = oldSlide - 1;
      if (newSlide < 0) {
        newSlide = slides.length - 1; // Loop back to the end
      }
      return newSlide;
    });
  };

  return (
    <div className="slide-transition">
      <button onClick={prevSlide}>
        <ChevronLeft />{" "}
      </button>
      <div className={`slide ${slides[currentSlide]}`}>
        <img className="" src={slides[currentSlide].img} alt="" />
      </div>
      <button onClick={nextSlide}>
        <ChevronRight />
      </button>
    </div>
  );
}

export default Carousel;
