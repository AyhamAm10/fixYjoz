import React from 'react'


type prop = {
    color: string
}
const SelectPayment:React.FC<prop> = ({color}) => {
  return (
    <select style={{background: "transparent" , border: `solid ${color} 1px` , color}}  className='w-full text-center text-white rounded-md px-4 py-3 px border bg-'>
        <option value="">How Many Product</option>
        <option value="1">items 1</option>
        <option value="2">items 2</option>
    </select>
  )
}

export default SelectPayment