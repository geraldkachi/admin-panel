// import "../assets/boxicons-2.0.7/css/boxicons.min.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
// import ScrollTop from "../ScrollTop/ScrollTop"
import Sidebar from "../Sidebar/Sidebar"
import Topnav from "../Topnav/Topnav"
import "./layout.css"



const Layout = () => {
  const state = useSelector((state: any) => state.ThemeReducer)
  const dispatch = useDispatch()

  useEffect(()=> {

  },[])

  return (
    <>
      <div className="layout">
        <Sidebar />
        {/* <ScrollTop /> */}
        <div className="layout__content">
          <Topnav />
          <div className="layout__content-main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout