import bg from "../assets/profile/Rectangle 6691.png";
import profileImg from "../assets/profile/Ellipse 12.png";
import star from "../assets/profile/Star 1.png"
import WorkingHour from "../component/profile/WorkingHour";
import OwnerReview from "../component/profile/OwnerReview";
const ProfileCompany = () => {
  return (
    <section className="sm:px-5 mx-auto max-w-[100rem] min-h-[150vh]">
      <div className=" ">
        <img src={bg} alt="" />
      </div>
      <div className="px-4 sm:px-6 md:px-10 flex gap-5 py-3 sm:py-5">
        <img src={profileImg} alt="profile img" className="h-[5rem] sm:h-[7rem] md:h-[9rem] lg:h-[10rem] xl:h-[12rem] translate-y-[-30%]" />
        <div>
          <h2 className="text-dark text-[1rem] sm:text-xl md:text-2xl font-medium flex items-center gap-3">
            Golden Key Rent Car LLC 
            <span className="flex gap-1 items-center"> 
                <img src={star} alt="star" />
                <p className="text-dark text-sm sm:text-lg md:text-xl">4.5</p>
            </span>
          </h2>
          <div className="text-dark opacity-50 text-sm md:text-[1rem] flex flex-col gap-2">
          <h4>test@test.com</h4>
          <h4>+963 933354342</h4>
          </div>
        </div>
      </div>
      <WorkingHour />
      <OwnerReview />
    </section>
  );
};

export default ProfileCompany;
