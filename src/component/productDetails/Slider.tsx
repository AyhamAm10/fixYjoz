import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import right from "../../assets/productDetails/arrowRight.svg"
import lift from "../../assets/productDetails/arrowLeft.svg"

const Slider:React.FC<{imgList : any[]}> = ({imgList}) => {

    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [direction, setDirection] = useState(0);
    
      const variants = {
        enter: (direction: number) => ({
          x: direction > 0 ? 1000 : -1000,
          opacity: 0,
        }),
        center: {
          x: 0,
          opacity: 1,
        },
        exit: (direction: number) => ({
          x: direction < 0 ? 1000 : -1000,
          opacity: 0,
        }),
      };
    
      const nextImage = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgList.length);
      };
    
      const prevImage = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? imgList.length - 1 : prevIndex - 1
        );
      };
    
      return (
        <div className="relative w-full h-[90vh]">
          <div className="flex justify-center items-center h-full">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={imgList[currentIndex].id}
                src={imgList[currentIndex].img}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
    
          {/* السهم الأيسر */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2  p-1 sm:p-2 rounded-full bg-[#d9d9d999] flex-center"
            onClick={prevImage}
          >
            <img src={lift} alt=" left arrow" className="w-4 sm:w-6 md:w-9 lg:w-10" />
            
          </button>
    
          {/* السهم الأيمن */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#d9d9d999] rounded-full text-white p-1 sm:p-2"
            onClick={nextImage}
          >
            <img src={right} alt=" right arrow" className="w-4 sm:w-6 md:w-9 lg:w-10" />
          </button>
    
          {/* النقاط أسفل السلايدر */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            {imgList.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-red" : "bg-primery"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              ></div>
            ))}
          </div>
        </div>
      );
}

export default Slider