"use client"
import Image from "next/image";
import togleIcon from "../../../assets/images/icons/side_bar_circle.svg";
import brand from "../../../assets/images/thumbnails/brand.png";
import brandMini from "../../../assets/images/icons/brand-mini.png";
import userImage from "../../../assets/images/thumbnails/user.png";
import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ isActive, setIsActive }: any) => {

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <aside className="site-sidebar">
            <button
                type="button"
                className="sidebar_btn_toggle"
                onClick={handleClick}
            >

                <Image
                    src={togleIcon}
                    alt="profile icon"
                    className="sidebaricon sidebar_icon_default"
                />

            </button>
            <Link href="/" className="brand-link">
                <Image src={brand} alt="logo" className="defult-thumb" />
                <Image src={brandMini} alt="logo" className="active-thumb" />
            </Link>

            <div className="left-side-bar">
                <ul>
                    <li>
                        <a href="javascript:void(0)">
                            <span className="nav-sidemenu-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.004" height="16.004" viewBox="0 0 16.004 16.004">
                                    <g id="vuesax_bold_element-4" data-name="vuesax/bold/element-4" opacity="0.6">
                                        <g id="element-4">
                                            <path id="Vector" d="M5.668,5.935V1.4c0-1-.427-1.4-1.487-1.4H1.487C.427,0,0,.4,0,1.4V5.935c0,1,.427,1.4,1.487,1.4H4.181C5.241,7.335,5.668,6.935,5.668,5.935Z" transform="translate(8.669 1.334)" fill="#fff" />
                                            <path id="Vector-2" data-name="Vector" d="M5.668,1.4V5.935c0,1-.427,1.4-1.487,1.4H1.487C.427,7.335,0,6.935,0,5.935V1.4C0,.4.427,0,1.487,0H4.181C5.241,0,5.668.4,5.668,1.4Z" transform="translate(1.667 7.335)" fill="#fff" />
                                            <path id="Vector-3" data-name="Vector" d="M0,0H16V16H0Z" transform="translate(16.004 16.004) rotate(180)" fill="none" opacity="0" />
                                            <path id="Vector-4" data-name="Vector" d="M5.668,3.268V1.4c0-1-.427-1.4-1.487-1.4H1.487C.427,0,0,.4,0,1.4V3.268c0,1,.427,1.4,1.487,1.4H4.181C5.241,4.668,5.668,4.268,5.668,3.268Z" transform="translate(8.669 10.003)" fill="#fff" />
                                            <path id="Vector-5" data-name="Vector" d="M5.668,3.268V1.4c0-1-.427-1.4-1.487-1.4H1.487C.427,0,0,.4,0,1.4V3.268c0,1,.427,1.4,1.487,1.4H4.181C5.241,4.668,5.668,4.268,5.668,3.268Z" transform="translate(1.667 1.334)" fill="#fff" />
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            <span className="nav-sidemenu-text">
                                Dashboard
                            </span>
                        </a>
                    </li>
                    <li><a href="javascript:void(0)" className="active"><span className="nav-sidemenu-icon"><svg xmlns="http://www.w3.org/2000/svg" width="17.042" height="17.042" viewBox="0 0 17.042 17.042">
                        <g id="vuesax_bold_calendar-2" data-name="vuesax/bold/calendar-2" transform="translate(-172 -252)">
                            <g id="calendar-2" transform="translate(172 252)">
                                <path id="Vector" d="M0,0H17.042V17.042H0Z" fill="none" opacity="0" />
                                <path id="Vector-2" data-name="Vector" d="M9.736,1.64V.533a.533.533,0,0,0-1.065,0V1.6H4.055V.533a.533.533,0,1,0-1.065,0V1.64A3.016,3.016,0,0,0,0,4.658a.357.357,0,0,0,.355.376H12.371a.352.352,0,0,0,.355-.376A3.016,3.016,0,0,0,9.736,1.64Z" transform="translate(2.158 0.888)" fill="#fff" />
                                <path id="Vector-3" data-name="Vector" d="M12.072,0H.71A.712.712,0,0,0,0,.71V5.084c0,2.13,1.065,3.55,3.55,3.55H9.231c2.485,0,3.55-1.42,3.55-3.55V.71A.712.712,0,0,0,12.072,0ZM4.41,5.944a.82.82,0,0,1-.234.149.669.669,0,0,1-.54,0A.82.82,0,0,1,3.4,5.944a.72.72,0,0,1,0-1.008.82.82,0,0,1,.234-.149.71.71,0,0,1,.54,0,.82.82,0,0,1,.234.149.72.72,0,0,1,0,1.008Zm.149-2.72a.82.82,0,0,1-.149.234.82.82,0,0,1-.234.149.669.669,0,0,1-.54,0A.82.82,0,0,1,3.4,3.458a.82.82,0,0,1-.149-.234.669.669,0,0,1,0-.54A.82.82,0,0,1,3.4,2.45.82.82,0,0,1,3.636,2.3a.71.71,0,0,1,.54,0,.82.82,0,0,1,.234.149.82.82,0,0,1,.149.234.669.669,0,0,1,0,.54ZM6.9,3.458a.82.82,0,0,1-.234.149.669.669,0,0,1-.54,0,.82.82,0,0,1-.234-.149.72.72,0,0,1,0-1.008A.82.82,0,0,1,6.121,2.3a.651.651,0,0,1,.54,0A.82.82,0,0,1,6.9,2.45a.72.72,0,0,1,0,1.008Z" transform="translate(2.13 6.987)" fill="#fff" />
                            </g>
                        </g>
                    </svg></span>
                        <span className="nav-sidemenu-text">
                            Projects
                        </span>
                    </a>
                    </li>
                    <li><a href="/user-management"><span className="nav-sidemenu-icon"> <svg xmlns="http://www.w3.org/2000/svg" id="vuesax_bold_profile-2user" data-name="vuesax/bold/profile-2user" width="16.845" height="16.845" viewBox="0 0 16.845 16.845">
                        <g id="profile-2user">
                            <path id="Vector" d="M3.334,0A3.331,3.331,0,0,0,3.25,6.661a.566.566,0,0,1,.154,0h.049A3.331,3.331,0,0,0,3.334,0Z" transform="translate(2.983 1.404)" fill="rgba(255,255,255,0.6)" />
                            <path id="Vector-2" data-name="Vector" d="M8.507.979a6.969,6.969,0,0,0-7.124,0A2.771,2.771,0,0,0,0,3.246,2.747,2.747,0,0,0,1.376,5.5a6.485,6.485,0,0,0,3.566.99A6.485,6.485,0,0,0,8.507,5.5,2.769,2.769,0,0,0,9.883,3.232,2.764,2.764,0,0,0,8.507.979Z" transform="translate(1.376 8.953)" fill="rgba(255,255,255,0.6)" />
                            <path id="Vector-3" data-name="Vector" d="M4.127,2.3a2.512,2.512,0,0,1-2.2,2.716H1.9a.328.328,0,0,0-.119.014A2.518,2.518,0,0,1,0,4.452,3.212,3.212,0,0,0,1.053,1.785,3.257,3.257,0,0,0,.512.255,2.52,2.52,0,0,1,4.127,2.3Z" transform="translate(9.904 2.847)" fill="rgba(255,255,255,0.6)" />
                            <path id="Vector-4" data-name="Vector" d="M5.615,2.871a2.138,2.138,0,0,1-1.221,1.67,4.954,4.954,0,0,1-2.464.547,2.505,2.505,0,0,0,.856-1.628A2.765,2.765,0,0,0,1.614,1.088,5.794,5.794,0,0,0,0,.2a5.486,5.486,0,0,1,4.7.821A2.133,2.133,0,0,1,5.615,2.871Z" transform="translate(9.819 8.773)" fill="rgba(255,255,255,0.6)" />
                            <path id="Vector-5" data-name="Vector" d="M0,0H16.845V16.845H0Z" transform="translate(16.845 16.845) rotate(180)" fill="none" opacity="0" />
                        </g>
                    </svg></span>
                        <span className="nav-sidemenu-text">
                            Users
                        </span>
                    </a></li>
                    <li>
                        <a href="javascript:void(0)">
                            <span className="nav-sidemenu-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14.642" height="14.642" viewBox="0 0 14.642 14.642">
                                <g id="vuesax_bold_search-normal" data-name="vuesax/bold/search-normal" transform="translate(-428 -188)">
                                    <g id="search-normal" transform="translate(428 188)">
                                        <path id="Vector" d="M11.591,5.8A5.8,5.8,0,1,1,5.8,0,5.8,5.8,0,0,1,11.591,5.8Z" transform="translate(1.22 1.22)" fill="rgba(255,255,255,0.6)" />
                                        <path id="Vector-2" data-name="Vector" d="M1.557,1.984a.425.425,0,0,1-.3-.122L.124.728a.431.431,0,0,1,0-.6.431.431,0,0,1,.6,0L1.862,1.258a.431.431,0,0,1,0,.6A.45.45,0,0,1,1.557,1.984Z" transform="translate(11.437 11.437)" fill="rgba(255,255,255,0.6)" />
                                        <path id="Vector-3" data-name="Vector" d="M0,0H14.642V14.642H0Z" transform="translate(14.642 14.642) rotate(180)" fill="none" opacity="0" />
                                    </g>
                                </g>
                            </svg>
                            </span> <span className="nav-sidemenu-text">
                                Find
                            </span>
                        </a></li>
                    <li><a href="javascript:void(0)"><span className="nav-sidemenu-icon"><svg xmlns="http://www.w3.org/2000/svg" width="15.156" height="15.156" viewBox="0 0 15.156 15.156">
                        <g id="vuesax_bold_export" data-name="vuesax/bold/export" transform="translate(-300 -508)">
                            <g id="export" transform="translate(300 508)">
                                <path id="Vector" d="M8.961,0H3.669A3.37,3.37,0,0,0,0,3.669V8.955A3.372,3.372,0,0,0,3.669,12.63H8.955a3.37,3.37,0,0,0,3.669-3.669V3.669A3.363,3.363,0,0,0,8.961,0Zm.669,6.524a.474.474,0,0,1-.947,0V4.616L3.808,9.492a.473.473,0,0,1-.669,0,.476.476,0,0,1,0-.669L8.014,3.947H6.107a.474.474,0,0,1,0-.947h3.05a.477.477,0,0,1,.474.474Z" transform="translate(1.263 1.263)" fill="#a5a5a6" />
                                <path id="Vector-2" data-name="Vector" d="M0,0H15.156V15.156H0Z" transform="translate(15.156 15.156) rotate(180)" fill="none" opacity="0" />
                            </g>
                        </g>
                    </svg></span>
                        <span className="nav-sidemenu-text">
                            Inventory
                        </span>
                    </a></li>
                    <li><a href="javascript:void(0)"><span className="nav-sidemenu-icon"><svg xmlns="http://www.w3.org/2000/svg" id="Group_78811" data-name="Group 78811" width="16.266" height="16.266" viewBox="0 0 16.266 16.266">
                        <g id="vuesax_bold_setting" data-name="vuesax/bold/setting">
                            <g id="setting">
                                <path id="Vector" d="M10.919,2.316,7.415.29a2.614,2.614,0,0,0-2.393,0L1.484,2.33C.081,3.279,0,3.421,0,4.932v3.68c0,1.511.081,1.661,1.511,2.623l3.5,2.027a2.437,2.437,0,0,0,1.2.291,2.393,2.393,0,0,0,1.193-.291l3.538-2.04c1.4-.949,1.484-1.091,1.484-2.6V4.932C12.43,3.421,12.349,3.279,10.919,2.316Zm-4.7,6.662a2.2,2.2,0,1,1,2.2-2.2A2.207,2.207,0,0,1,6.215,8.979Z" transform="translate(1.918 1.357)" fill="rgba(255,255,255,0.6)" />
                                <path id="Vector-2" data-name="Vector" d="M0,0H16.266V16.266H0Z" transform="translate(16.266 16.266) rotate(180)" fill="none" opacity="0" />
                            </g>
                        </g>
                    </svg></span>
                        <span className="nav-sidemenu-text">
                            Settings
                        </span>
                    </a></li>
                </ul>
                <div className="profile-detail">
                    <div className="profile-detail-in">
                        <Image src={userImage} alt="user_avtar" />
                        <span className="prof-detail">
                            <p>Emily Clark</p>
                            <span>Administrator</span>
                        </span>
                    </div>
                    <div className="logout-button">
                        <ul>
                            <li>
                                <a href="/login">
                                    <span className="nav-sidemenu-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                        id="vuesax_bulk_logout" data-name="vuesax/bulk/logout" width="16.172" height="17.33"
                                        viewBox="0 0 16.172 17.33">
                                        <g id="logout">
                                            <path id="Subtraction_3" data-name="Subtraction 3"
                                                d="M5.628,14.445H3.759A3.492,3.492,0,0,1,0,10.681V7.761H4.517a.54.54,0,0,0,0-1.08H0V3.759A3.488,3.488,0,0,1,3.759,0H5.633A3.754,3.754,0,0,1,8.379,1.015a3.752,3.752,0,0,1,1,2.744v6.928A3.485,3.485,0,0,1,5.628,14.445Z"
                                                transform="translate(5.339 1.443)" fill="rgba(255,255,255,0.6)" />
                                            <path id="Vector" d="M0,0H16.172V17.33H0Z" fill="none" opacity="0" />
                                            <path id="Vector-2" data-name="Vector"
                                                d="M2.4.162.147,2.581a.573.573,0,0,0,0,.765L2.4,5.766a.485.485,0,0,0,.714,0,.573.573,0,0,0,0-.765L1.723,3.506H4.756c.276,0,.091-.241.091-.537s.185-.547-.091-.547H1.723L3.118.928A.556.556,0,0,0,3.266.545.543.543,0,0,0,3.118.162.474.474,0,0,0,2.4.162Z"
                                                transform="translate(1.35 5.704)" fill="rgba(255,255,255,0.6)" />
                                        </g>
                                    </svg></span> <span className="nav-sidemenu-text">Logout</span> </a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>

        </aside>
    )
}

export default Sidebar;