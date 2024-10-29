import { useTranslation } from "react-i18next"
import imgSlider from "../../assets/images Slider.png"
import CostumBtn from "../costumeComponent/CostumBtn"

const HeroSection:React.FC = () => {
  const {t} = useTranslation()
  return (
    <section className=" flex-center py-4 px-3 sm:px-6 md:px-9 ">
        <div className=" relative max-w-[100rem] w-full">
            <img src={imgSlider} alt="img slider" className="z-10 sm:block float-end rounded-bl-3xl" />
            <div className=" z-20 sm:absolute sm:top-1/2 sm:translate-y-[-50%] rounded__hero_card px-3 py-5 sm:p-7 md:p-9 bg-white ">
                <div className="mt-4 mr-4 md:max-w-[600px] 2xl:max-w-[730px]">
                    <p className="font-semibold  text-3xl sm:text-5xl md:text-6xl text-ofblack " >
                    <span className="text-gradient linear-gradient(90deg, #ff7a18, #af002d 70%)">{t("Discover")} </span>
                    {t("a_World_of_Sharing_with_Sustainability")}
                    </p>
                    <p className="text-lg sm:text-2xl text-[#274C5B] mt-5 ">{t("Rent_or_Lend_items_hassle_free")}</p>
                    <CostumBtn value={t("View_More")} style="mt-[100px]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection