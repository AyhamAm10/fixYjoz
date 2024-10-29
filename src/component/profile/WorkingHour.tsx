import WorkingCart from "./WorkingCart";
import SliderLayout from "../layout/SliderLayout";

const WorkingHour: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10">
      <h1 className="text-dark font-semibold mb-2 text-xl sm:text-2xl md:text-3xl  lg:text-[2rem]">
        Working Hour
      </h1>
        <SliderLayout style=" flex mt-9 md:w-[90rem] sm:w-[80rem] w-[70rem]  justify-between mx-auto">
            <WorkingCart active={false} dayOff={true} />
            <WorkingCart active={false} dayOff={false} />
            <WorkingCart active={false} dayOff={false} />
            <WorkingCart active={true} dayOff={false} />
            <WorkingCart active={false} dayOff={false} />
            <WorkingCart active={false} dayOff={true} />
            <WorkingCart active={false} dayOff={false} />
        </SliderLayout>
    </section>
  );
};

export default WorkingHour;
