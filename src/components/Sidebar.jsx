import './sidebar.css'
import logo from "../imgs/logo.png"
import { SidebarData } from '../Data/Data'
import { useState } from 'react'


export default function Sidebar() {
    const [selected, setSelected] = useState(0)
    return (
        <div className="sidebar">
            {/* logo */}
            <div className="logo">
                <img src={logo} alt="" />
                <span>Melanin Kapital</span>
            </div>

            {/* menu */}
            <div className="menu">
                {
                    SidebarData.map(
                        (item, index) => {
                            return (
                                <div
                                    className={selected === index ?
                                        'menu-item active' :
                                        'menu-item'}
                                    key={index}
                                    onClick={() => setSelected(index)}
                                >
                                    <item.icon />
                                    <span>
                                        {item.heading}
                                    </span>
                                </div>
                            )
                        })
                }

                {/* <div className="menu-item">
                    <UilSignOutAlt />
                </div> */}
            </div>
        </div>
    )
}