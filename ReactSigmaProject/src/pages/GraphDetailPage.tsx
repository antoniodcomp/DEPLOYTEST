export const GraphDetailPage = () => {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../../css/style.css" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />

        <title>Ludi Spiel</title>
      </head>
      <body>
        <header>
          <section className="faça-mais">
            <div className="container">
              <h3>Grafo do Open Spiel</h3>
              <p>
                O grafo direcionado representa o repositório público do open
                spiel, onde os nós são os arquivos c++ e python e as arestas são
                tais que se um arquivo A possui dependências em outros arquivos,
                para cada dependência haverá uma aresta de A até esses arquivos.
              </p>
            </div>
          </section>

          <section className="faça-mais">
            <div className="container">
              <h3>Como foi feito</h3>
              <p>
                O grafo foi criado a partir de um JSON dos arquivos do Open
                Spiel. JSON este que foi gerado um script que percorreu todo o
                repositório. A seguir uma parte desse json.
              </p>
              <pre>
                <code>
                  {`[
    {
        "path": "\\action_view.cc",
        "nome": "action_view.cc",
        "dependencias": [
            "open_spiel/action_view.h",
            "vector",
            "open_spiel/spiel.h",
            "open_spiel/spiel_utils.h"
        ]
    },
    {
        "path": "\\action_view.h",
        "nome": "action_view.h",
        "dependencias": [
            "vector",
            "open_spiel/spiel.h"
        ]
    },
    {
        "path": "\\canonical_game_strings.cc",
        "nome": "canonical_game_strings.cc",
        "dependencias": [
            "open_spiel/canonical_game_strings.h",
            "string"
        ]
    },
    {
        "path": "\\canonical_game_strings.h",
        "nome": "canonical_game_strings.h",
        "dependencias": [
            "string"
        ]
    },
    {
        "path": "\\game_parameters.cc",
        "nome": "game_parameters.cc",
        "dependencias": [
            "open_spiel/game_parameters.h",
            "list",
            "map",
            "string",
            "utility",
            "vector",
            "open_spiel/spiel_utils.h"
        ]
    },
    {
        "path": "\\game_parameters.h",
        "nome": "game_parameters.h",
        "dependencias": [
            "iostream",
            "map",
            "memory",
            "string",
            "utility",
            "open_spiel/spiel_utils.h"
        ]
    },
    {
        "path": "\\matrix_game.cc",
        "nome": "matrix_game.cc",
        "dependencias": [
            "open_spiel/matrix_game.h",
            "memory",
            "string",
            "vector",
            "open_spiel/spiel.h",
            "open_spiel/spiel_utils.h"
        ]
    },
    {
        "path": "\\matrix_game.h",
        "nome": "matrix_game.h",
        "dependencias": [
            "algorithm",
            "iterator",
            "memory",
            "numeric",
            "string",
            "vector",
            "open_spiel/normal_form_game.h",
            "open_spiel/spiel.h",
            "open_spiel/spiel_utils.h"
        ]
    }]`}
                </code>
              </pre>

              <p>
                Para fazer o download do JSON completo com todos os arquivos do
                open spiel clique aqui:{" "}
                <a href="../../OpenSpielData.json" download>
                  OpenSpielData.json
                </a>
              </p>
            </div>
          </section>
        </header>
      </body>
    </html>
  );
};
