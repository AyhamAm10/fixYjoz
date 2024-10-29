
import { useSelector } from 'react-redux'
import AddImg from '../../component/ProfilePages/item/AddImg'
import Address from '../../component/ProfilePages/item/Address'
import RentingUnit from '../../component/ProfilePages/item/RentingUnit'
import { axiosClaint, endPoints } from '../../api/API__information_conect'
import { useCookies } from 'react-cookie'

const AddNewItem = () => {

  const [cookie] = useCookies(['token'])
  const dataToSent = useSelector((state:any)=>state.productFormSlice)
  const handleSubmit = async(e:any)=>{
    e.preventDefault()
    console.log(dataToSent)
    try {
      const res = await axiosClaint.post(endPoints.post.addProducts , dataToSent , {
        headers:{
          Authorization:`Bearer ${cookie.token}`
        }
      })

      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <section className="  sm:px-16 xl:px-0">
        <form  className='px-3 sm:px-5 md:px-7'onSubmit={handleSubmit} >
            <AddImg />
            <RentingUnit />
            <Address />
        </form>
    </section>
  )
}

export default AddNewItem