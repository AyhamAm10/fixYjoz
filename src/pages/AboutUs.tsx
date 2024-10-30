import CardAboutUs from "../component/AboutUs/CardAboutUs";
import HeroSection from "../component/AboutUs/HeroSection";
import img1 from "../assets/aboutUs/Icon.png";
import img2 from "../assets/aboutUs/Icon (1).png";
import img3 from "../assets/aboutUs/Icon (2).png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  return (
    <div className="px-3 sm:px-5 md:px-10 lg:px-20 py-10 lg:max-w-[95rem] mx-auto xl:max-w-[120rem]  ">
      <HeroSection />
      <div className="my-10 md:my-20 grid grid-cols 1 md:grid-cols-2 gap-x-5 gap-y-8 ">
        <CardAboutUs
          img={img1}
          title={t("TheIssue")}
          p={t("TheIssueDescription")}
        />
        <CardAboutUs
          img={img2}
          title={t("OurObjective")}
          p={t("OurObjectiveDescription")}
        />
        <div className="md:col-span-2">
          <CardAboutUs
            img={img3}
            title={t("PlayingYourPart")}
            p={t("PlayingYourPartDescription")}
            btn={t("BrowseItems")}
            fn={()=>navigate("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
