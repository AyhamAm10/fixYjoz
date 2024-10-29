import { QueryKey, useQuery } from '@tanstack/react-query';
import  { useEffect } from 'react'
import { axiosClaint, endPoints, LongStaleTime } from '../api/API__information_conect';
import { useCookies } from 'react-cookie';
import Payment from '../component/plans/Payment';

const Plan = () => {

    const [cookie] = useCookies(["token"]);


     const usefetchPayment = async ()=>{

       const res = await axiosClaint.get(endPoints.get.payment , {
        headers: {
            Authorization:  `Bearer ${cookie.token}`
        }
       })
        return res.data
    }

    const { data  } = useQuery<unknown, Error, {data:any} | null, QueryKey>({
        queryKey: ["categorys api "],
        queryFn: usefetchPayment,
        staleTime: LongStaleTime,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchInterval: false,
      });

      useEffect(()=>{
        console.log(data)
      } , [data])

  return (
    <section className='p-3 container mx-auto'>
        <h1 className='text-center text-dark text-lg :md:text-xl lg:text-2xl  xl:text-3xl font-medium '>Choose Your Plan</h1>
        <div className='my-6 sm:my-12 flex justify-center sm:justify-between gap-8 flex-wrap '>
            <Payment />
            <Payment />
            <Payment />
        </div>
    </section>
  )
}

export default Plan