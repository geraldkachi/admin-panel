import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom'
import "./topnav.css"
import notifications from "../../assets/JsonData/notification.json"
import user_image from "../../assets/images/tuat.png"
import user_menu from "../../assets/JsonData/user_menus.json"

const renderNotificationItem = (item: any, index: number) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const current_user = {
    display_name: "Gerald Kachi",
    image: user_image
}

const renderUserToggle = (user: any) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="users" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item: any, index: any) => (
    <Link to="" key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" name="search" placeholder="Search..." />
                <i className="bx bx-search"></i>
            </div>

            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here  */}
                    <Dropdown
                        // icon="bx bx-user"
                        customToggle={() => renderUserToggle(current_user)}
                        contentData={user_menu}
                        renderItems={(item: any, index: number) => renderUserMenu(item, index)}
                    />
                </div>

                <div className="topnav__right-item">
                    {/* dropdown here  */}
                    <Dropdown
                        icon="bx bx-bell"
                        badge="12"
                        contentData={notifications}
                        renderItems={(item: any, index: number) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to="/">View All</Link>}
                    />
                </div>

                <div className="topnav__right-item">
                    {/* theme settings */}
                    {/* <Dropdown icon="bx bx-user" /> */}
                </div>
            </div>
        </div>
    )
}

export default Topnav