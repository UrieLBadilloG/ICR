import React, { useContext, useRef, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLogo,
    SSearch,
    SSearchIcon,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./styles";

import { logoSVG } from "../../assets";

import {
    AiOutlineApartment,
    AiOutlineHome,
    AiOutlineLeft,
    AiOutlineSearch,
    AiOutlineSetting,
} from "react-icons/ai";
import { TbTool } from "react-icons/tb";
import { GiDeliveryDrone } from "react-icons/gi";
import { FaRobot, FaSatellite } from "react-icons/fa";
import { MdLogout, MdOutlineAnalytics, MdBiotech } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
    const searchRef = useRef(null);
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionality
        }
    };

    return (
        <SSidebar isOpen={sidebarOpen} >
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logoSVG} alt="logo" />
            </SLogo>    
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                    <br/>
                            <br/>
                            <br/>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                               
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome />,
        to: "/",
    },
    {
        label: "Services",
        icon: <TbTool />,
        to: "/services",
    },
    {
        label: "Delivery",
        icon: <GiDeliveryDrone />,
        to: "/delivery",
    },
    {
        label: "Autonomus",
        icon: <FaRobot />,
        to: "/autonomus",
    },
    {
        label: "Biology",
        icon: <MdBiotech />,
        to: "/biology",
    },
    {
        label: "Test",
        icon: <FaSatellite />,
        to: "/test",
    },
];


export default Sidebar;
