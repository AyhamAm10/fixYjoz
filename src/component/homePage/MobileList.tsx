import { Link } from "react-router-dom"
import img from "../../assets/81.png"
import logoutImg from "../../assets/logout.png"
import { mobileLink } from "../../content/mobileNavLink"
type props = {
  setMenuOpen : React.Dispatch<React.SetStateAction<boolean>>
}
const MobileList:React.FC<props> = ({setMenuOpen}) => {
  return (
    <div className="p-5  absolute bg-white rounded-md right-2 top-20 z-30">
        <div className="flex flex-col gap-8 items-center">
            <img src={img} alt="" />
            <ul className="flex items-center gap-3 flex-col ">
                {
                  mobileLink.map((link:any)=>(
                    <li className="p-2" key={link.id} onClick={()=>setMenuOpen((priv)=>!priv)} >
                        <Link to={link.link}>
                            <img src={link.icon} alt="link" />
                        </Link>
                    </li>
                  ))  
                }
            </ul>
            <div className="p-1 rounded-full bg-red">

            <img src={logoutImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MobileList