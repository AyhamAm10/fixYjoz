import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { categoryType } from "../../../type/reduxType";
import useHandleSelectChange from "../../../hooks/UseSelectCHange";

const SelectSubCategory = () => {
    const [subcategorys , setSubCategorys] = useState<any[] | null>(null)
    const categoryId = useSelector((state:any)=>state.productFormSlice.category_id)
    const data =  useSelector((state:any)=>state.categorySlice?.category)

    const handleSelectChange = useHandleSelectChange();

        useEffect(()=>{
          if(data){
            const newData = data.filter((item:categoryType)=> item.id == categoryId )
            const subCategory = newData[0]?.sub_categories.map((categoryItem:any , index:number)=>{
              return {
                title: categoryItem.category, 
                id: categoryItem.id,
                active: index == 0 ? true : false, 
                image: categoryItem.image, 
              };
            })
            setSubCategorys(subCategory)
          }


        },[categoryId])

    console.log(categoryId)
  return (
    <div className="flex flex-col gap-3  w-full">
      <label
        className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
        htmlFor="Renting unit"
      >
        Sub category
      </label>
      <select
        name="Renting "
        className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white "
        onChange={handleSelectChange}
      >
        <option value="">Sub category</option>
        {
          subcategorys &&
          subcategorys.map((item:any)=>(
            <option value={item.id}>{item.title}</option>
          ))
        }
        
      </select>
    </div>
  );
};

export default SelectSubCategory;
