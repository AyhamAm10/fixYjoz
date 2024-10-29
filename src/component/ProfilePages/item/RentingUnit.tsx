import useHandleSelectChange from "../../../hooks/UseSelectCHange";
import CheckboxComponent from "./CheckBox";
import Description from "./Description";
import Price from "./Price";
import Quantaty from "./Quantaty";
import SelectCategory from "./SelectCategory";
import SelectPrice from "./SelectPrice";
import SelectSubCategory from "./SelectSubCategory";
import SelectTag from "./SelectTag";
import Variant from "./Variant";

const RentingUnit = () => {
  const handleSelect = useHandleSelectChange();
  return (
    <>
      <div className="flex items-end flex-wrap gap-5  md:gap-10 mt-3 sm:mt-6 py-5 sm:py-10">
        <div className="flex flex-col gap-3 sm:w-auto w-full">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Renting unit
          </label>
          <select
            name="renting_unit_id "
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white lg:w-[30rem]"
            id=""
          >
            <option value="Daily">Daily</option>
          </select>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="text-dark font-medium text-sm sm:text-[1rem] ">
            For Renting
          </span>
          <svg
            className=" cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
              stroke="url(#paint0_linear_339_7813)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_339_7813"
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E9233A" />
                <stop offset="1" stop-color="#FFC41B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="text-dark font-medium text-sm sm:text-[1rem] ">
            For Selling
          </span>
          <svg
            className=" cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
              stroke="url(#paint0_linear_339_7813)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_339_7813"
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E9233A" />
                <stop offset="1" stop-color="#FFC41B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="text-dark font-medium text-sm sm:text-[1rem] ">
            Rent To Buy
          </span>
          <svg
            className=" cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
              stroke="url(#paint0_linear_339_7813)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_339_7813"
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E9233A" />
                <stop offset="1" stop-color="#FFC41B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full my-3 sm:my-6 md:my-9">
        <label
          className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
          htmlFor="Renting unit"
        >
          Item Info
        </label>
        <input
          onChange={handleSelect}
          type="text"
          className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
          placeholder="Title"
          name="title"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-9">
        <SelectCategory />
        <SelectSubCategory />
        <Variant />

        <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Number of doors
          </label>
          <input
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="Number of doors"
          />
        </div>
        <div className="flex flex-col gap-3 w-full ">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Number of Seats
          </label>
          <input
            type="text"
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            placeholder="Number of Seats"
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <label
            className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
            htmlFor="Renting unit"
          >
            Variant
          </label>
          <select
            name="Gear car "
            className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
            id=""
          >
            <option value="Variant">Gear car</option>
          </select>
        </div>
      </div>
      <Description />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-9">
        <Price />
        <SelectTag />
        <SelectPrice />
        <Quantaty />
        <CheckboxComponent />
      </div>
    </>
  );
};

export default RentingUnit;
