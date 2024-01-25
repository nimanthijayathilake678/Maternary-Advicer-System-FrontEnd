import {Outlet} from 'react-router-dom'
import SideBar from "./SideBar";

const SideBarContent = () => {
  return (
    <div className="flex flex-1">
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default SideBarContent