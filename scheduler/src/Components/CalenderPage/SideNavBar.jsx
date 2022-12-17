import React, { useState } from "react";
import "./SideNavBar.css";
import { Box } from "@chakra-ui/react";
import UserPage from "./userPage";

const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Dashboard",
      icon: "icons/grid.svg",
    },
    {
      text: "Notification",
      icon: "icons/notification.svg",
    },
    {
      text: "Inbox",
      icon: "icons/inbox.svg",
    },
    {
      text: "Admin Profile",
      icon: "icons/user.svg",
    },
    {
      text: "Calender",
      icon: "icons/calender.svg",
    },
    {
      text: "My Work",
      icon: "icons/mywork.svg",
    },
    {
      text: "Favorites",
      icon: "icons/favorites.svg",
    },
    {
      text: "Help",
      icon: "icons/help.svg",
    },
  ];
  return (
    <>
      <div className="email-message overlay">
        <p>
          Please confirm your email address: user@gmail.com
          <a href="">Resend email</a>
        </p>
      </div>
      <Box  display="flex">
        <Box  width="10%">
          <div
            className={
              isExpanded
                ? "side-nav-container"
                : "side-nav-container side-nav-container-NX"
            }
          >
            <div className="nav-upper">
              <div className="nav-heading">
                {isExpanded && (
                  <div className="nav-brand">
                    <img
                      className="logo-icon-back"
                      src="icons/logo1.png"
                      alt=""
                      srcset=""
                    />
                  </div>
                )}
                <button
                  className={
                    isExpanded
                      ? "hamburger hamburger-in"
                      : "hamburger hamburger-out"
                  }
                  onClick={() => setExpendState(!isExpanded)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>

              {/* ----------------------- Menu Section ------------------------------*/}

              <div className="nav-menu">
                {menuItems.map(({ text, icon }) => (
                  <a
                    className={
                      isExpanded ? "menu-item" : "menu-item menu-item-NX"
                    }
                    href="#"
                  >
                    <img
                      className="menu-item-icon"
                      src={icon}
                      alt=""
                      srcset=""
                    />
                    {isExpanded && <p>{text}</p>}
                    {!isExpanded && <div className="tooltip">{text}</div>}
                  </a>
                ))}
              </div>
            </div>

            {/* -------------- Footer Section of Side Navbar ------------------------------*/}

            <div className="nav-footer">
              {isExpanded && (
                <div className="nav-details">
                  <img
                    className="nav-footer-avatar"
                    src="icons/admin-avatar.svg"
                    alt=""
                    srcset=""
                  />
                  <div className="nav-footer-info">
                    <p className="nav-footer-user-name">Scheduler</p>
                    <p className="nav-footer-user-position">Store Admin</p>
                  </div>
                </div>
              )}
              <img
                className="logout-icon"
                src="icons/logout.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </Box>
        <Box width="90%">
        <UserPage/>
        </Box>
       
      </Box>
    </>
  );
};

export default SideNavBar;
