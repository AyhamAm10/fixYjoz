import { useSelector } from 'react-redux';

const Description = () => {

    const product = useSelector(
        (state: any) => state.productDetailsSlice
      ).productDetailsState;

  return (
    < p className='max-h-[400px] overflow-y-scroll custom-scroll text-dark  ' dir='ltr'>
        {product.description}
    </p>
  )
}

export default Description