import { DisplayGraph } from "../components/GraphComponents";
import { useState } from "react";
import { Link } from "react-router-dom";
import {graphCPP}  from "../components/Grafos";

export const GraphPageCPP = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../../css/GraphPage.css" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />

        <title>Ludi Spiel</title>
      </head>
      <body>
        <nav className={`sidebar ${sidebarActive ? "active" : ""}`}>
          <header>
            <div className="image-text">
              <span className="image">
                <i className="bx bxl-graphql"></i>
              </span>

              <div className="text header-text">
                <span className="name">Documentação</span>
                <span className="profession">Cartográfica</span>
              </div>
            </div>

            <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
          </header>

          {/*<!--Menu links-->*/}

          <div className="menu-content">
            <ul className="menu-items">

              <Link to="/GraphPagePython">
                <li className="Change graph">
                  <div className="submenu-item">
                    <i className="bx bx-transfer" style={{ color: '#FFFFFF' }}></i>
                    <span className="links_name">Change Graph</span>
                    <i className="bx bx-chevron-right" id="chevron"></i>
                  </div>
                </li>
              </Link>

              <li className="item">
                <div className="submenu-item">
                  <i className="bx bx-grid-alt" style={{ color: '#800080' }}></i>
                  <span className="links_name">Root</span>
                  <i className="bx bx-chevron-right" id="chevron"></i>
                </div>
              </li>

              <li className="item">
                <div className="submenu-item">
                  <i className="bx bx-code-alt" style={{ color: '#0000FF' }}></i>
                  <span className="links_name">Algorithms</span>
                  <i className="bx bx-chevron-right" id="chevron"></i>
                </div>
              </li>

              <li className="item">
                <div className="submenu-item">
                  <i className="bx bx-joystick-alt" style={{ color: '#FF0000' }}></i>
                  <span className="links_name">Game Transforms</span>
                  <i className="bx bx-chevron-right" id="chevron"></i>
                </div>
              </li>

              <li className="item">
                <div className="submenu-item">
                  <i className="bx bx-bot" style={{ color: '#00FF00' }}></i>
                  <span className="links_name">Bots</span>
                  <i className="bx bx-chevron-right" id="chevron"></i>
                </div>
              </li>

              <li className="item">
                <div className="submenu-item">
                  <i className="bx bx-chalkboard" style={{ color: '#ffa500' }}></i>
                  <span className="links_name">Examples</span>
                  <i className="bx bx-chevron-right" id="chevron"></i>
                </div>
              </li>

              <li className="item">
                <div className="submenu-item">
                  <i className="bx bx-code" style={{ color: '#FFC0CB' }}></i>
                  <span className="links_name">Tests</span>
                  <i className="bx bx-chevron-right" id="chevron"></i>
                </div>
              </li>

              <li className="item">
                <div className="submenu-item">
                  <i className="bx bx-wrench" style={{ color: '#ffff00' }}></i>
                  <span className="links_name">Utils</span>
                  <i className="bx bx-chevron-right" id="chevron"></i>
                </div>
              </li>

              <li className="item">
                <div className="submenu-item">
                  <i className="bx bx-joystick" style={{ color: '#00FFFF' }}></i>
                  <span className="links_name">Games</span>
                  <i className="bx bx-chevron-right" id="chevron"></i>
                </div>
              </li>

              <Link to="/GraphDetailPage">
                <li className="item">
                  <div className="submenu-item">
                    <i className="bx bx-search-alt"></i>
                    <span className="links_name">Sobre</span>
                    <i className="bx bx-chevron-right" id="chevron"></i>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </nav>


      <section className="principal">
        <DisplayGraph graph={graphCPP} />
      </section> 

      </body>
    </html>
  );
};
