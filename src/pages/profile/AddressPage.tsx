import AddressCart from "../../component/ProfilePages/address/AddressCart";
import { useEffect, useState } from "react";
import { LatLngLiteral } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "../../component/ProfilePages/address/MapAddress";
import { useDispatch, useSelector } from "react-redux";
import { updateFieldAddress } from "../../redux/slice/addressSlice";
import {
  axiosClaint,
  endPoints,
  LongStaleTime,
} from "../../api/API__information_conect";
import { useCookies } from "react-cookie";
import Loader from "../../component/layout/Loader";
import { QueryKey, useQuery } from "@tanstack/react-query";

const AddressPage = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const [position, setPosition] = useState<LatLngLiteral | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [cookie] = useCookies(["token"]);
  const chacgeTogle = () => {
    setDisplay((priv) => !priv);
  };

  const dataToPosted = useSelector((state: any) => state.addAddressSlice);
  const dispatch = useDispatch();

  const handleSelectPosation = (value: string) => {
    dispatch(updateFieldAddress({ field: "label", value }));
  };

  const handleSelectCity = (value: string) => {
    dispatch(updateFieldAddress({ field: "city", value }));
  };

  useEffect(() => {
    if (position) {
      dispatch(
        updateFieldAddress({
          field: "latitude",
          value: position?.lat.toString(),
        })
      );
      dispatch(
        updateFieldAddress({
          field: "longitude",
          value: position?.lng.toString(),
        })
      );
    }
  }, [position]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(cookie.token);
    setLoading(true);
    try {
     await axiosClaint.post(
        endPoints.post.addAdrress,
        dataToPosted,
        {
          headers: {
            Authorization: `Bearer ${cookie.token}`,
          },
        }
      );
      chacgeTogle()
      refetch()
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getAddress = async () => {
    const res = axiosClaint.get(endPoints.get.getAddrres, {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    });
    return res;
  };

  const { data, isLoading , refetch } = useQuery<unknown, Error, {data:any} | null, QueryKey>({
    queryKey: ["categorys api "],
    queryFn: getAddress,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });


  return (
    <section className="  sm:px-16 xl:px-0">
      <div className="flex items-start justify-between sm:col-span-2">
        <div className="text-dark text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold">
          <h1>Addresses</h1>
          <p className="text-[#B0B0B0] text-xs md:text-sm leading-4 font-normal my-4 sm:my-7">
            View and Manage your addresses
          </p>
        </div>
        <button
          onClick={chacgeTogle}
          className="rounded-md hidden sm:block text-white px-4 py-4 bg-gradient-to-r from-red to-yalwe font-bold text-sm"
        >
          Add New Address
        </button>
      </div>
      {data && (
        <div className="flex items-center flex-wrap gap-5">
          {data.data.data.map((item:any)=>(
          <AddressCart data={item} refetch={refetch} />
          ))}
        </div>
      )}

      {
        isLoading &&
        <div className="flex-center">
          <Loader />
        </div>
      }

      {display && (
        <div className="w-full top-0 left-0 z-[9000] min-h-screen fixed bg-[#D9D9D9CC]  ">
          {loading ? (
            <div className="flex-center">
              <Loader />
            </div>
          ) : (
            <div className="lg:max-w-[40rem] xl:max-w-[54rem] my-auto rounded-md mx-auto m p-6 sm:p-12 flex flex-col gap-4 sm:gap-6 bg-white">
              <div>
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
              </div>
              <form
                className="w-full flex flex-col gap-4 sm:gap-6"
                onSubmit={handleSubmit}
              >
                <select
                  onChange={(e) => handleSelectPosation(e.target.value)}
                  className="bg-[#F2F1F1] w-full p-3 rounded-md text-dark opacity-40 font-semibold text-lg sm:text-xl"
                >
                  <option value="home">Home</option>
                  <option value="home">work</option>
                  <option value="other">other</option>
                </select>
                <input
                  placeholder="Street"
                  type="text"
                  className="bg-[#F2F1F1] w-full p-3 rounded-md "
                  onChange={(e) =>
                    dispatch(
                      updateFieldAddress({
                        field: "street",
                        value: e.target.value,
                      })
                    )
                  }
                />
                <select
                  onChange={(e) => handleSelectCity(e.target.value)}
                  className="bg-[#F2F1F1] w-full p-3 rounded-md text-dark opacity-40 font-semibold text-lg sm:text-xl"
                >
                  <option value="Dubai">select city</option>
                  <option value="Dubai">Dubai</option>
                </select>
                <p className="text-dark text-lg xl:text-xl font-medium opacity-80 flex items-center gap-2">
                  Mark as default address
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M33.3327 20.0001V30.0001C33.3327 30.8841 32.9815 31.732 32.3564 32.3571C31.7313 32.9822 30.8834 33.3334 29.9994 33.3334H9.99935C9.11529 33.3334 8.26745 32.9822 7.64233 32.3571C7.0172 31.732 6.66602 30.8841 6.66602 30.0001V10.0001C6.66602 9.11603 7.0172 8.26818 7.64233 7.64306C8.26745 7.01794 9.11529 6.66675 9.99935 6.66675H24.9993"
                      stroke="url(#paint0_linear_348_9502)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_348_9502"
                        x1="6.66602"
                        y1="20.0001"
                        x2="33.3327"
                        y2="20.0001"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E9233A" />
                        <stop offset="1" stop-color="#FFC41B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </p>
                <div className="w-full md:w-3/4 mx-auto flex-wrap gap-3 flex items-center justify-between">
                  <button
                    className="bg-[#959695] w-full  px-10 py-2 rounded-md text-white "
                    onClick={chacgeTogle}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#959695] w-full  bg-gradient-to-r from-red to-yalwe px-10 py-2 rounded-md text-white "
                  >
                    save
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default AddressPage;
