import React from "react";

interface prop {
    value: string ,
    style?: string
}

const CostumBtn:React.FC<prop> = ({value , style}) => {
  return (
    <button className={`rounded-md text-white  px-10 py-3 bg-gradient-to-r from-red to-yalwe font-bold text-sm  ${style}`}>{value}</button>
  );
};

export default CostumBtn;
