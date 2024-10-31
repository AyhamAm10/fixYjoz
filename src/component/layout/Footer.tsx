import logo from "../../assets/app-ico-footer 1.png";
import facebook from "../../assets/logos_facebook.png";
import instagram from "../../assets/skill-icons_instagram.png";
import linked from "../../assets/skill-icons_linkedin.png";
import youtube from "../../assets/logos_youtube-icon.png";
import twitter from "../../assets/line-md_twitter-x.png";
import { Link } from "react-router-dom";
import img1 from "../../assets/Frame 4.png";
import img2 from "../../assets/Frame 5.png";
import img3 from "../../assets/Frame 6.png";
import prand from "../../assets/payment-methods.Dg8SnOJZ 1.png";
const Footer: React.FC = () => {
  const sotialIcon = [
    {
      imgs: facebook,
      link: "https://www.facebook.com/yjozme",
    },
    {
      imgs: instagram,
      link: "https://www.instagram.com/yjoz_official/",
    },
    {
      imgs: linked,
      link: "https://www.linkedin.com/company/yjoz",
    },
    {
      imgs: youtube,
      link: "https://www.facebook.com/yjozme",
    },
    {
      imgs: twitter,
      link: "https://x.com/YjozAE",
    },
  ];

  return (
    <footer className=" px-2 sm:px-4 md:px-8 bg-primery  sm:bg-[#F2F5FA] pt-4 pb-10 relative ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10  max-w-[2044px] mx-auto gap-8 gap-x-3">
        <div className="lg:pb-24 pb-2 lg:col-span-2 ">
          <img src={logo} className="pb-10 sm:pb-0 mx-auto" alt="yjoz logo" />
          <p className="text-[#7A7A7A] text-[15px] sm:text-sm py-3   ">
            Lorem ipsum dolor sit amet consectetur. Convallis nam in et netus
            vehicula fames in blandit. Gravida in at vestibulum est. Ut dolor
            tortor sit eu quis felis diam fermentum id. Dis vitae purus nunc
            lacinia elementum eget. Viverra aliquam dignissim malesuada risus
            tortor lectus. <br />
            Venenatis id nunc sit lobortis in sed egestas amet. Eu egestas
            mattis vitae sit tellus nunc.
          </p>
          <div className="pt-10 flex items-center gap-8">
            {
                sotialIcon.map((item , ind:number)=>(
                    <a href={item.link} key={`sotial media ${ind}`}>
                        <img src={item.imgs} key={item.link} alt="Social Media logo" />
                    </a>
                ))
            }
            
          </div>
        </div>
        <div className=" py-2 lg:py-20 sm:px-10 px-2 lg:col-span-2">
          <h3 className="text-dark sm:pb-10 text-sm sm:text-lg md:text-2xl font-semibold">
            Pages
          </h3>
          <ul className="flex flex-col gap-4">
            {[
              {
                title: "Home",
                link: "/",
              },
              {
                title: "About",
                link: "/about",
              },
              {
                title: "FAQ`S",
                link: "/FAQs",
              },
              {
                title: "Privacy Policy",
                link: "/PrivacyPolicy",
              },
              {
                title: "Terms and Conditions",
                link: "/Conditions",
              },
            ].map((item) => (
              <Link to={item.link} key={item.title}>
                <li key={item.title} className="text-dark text-sm uppercase">
                  {item.title}{" "}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className=" py-2 lg:py-20  px-2 lg:col-span-2">
          <h3 className="text-dark sm:pb-10 text-sm sm:text-lg md:text-2xl font-semibold">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4 ">
            {[
              {
                title: "address",
                link: "Lorem ipsum dolor sit amet.",
              },
              {
                title: "phone",
                link: "+971 50 394 4210",
              },
              {
                title: "email",
                link: "support@yjoz.com",
              },
            ].map((item) => (
              <li key={item.title} className="text-dark text-sm uppercase">
                <h3 className="text-dark ">{item.title}</h3>
                <p className="text-[#7A7A7A] ">{item.link}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <div className="flex flex-col w-full flex-wrap">
            <img
              src={prand}
              alt="payment-methods"
              className=" py-10"
            />
            <div className="flex flex-row gap-6 flex-wrap justify-center sm:justify-normal ">
              {[img1, img2, img3].map((img, ind) => (
                <img src={img} className="h-20 w-[220px] " key={ind} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
