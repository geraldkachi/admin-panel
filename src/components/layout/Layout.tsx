// import "../assets/boxicons-2.0.7/css/boxicons.min.css"
import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import "./layout.css"

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <div className="layout__content">
          <div className="layout__content-main" style={{background:'black'}}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout