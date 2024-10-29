
import payment from "../../assets/plan/payment2.svg";
import bg2 from "../../assets/plan/bg-2.svg";
import victor from "../../assets/plan/Vector.svg";
import Select from "./SelectPayment";
const Payment = () => {
    // const optians = ["How Many Product" , "How Many Product"]
    // let value ;
    // const handleChange = ((val:string)=>{
    //     value = val ; 
    //     console.log(val)
    // })
  return (
    <div className="px-3 relative overflow-hidden sm:px-5 md:px-7 xl:px-9 py-4 sm:py-6 md:py-7 lg:py-9 xl:py-12 bg-[#242424] rounded-md flex-col flex justify-between ">
      <div className=" relative">
        <div className="p-3">
          <img src={payment} alt="" />
          <img src={bg2} className=" absolute bottom-0 left-0" />
        </div>
        <div className="flex-center gap-1 py-3 sm:py-4 flex-col ">
          <h3 className="text-lg font-bold uppercase text-white ">
            Featured Plan
          </h3>
          <h3 className="text-white font-semibold  text-sm">
            <span className="text-lg">39AED</span>/mo
          </h3>
        </div>
        <div className="flex-center gap-1 py-3 sm:py-4 flex-col   ">
          <div className="flex-col flex gap-3">
            <h3 className="text-white font-normal flex items-center gap-4 text-sm">
              <span className="text-lg">
                <img src={victor} alt="" />
              </span>
              No Featured Days
            </h3>
            <h3 className="text-white font-normal flex items-center gap-4  text-sm">
              <img src={victor} alt="" />
              <span>No Featured Days</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex-col my-4 flex-center gap-3 max-w-[14rem] mx-auto ">
        <Select color="#E9233A"/>
        <button className={`w-full rounded-md text-white  px-10 py-3 bg-gradient-to-b from-[#CC1F338A] to-[#E9233A] text-sm font-semibold  `}>Subscribe</button>
      </div>
    </div>
  );
};

export default Payment;
