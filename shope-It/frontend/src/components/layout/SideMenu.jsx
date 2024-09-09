import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const SideMenu = () => {
  const menuItems = [
    {
      name: "Profile",
      url: "/me/profile",
      icon: "fas fa-user",
    },
    {
      name: "Update Profile",
      url: "/me/update_profile",
      icon: "fas fa-user",
    },
    {
      name: "Upload Avatar",
      url: "/me/upload_avatar",
      icon: "fas fa-user-circle",
    },
    {
      name: "Update Password",
      url: "/me/update_password",
      icon: "fas fa-lock",
    },
  ];
  const location = useLocation();

  const [activeMenuItem, setActiveMenuItem] = useState(location.pathname); //location.pathname it will give me http://localhost:3000/me/profile(it will give those path that active that time(clicked) )

  const handleMenuItemClick = (menuItemUrl) => {
    setActiveMenuItem(menuItemUrl);
  };
  return (
    <div className="list-group mt-5 pl-4">
      {menuItems?.map((menuItem, index) => (
        <Link
          key={index}
          to={menuItem.url}
          className={`fw-bold list-group-item list-group-item-action ${
            activeMenuItem.includes(menuItem.url) ? "active" : ""
          }`}
          onClick={() => handleMenuItemClick(menuItem.url)}
          aria-current={
            activeMenuItem.includes(menuItem.url) ? "true" : "false"
          }
        >
          <i className={`${menuItem.icon} fa-fw pe-2`}></i> {menuItem.name}
        </Link>
      ))}
    </div>
  );
};

export default SideMenu;
// aria-current  it represent the active current element
/*
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sidebar</title>
    <link rel="stylesheet" href="../index.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="list-group mt-5 pl-4">
      <a
        href="menu-item-url-1"
        class="fw-bold list-group-item list-group-item-action"
      >
        <i class="menu-item-icon-1 fa-fw pe-2"></i> Menu Item 1
      </a>
      <a
        href="menu-item-url-2"
        class="fw-bold list-group-item list-group-item-action active"
        aria-current="true"
      >
        <i class="menu-item-icon-2 fa-fw pe-2"></i> Menu Item 2
      </a>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>

    <script src="https://kit.fontawesome.com/9edb65c86a.js"></script>
  </body>
</html>


*/
