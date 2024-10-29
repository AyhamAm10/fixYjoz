import SliderLayout from "../../layout/SliderLayout";
import WorkingCart from "../../profile/WorkingCart";

const WorkingHour = () => {
  return (
    <div className="py-4 sm:py-6 md:py-8">
      <div className="flex items-center justify-between py-5 sm:py-10 md:py-12">
        <h1 className="text-dark text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold">
        Working Hour
        </h1>
        <button className="rounded-md text-white px-14 py-3 bg-gradient-to-r from-[#E9233A] to-[#CC3030] font-bold text-sm">
          Save
        </button>
      </div>
      <SliderLayout style="flex py-3 sm:py-6 md:py-9 md:w-[90rem] sm:w-[80rem] w-[70rem]  justify-between mx-auto">
            <WorkingCart active={false} dayOff={true} />
            <WorkingCart active={false} dayOff={false} />
            <WorkingCart active={false} dayOff={false} />
            <WorkingCart active={true} dayOff={false} />
            <WorkingCart active={false} dayOff={false} />
            <WorkingCart active={false} dayOff={true} />
            <WorkingCart active={false} dayOff={false} />
      </SliderLayout>
    </div>
  );
};

export default WorkingHour;
