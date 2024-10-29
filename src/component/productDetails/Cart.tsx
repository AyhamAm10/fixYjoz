import { useSelector } from "react-redux";
import subCategory from "../../assets/productDetails/Frame.svg";
import branch from "../../assets/productDetails/branch.svg";
import stare from "../../assets/productDetails/star.svg";
import color from "../../assets/productDetails/color.svg";
import date from "../../assets/productDetails/date.svg";
import comp from "../../assets/productDetails/comp.svg";
import location from "../../assets/productDetails/location.svg";
import irtc from "../../assets/productDetails/artc.svg";
import money from "../../assets/productDetails/money.svg";
import flowpite from "../../assets/productDetails/flowbite_profile-card-outline.svg";
import view from "../../assets/productDetails/view.svg";
import CostumBtn from "../costumeComponent/CostumBtn";
const Cart: React.FC = () => {

  const product = useSelector(
    (state: any) => state.productDetailsSlice
  ).productDetailsState;

  const handleShareClick = () => {
    if (navigator.clipboard) {
      const linkToCopy = product?.link ?? "No link available";

      navigator.clipboard
        .writeText(linkToCopy)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy the link: ", err);
        });
    }
  };

  return (
    <div className="md:bg-white rounded-md md:shadow-md px-6 sm:px-8 md:px-10 h-fit py-4 sm:py-6 md:py-8  md:translate-y-[-70px] flex flex-col gap-3 sm:gap-5 lg:gap-6 md:max-w-[35rem]  xl:max-w-[41rem]  ">
      <div className="flex items-start gap-3 ">
        <h3 className="text-dark w-full text-lg sm:text-3xl lg:text-4xl  font-medium ">
          {product.title}
        </h3>
        <div className="flex gap-2 items-center translate-y-[-20]">
          {/* share icon */}
          <div
            className="p-1 rounded-full shadow-md"
            onClick={handleShareClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 22C16.1667 22 15.4583 21.7083 14.875 21.125C14.2917 20.5417 14 19.8333 14 19C14 18.9 14.025 18.6667 14.075 18.3L7.05 14.2C6.78333 14.45 6.475 14.646 6.125 14.788C5.775 14.93 5.4 15.0007 5 15C4.16667 15 3.45833 14.7083 2.875 14.125C2.29167 13.5417 2 12.8333 2 12C2 11.1667 2.29167 10.4583 2.875 9.875C3.45833 9.29167 4.16667 9 5 9C5.4 9 5.775 9.071 6.125 9.213C6.475 9.355 6.78333 9.55067 7.05 9.8L14.075 5.7C14.0417 5.58333 14.021 5.471 14.013 5.363C14.005 5.255 14.0007 5.134 14 5C14 4.16667 14.2917 3.45833 14.875 2.875C15.4583 2.29167 16.1667 2 17 2C17.8333 2 18.5417 2.29167 19.125 2.875C19.7083 3.45833 20 4.16667 20 5C20 5.83333 19.7083 6.54167 19.125 7.125C18.5417 7.70833 17.8333 8 17 8C16.6 8 16.225 7.929 15.875 7.787C15.525 7.645 15.2167 7.44933 14.95 7.2L7.925 11.3C7.95833 11.4167 7.97933 11.5293 7.988 11.638C7.99667 11.7467 8.00067 11.8673 8 12C7.99933 12.1327 7.99533 12.2537 7.988 12.363C7.98067 12.4723 7.95967 12.5847 7.925 12.7L14.95 16.8C15.2167 16.55 15.525 16.3543 15.875 16.213C16.225 16.0717 16.6 16.0007 17 16C17.8333 16 18.5417 16.2917 19.125 16.875C19.7083 17.4583 20 18.1667 20 19C20 19.8333 19.7083 20.5417 19.125 21.125C18.5417 21.7083 17.8333 22 17 22Z"
                fill="#333333"
              />
            </svg>
          </div>
          {/* fivoret icon  */}
          <div className="p-1 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M12.3082 21.5383L10.821 20.205C9.09449 18.6494 7.66714 17.3075 6.53894 16.1793C5.41073 15.0511 4.5133 14.0381 3.84663 13.1403C3.17996 12.2426 2.71432 11.4179 2.44971 10.6665C2.18509 9.91504 2.05244 9.14581 2.05176 8.3588C2.05176 6.75196 2.59022 5.41008 3.66714 4.33316C4.74407 3.25623 6.08595 2.71777 7.69278 2.71777C8.58167 2.71777 9.42783 2.90581 10.2312 3.28188C11.0347 3.65794 11.727 4.18786 12.3082 4.87162C12.8894 4.18786 13.5817 3.65794 14.3851 3.28188C15.1885 2.90581 16.0347 2.71777 16.9236 2.71777C18.5304 2.71777 19.8723 3.25623 20.9492 4.33316C22.0261 5.41008 22.5646 6.75196 22.5646 8.3588C22.5646 9.14512 22.4323 9.91435 22.1677 10.6665C21.903 11.4186 21.4371 12.2432 20.7697 13.1403C20.1024 14.0374 19.2049 15.0504 18.0774 16.1793C16.9499 17.3082 15.5225 18.6501 13.7953 20.205L12.3082 21.5383ZM12.3082 18.7691C13.9492 17.299 15.2996 16.0385 16.3595 14.9875C17.4193 13.9366 18.2569 13.022 18.8723 12.2439C19.4877 11.4658 19.915 10.7732 20.1543 10.166C20.3936 9.5588 20.5133 8.95641 20.5133 8.3588C20.5133 7.33316 20.1714 6.47846 19.4877 5.7947C18.8039 5.11094 17.9492 4.76906 16.9236 4.76906C16.1201 4.76906 15.3765 4.99538 14.6928 5.44803C14.009 5.90068 13.5389 6.47777 13.2825 7.17931H11.3338C11.0774 6.47846 10.6073 5.90171 9.92355 5.44906C9.23979 4.99641 8.4962 4.76974 7.69278 4.76906C6.66714 4.76906 5.81244 5.11094 5.12868 5.7947C4.44492 6.47846 4.10304 7.33316 4.10304 8.3588C4.10304 8.95709 4.2227 9.55982 4.46201 10.167C4.70133 10.7742 5.12868 11.4665 5.74407 12.2439C6.35945 13.0214 7.19706 13.9359 8.25689 14.9875C9.31672 16.0391 10.6671 17.2997 12.3082 18.7691Z"
                fill="#FF4A4A"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[#959595] mt-3">
        <img src={subCategory} alt="category" className="w-5 " />
        <span>{product.category.category} </span>
        <img src={branch} alt="category" className="w-5 ml-2" />
        <span>{product.category.sub_categories[0].category}</span>
        <img src={stare} alt="category" className="w-5 ml-2" />
        <span>{product.rate ?? 0}</span>
      </div>
      <div className="flex items-center gap-2 text-[#959595] mt-3">
        <img src={color} alt="category" className="w-5 " />
        <span>{product.category.category} </span>
        <img src={date} alt="category" className="w-5 ml-2" />
        <span>{product.category.sub_categories[0].category}</span>
        <img src={comp} alt="category" className="w-5 ml-2" />
        <span>{product.brand?.name ?? "not found"}</span>
      </div>
      <div className="flex items-center gap-2 mt-3 flex-wrap">
        <img src={location} alt="category" className="w-5 " />
        {product.available_cities &&
          product.available_cities.map((city: any) => (
            <div
              key={city.id}
              className="px-2 py-1 border border-red text-red rounded-sm"
            >
              {city.name}
            </div>
          ))}
      </div>
      <div className="flex items-center gap-2 mt-3">
        <img src={irtc} alt="category" className="w-5 " />
        {product.tag && (
          <div
            style={{
              background: product.tag.color,
              color: product.tag.font_color,
            }}
            className={`py-2 px-1 rounded-sm text-sm bg-[${product.tag.color}] text-[${product.tag.font_color}]`}
          >
            {product.tag.tag ?? " not found"}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 mt-3">
        <img src={money} alt="category" className="w-5 " />
        {product.prices && (
          <div className="flex items-center gap-6">
            <div className="text-xs flex flex-col items-center border border-dark px-5 py-1 rounded-sm ">
              <p className="text-[#ACA9A9] font-medium">1 Day</p>
              <p>{product.prices.day_price ?? " not found"}</p>
            </div>
            <div className="text-xs flex flex-col items-center border border-dark px-5 py-1 rounded-sm ">
              <p className="text-[#ACA9A9] font-medium">7 Day</p>
              <p>{product.prices.week_price ?? " not found"}</p>
            </div>
            <div className="text-xs flex flex-col items-center border border-dark px-5 py-1 rounded-sm ">
              <p className="text-[#ACA9A9] font-medium">30 Day</p>
              <p>{product.prices.month_price ?? " not found"}</p>
            </div>
          </div>
        )}
      </div>
      {product.product_keywords && (
        <div className="flex items-center gap-2 mt-3 ">
          <img src={flowpite} alt="" className="w-5 " />
          <p className="text-dark text-xs sm:text-sm font-medium truncate xl:text-lg">
            {product.product_keywords}
          </p>
        </div>
      )}
      <div>
        <img src={view} alt="" className="w-5 " />
      </div>
      <div className="w-full p-5">
        <CostumBtn value="Order Now" style="w-full" />
      </div>
    </div>
  );
};

export default Cart;
