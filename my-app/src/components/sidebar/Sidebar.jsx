import React, { useState } from "react";
import "./sidebar.css";
import logo from "../../assets/me.png";

const navTips = [
  "ここから見ましょう",
  "シンハはどんな人なの？",
  "ここは私の作品です",
  "Let‘s Party🎉"
];

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <aside className="aside">
      <a href="#home" className="nav_logo">
        <img src={logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            {[
              { href: "#home", icon: "icon-home", tip: navTips[0] },
              { href: "#about", icon: "icon-user-following", tip: navTips[1] },
              { href: "#portfolio", icon: "icon-layers", tip: navTips[2] },
              { href: "#contact", icon: "icon-bubble", tip: navTips[3] }
            ].map((item, idx) => (
              <li
                className="nav_item"
                key={item.href}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{ position: "relative" }}
              >
                <a href={item.href} className="nav_link">
                  <i className={item.icon}></i>
                </a>
                {hovered === idx && (
                  <span className="nav_tip_bubble">{item.tip}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="nav_footer">
        <span className="copyright">&copy; 2024～2025.</span>
      </div>
    </aside>
  );
};

export default Sidebar;