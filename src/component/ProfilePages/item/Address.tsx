import { useCookies } from "react-cookie";
import { axiosClaint, endPoints, LongStaleTime } from "../../../api/API__information_conect";
import AddressCart from "../address/AddressCart";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setFormData } from "../../../redux/slice/createProjectSlice";
import { useState } from "react";


const Address = () => {

  const [cookie] = useCookies(["token"]);
  const dispatch = useDispatch()
  const [selectedAddress, setSelectedAddress] = useState<null | string>(null);
  const getAddress = async () => {
    const res = axiosClaint.get(endPoints.get.getAddrres, {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    });
    return res;
  };

  const { data, } = useQuery<unknown, Error, {data:any} | null, QueryKey>({
    queryKey: ["get address api "],
    queryFn: getAddress,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  console.log(data)

  return (
    <div className="py-5 sm:py-10 lg:py-12">
      <div className="flex items-center gap-3 ">
        <h1 className="text-red text-xl font-medium">Addresses book</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6757 19.2871 15.7129 20.0958 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6446 22.0822 12.3251 22.1669 12 22.1669C11.6749 22.1669 11.3554 22.0822 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42283 20.2085 7.3869 19.3491 6.442 18.395C4.676 16.589 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 8C11.606 8 11.2159 8.0776 10.8519 8.22836C10.488 8.37913 10.1573 8.6001 9.87868 8.87868C9.6001 9.15726 9.37913 9.48797 9.22836 9.85195C9.0776 10.2159 9 10.606 9 11C9 11.394 9.0776 11.7841 9.22836 12.1481C9.37913 12.512 9.6001 12.8427 9.87868 13.1213C10.1573 13.3999 10.488 13.6209 10.8519 13.7716C11.2159 13.9224 11.606 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8Z"
            fill="#E9233A"
          />
        </svg>
      </div>
      <p className="py-3 sm:py-5 text-xl font-medium text-[#B0B0B0] ">
        {/* Lorem ipsum dolor sit amet consectetur. Velit. */}
      </p>
      {data && (
    <div className="flex items-center flex-wrap gap-5">
      {data.data.data.map((item: any) => (
        <button
          key={item.id}
          className={`border ${selectedAddress === item.id ? 'border-red' : 'border-primery'}`}
          onClick={() => {
            dispatch(setFormData({ address_id: item.id }));
            setSelectedAddress(item.id);
          }}
        >
          <AddressCart data={item} />
        </button>
      ))}
    </div>
  )}
      {/* <div className=" overflow-hidden h-[300px]">
        <MapContainer
          center={[24.4539, 54.3773]}
          zoom={13}
          className="leaflet-container"
          style={{ height: "400px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker setPosition={setPosition} />
        </MapContainer>
      </div> */}
      <div className=" flex flex-col sm:flex-row items-center justify-between">
        <div className=" items-center gap-1 my-3 sm:my-6 md:my-9 text-sm  text-red font-medium">
          <span className="text-[#323232]">I agree to YJOZ</span>
          public Agreement , Terms & Privacy Policy.
          <svg
            className=" cursor-pointer inline"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M15.9993 5.33317H7.99935C7.2921 5.33317 6.61383 5.61412 6.11373 6.11422C5.61363 6.61432 5.33268 7.29259 5.33268 7.99984V23.9998C5.33268 24.7071 5.61363 25.3854 6.11373 25.8855C6.61383 26.3856 7.2921 26.6665 7.99935 26.6665H23.9993C24.7066 26.6665 25.3849 26.3856 25.885 25.8855C26.3851 25.3854 26.666 24.7071 26.666 23.9998V11.9998"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex   gap-4 flex-col sm:flex-row justify-center  items-center sm:gap-6 md:gap-10">
          <button className="w-full sm:w-auto  text-sm font-bold px-20 py-3 border border-red text-red rounded-md">
            Cancel
          </button>
          {/* <CostumBtn value="Lend Your items" style="w-full sm:w-auto" /> */}
          <button type="submit" className={`rounded-md text-white  px-10 py-3 bg-gradient-to-r from-red to-yalwe font-bold text-sm w-full sm:w-auto`}>Lend Your items</button>
        </div>
      </div>
    </div>
  );
};

export default Address;
