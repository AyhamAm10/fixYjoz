import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFormData } from "../../../redux/slice/createProjectSlice";

function LocationList() {
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const dispatch = useDispatch()
    const toggleCheckbox = (location: string) => {
        setCheckedItems((prevState) => {
          if (prevState.includes(location)) {
            return prevState.filter((item) => item !== location);
          } else {
            return [...prevState, location];
          }
        });
      };

      useEffect(()=>{
        dispatch(setFormData({cities: checkedItems}))
      },[checkedItems])

  const locations = [
    "Umm Al Quwain",
    "Ras Al Khaimah",
    "Abu Dhabi",
    "Dubai",
    "Fujairah",
    "Ajman",
    "Sharjah",
  ];

  return (
    <div className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-14">
       {locations.map((location) => (
        <div
          key={location}
          className="flex items-center gap-3 justify-between"
        >
          <span className="text-dark font-medium text-[1rem]">{location}</span>
          <svg
            onClick={() => toggleCheckbox(location)}
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 12V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H15"
              stroke={
                checkedItems.includes(location) 
                  ? "green" 
                  : "url(#paint0_linear_339_7813)"
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {checkedItems.includes(location) && ( 
              <path
                d="M9 12l2 2 4-4"
                stroke="green" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
            <defs>
              <linearGradient
                id="paint0_linear_339_7813"
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E9233A" />
                <stop offset="1" stopColor="#FFC41B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}

export default LocationList;
