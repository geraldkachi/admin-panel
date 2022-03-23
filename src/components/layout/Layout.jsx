// import "../assets/boxicons-2.0.7/css/boxicons.min.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
// import ScrollTop from "../ScrollTop/ScrollTop"
import Sidebar from "../Sidebar/Sidebar"
import Topnav from "../Topnav/Topnav"
import "./layout.css"

import ThemeAction from '../../redux/actions/ThemeAction'


const Layout = () => {
  const themeReducer = useSelector(state => state.ThemeReducer)

  const dispatch = useDispatch()

  useEffect(() => {
      const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

      const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

      dispatch(ThemeAction.setMode(themeClass))

      dispatch(ThemeAction.setColor(colorClass))
  }, [dispatch])


  return (
    <>
      <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
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