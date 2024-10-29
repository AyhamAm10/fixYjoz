import { useState } from "react";
import Description from "./Description";
import Location from "./Location";
import Comment from "./Comment"
const Info: React.FC = () => {
  const [page, setPages] = useState([
    {
      id: 0,
      title: "Description",
      component: Description,
      active : true
    },
    {
      id: 1,
      title: "Location",
      component: Location,
      active: false
    },
    {
      id: 2,
      title: "Comment",
      component: Comment,
      active: false
    },
  ]);

  const handleClick:(id:number)=> void = (id)=>{
        const newPage = page.map((item)=> id === item.id ? {...item , active : true} : {...item , active: false} )
        setPages(newPage)
  }
  return (
    <div className="w-full px-2 sm:px-5 md:px-10 lg:px-14 py-5 xl:max-w-[55rem] md:max-w-[50rem]  ">
      <ul className="w-full flex items-center justify-between">
        {
            page.map((item)=>(
                <li key={item.id}
                 className={`${item.active ? "text-red" : "text-[#A1A1A1]"} text-lg sm:text-xl cursor-pointer`}
                 onClick={()=>{handleClick(item.id)}}
                 >
                    {item.title}
                </li>
            ))
        }
      </ul>
      <div className=" py-5">
      {
        page.map((item)=> item.active ? <item.component key={item.id} /> : null)
      }
      </div>
    </div>
  );
};

export default Info;
