
const BusinessSettings = () => {
  return (
    <div className="py-4 sm:py-6 md:py-8 ">
      <form className="grid grid-cols-1 px-3 sm:grid-cols-2 gap-3 md:gap-6">
      <div className="flex items-center justify-between sm:col-span-2 ">
        <h1 className="text-dark text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold">
          Business Settings
        </h1>
        <button type="submit" className="rounded-md hidden sm:block text-white px-14 py-3 bg-gradient-to-r from-[#E9233A] to-[#CC3030] font-bold text-sm">
          Save
        </button>
      </div>
        <div className="w-full my-4 sm:my-auto ">
          <label className="text-dark text-sm sm:text-[1rem] font-medium ">
          Business Name
          </label>
          <input
            type="text"
            className="w-full text-dark opacity-40 p-3 shadow-sm rounded-sm bg-white mt-2"
            placeholder="Your Business Name"
          />
          {/* <p className="text-dark opacity-40 mt-4 sm:mt-10">Please note that if you added business name it will be shown as your main name</p> */}
        </div>
        <div className="w-full my-4 sm:my-auto">
          <label className="text-dark text-sm sm:text-[1rem] font-medium ">
          Store Name
          </label>
          <input
            type="text"
            className="w-full text-dark opacity-40 p-3 shadow-sm rounded-sm bg-white mt-2"
            placeholder="Yout Store Name"
          />
        </div>
        <button type="submit" className=" my-4 sm:my-auto rounded-md  sm:hidden text-white px-14 py-3 bg-gradient-to-r from-[#E9233A] to-[#CC3030] font-bold text-sm">
          Save
        </button>
        <p className="text-dark opacity-40 mt-4 sm:mt-10">Please note that if you added business name it will be shown as your main name</p>
      </form>
    </div>
  );
};

export default BusinessSettings;
