import { Outlet } from "react-router-dom"
import { SidebarLeft,SidebarRight } from "../../components"
import './publicCss/Public.scss'
const Public = ()=>{
    return(
        <div className="public">
            <div className="sidebar-left">
                <SidebarLeft/>
            </div>
            <div className="content">
                <Outlet/>
            </div>
            <div className="sidebar-right">
                <SidebarRight/>
            </div>
        </div>
    )
}
export default Public