
import img from "../../assets/home/MOCKUP.png"
import googlePlay from "../../assets/home/playstore-svgrepo-com 1.png"
import appStore from "../../assets/home/app-store-svgrepo-com 1.png"
import huawei from "../../assets/home/huawei-appgallery-seeklogo 1.png"
import BtnPartners from "./BtnPartners";
import { useTranslation } from "react-i18next";
const Partners = () => {

  const {t} = useTranslation()
  return (
    <div className="pb-5">
      <div className="flex-center ">
        <button className="px-8 py-4 rounded-[0.5rem] text-red cursor-pointer bg-[#FFC21B1A] text-sm font-medium ">
        {t("PARTNERSOFSUCCESS")}
        </button>
      </div>
      <h2 className="text-center text-3xl font-bold my-10 text-dark">
      {t("Successpartners")}
      </h2>
      <div className="flex flex-col-reverse lg:flex-row items-center px-5 sm:px-9 lg:px-20  gap-4 sm:gap-6 mdLgap-10 lg:gap-20">
            <div className="md:w-[50%] flex flex-col gap-5 sm:gap-10 ">
                <h1 className="text-[#828283] text-xl sm:text-3xl md:text-7xl font-semibold "><span className="text-gradient">Download</span>  YJOZ APP</h1>
                <p className="text-p  text-2xl">{t("lorim30")}</p>
                <div className="flex flex-col gap-5 lg:flex-row items-center justify-between">
                  <BtnPartners img={googlePlay} name="Google Play" title="GET IT ON" border="#D93F21"  />
                  <BtnPartners img={appStore} name="Google Play" title="GET IT ON" border="#2068EC" />
                  <BtnPartners img={huawei} name="Google Play" title="GET IT ON" border="#E14459" />
                </div>
            </div>
            <div >
                <img src={img} alt="MOCKUP" className="w-full " />
            </div>
      </div>
    </div>
  );
};

export default Partners;
