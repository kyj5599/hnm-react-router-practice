import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate, logout }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const goToHome = () => {
    navigate("/");
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  // const search = (event) => {
  //   if (event.key == "Enter") {
  //     // 입력한 검색어를 읽어와서
  //     let keyword = event.target.value;
  //     // console.log("keyword", keyword);
  //     // url을 바꿔준다
  //     navigate(`/?q=${keyword}`);
  //   }
  // };

  const search = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };

  return (
    <div>
      <div className="navbar-header">
        <div className="hamburger-menu" onClick={toggleSideMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="nav-section">
          <img
            width={100}
            src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
            onClick={goToHome}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="auth-section">
          {authenticate ? (
            <div className="login-button" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              <div>로그아웃</div>
            </div>
          ) : (
            <div className="login-button" onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} />
              <div>로그인</div>
            </div>
          )}
        </div>
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="제품검색"
            onKeyDown={(event) => search(event)}
          />
        </div>
      </div>

      {/* 사이드 메뉴 */}
      <div className={`side-menu ${isSideMenuOpen ? "open" : ""}`}>
        <div className="side-menu-header">
          <h3>메뉴</h3>
          <button className="close-button" onClick={closeSideMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <ul className="side-menu-list">
          {menuList.map((menu) => (
            <li key={menu} onClick={closeSideMenu}>
              {menu}
            </li>
          ))}
        </ul>
        <div className="side-menu-search">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="제품검색"
            onKeyDown={(event) => {
              search(event);
              closeSideMenu();
            }}
          />
        </div>
      </div>

      {/* 사이드 메뉴 오버레이 */}
      {isSideMenuOpen && (
        <div className="side-menu-overlay" onClick={closeSideMenu}></div>
      )}
    </div>
  );
};

export default Navbar;
