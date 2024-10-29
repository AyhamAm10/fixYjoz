
import Cart from './Cart'
import Info from './Info'

const Details = () => {
  return (
    // grid grid-cols-1 md:grid-cols-2
    <div className=' flex gap-5 flex-col items-center md:items-start lg:flex-row sm:gap-8 px-3 sm:px-5 md:px-10 min-h-[70vh] mx-auto max-w-[100rem]'>
        <Cart  />
        <Info />
    </div>
  )
}

export default Details