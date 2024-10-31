import { useState, useEffect } from "react";

function useScreenSize() {
  const [widthElement, setWidthElement] = useState(414);
  const [maxElementsNumber, setMaxElementsNumber] = useState(4);
  const [paddingSize,setPaddingSize] = useState(120)
  const [screenSize, setScreenSize] = useState<number>(0);
  
  function getScreenSize() {
    const width = window.innerWidth;
    if(width <= 600){
      return Math.round((width-paddingSize)/widthElement)+0.3
    }else if(width > 600 &&width <= 1924){
      return Math.round((width-paddingSize)/widthElement)
    }else {
      return maxElementsNumber
    }
    
  }

  useEffect(() => {
    setScreenSize(getScreenSize());
    const handleResize = () => {

      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthElement,paddingSize,maxElementsNumber]);

  return {
    screenSize,
    // widthElement,
    // maxElementsNumber,
    // paddingSize,
    setMaxElementsNumber,
    setPaddingSize,
    setWidthElement
  };
}

export default useScreenSize;
