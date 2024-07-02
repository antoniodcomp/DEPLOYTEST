import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../../css/style.css" />
        <title>Ludi Spiel</title>
      </head>
      <body>
        <header
          style={{
            backgroundImage: "url(../../img/imagem-fundo-site-atualizado.jpg)",
          }}
        >
          <div className="container">
            <nav className="nav-bar">
              <a href="http://www.ludii.co">
                <img src="../../img/ludii.co-logo-parte-cima.png" alt="Logo" />
              </a>
              <ul className="ul">
                <a href="documentation.html" style={{ color: "black" }}>
                  {" "}
                  Sobre
                </a>
              </ul>
            </nav>

            <section className="banner">
              <div className="banner-text">
                <img src="" alt="" />
                <h1>Logo</h1>
                <p>Documentação iterativa do framework OpenSpiel</p>
                <Link to="/GraphPageCPP">
                  <a href="principal.htm" className="btn">
                    {" "}
                    Começar
                  </a>
                </Link>
              </div>
            </section>
          </div>
        </header>

        <section className="faça-mais">
          <div className="container">
            <h3>Facilidade e Flexibilidade</h3>
            <p>
              Um ambiente focado em auxiliar de forma dinâmica desenvolvedores
            </p>
            {/*<!-- cards -->*/}

            <div className="cards">
                <div className="cards-desc">
                  <img
                    src="../../img/icon-grafo (2).png"
                    alt="Grafo do Open Spiel"
                  />
                  <p className="title-card">
                    <strong>Grafo do Open Spiel</strong>
                  </p>
                  <p className="info-card">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugit, deserunt minima perspiciatis, earum, at ipsum quasi
                    debitis architecto quod obcaecati amet eos incidunt unde ut
                    esse beatae officiis vel? Earum.
                  </p>
                </div>

              {/*<!-- cards -->*/}

              <div className="cards-desc">
                <img
                  src="../../img/icon-mapa (2).png"
                  alt="Cartografia Digital"
                />
                <p className="title-card">
                  <strong>Cartografia Digital</strong>
                </p>
                <p className="info-card">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugit, deserunt minima perspiciatis, earum, at ipsum quasi
                  debitis architecto quod obcaecati amet eos incidunt unde ut
                  esse beatae officiis vel? Earum.
                </p>
              </div>

              {/*<!-- cards -->*/}

              <div className="cards-desc">
                <img
                  src="../../img/icon-iteratividade.png"
                  alt="Plataforma Iterativa"
                />
                <p className="title-card">
                  <strong>Documentação iterativa</strong>
                </p>
                <p className="info-card">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugit, deserunt minima perspiciatis, earum, at ipsum quasi
                  debitis architecto quod obcaecati amet eos incidunt unde ut
                  esse beatae officiis vel? Earum.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>Desenvolvido por ludii.co</p>
          </div>
        </footer>
      </body>
    </html>
  );
};
