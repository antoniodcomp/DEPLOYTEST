import Graph  from "graphology";
import "@react-sigma/core/lib/react-sigma.min.css";
import circlepack from "graphology-layout/circlepack";
import { ReadJSON, getGraphMap } from "./JSONReader";

const jsonPath = "../../OpenSpielData.json";
const GraphData = ReadJSON(jsonPath);
const GraphDataMap = await getGraphMap(GraphData);

const defaultEdgeColor = '#9099DB';

interface CustomEdgeAttributes {
    size?: number;
    color?: string;
  }
  
  const defaultEdgeAttributes = {
    //atributos de todas as arestas
    size: 1,
    color: defaultEdgeColor
  };
  
  interface GraphNodeData {
    //As informacoes dos nós do grafo
    nome: string;
    path: string;
    dependencias: string[];
  }

function addNodesFromFolder( 
    folderPath: String,
    graph: Graph,
    graphDataMap: Map<string, GraphNodeData>,
    nodeColor: String,
    addFolders: number // variável para saber se devem ser adicionadas os folders dentro do folder e assim por diante
  ): void {
    graphDataMap.forEach((nodeData: GraphNodeData, path: string) => {
      const nome = nodeData.nome;
      const nodeFolderPath = path.substring(0, path.length - nome.length);
  
      if (addFolders === 1) {
        if (nodeFolderPath.substring(0, folderPath.length) === folderPath) {
            graph.addNode(path, {
              x: 0,
              y: 0,
              size: 10,
              label: nome,
              color: nodeColor,
              path: path,
              nodeWeight: 0,
            });
          }
      }
      
      else {
        if (nodeFolderPath === folderPath) {
          graph.addNode(path, {
            x: 0,
            y: 0,
            size: 10,
            label: nome,
            color: nodeColor,
            path: path,
            nodeWeight: 0,
          });
        }
      }
    });
  
    circlepack.assign(graph);
  }
  
  
  function addEdges(graph: Graph, graphDataMap: Map<string, GraphNodeData>): void {
    graphDataMap.forEach((nodeData: GraphNodeData, path: string) => {
      if (graph.hasNode(path)) { //se o nó existe no grafo
        const dependencias = nodeData.dependencias;
          dependencias.forEach((dependencia: String) => {
            if (graph.hasNode(dependencia)) { //se o nó da dependência existe no grafo
              graph.addDirectedEdge(path, dependencia, defaultEdgeAttributes as CustomEdgeAttributes);
              graph.updateNodeAttributes(dependencia, atrr => {
                return {
                  ...atrr,
                  nodeWeight: graph.getNodeAttribute(dependencia, 'nodeWeight') + 0.15
                }
              })
            }
          });
        }
    });
  }

  
  function addEdgesPython(graph: Graph, graphDataMap: Map<string, GraphNodeData>): void {

    console.log("opa");
    if (graph.hasNode("python/voting/base")) {
      console.log("existe no grafo");
    }

    graphDataMap.forEach((nodeData: GraphNodeData, path: string) => {
      if (graph.hasNode(path)) { //se o nó existe no grafo
        nodeData.dependencias.forEach((dependencia: String) => {
          if (graph.hasNode(dependencia)) { //se o nó da dependência existe no grafo
            graph.addDirectedEdge(path, dependencia, defaultEdgeAttributes as CustomEdgeAttributes);
            graph.updateNodeAttributes(dependencia, atrr => {
              return {
                ...atrr,
                nodeWeight: graph.getNodeAttribute(dependencia, 'nodeWeight') + 0.5
              }
            })
          }
        });
      }
    });
  }
  
  function changeNodeSizes(graph: Graph): void {
    graph.updateEachNodeAttributes((_node, attr) => {
      return {
        ...attr,
        size: attr.size + attr.nodeWeight
      }
    });
    circlepack.assign(graph);
  }


  export const graphCPP = new Graph({ type: "directed" }); //Grafo dos arquivos c++
  //root
  addNodesFromFolder("open_spiel/", graphCPP, GraphDataMap, "#800080", 0);
  //algoritmos
  addNodesFromFolder("open_spiel/algorithms/", graphCPP, GraphDataMap, "#0000FF", 1);
  //game_transforms
  addNodesFromFolder("open_spiel/game_transforms/", graphCPP, GraphDataMap, "#FF0000", 1);
  //bots
  addNodesFromFolder("open_spiel/bots/", graphCPP, GraphDataMap, "#00FF00", 1);
  //examples
  addNodesFromFolder("open_spiel/examples/", graphCPP, GraphDataMap, "#ffa500", 1);
  //tests
  addNodesFromFolder("open_spiel/tests/", graphCPP, GraphDataMap, "#FFC0CB", 1);
  addNodesFromFolder("open_spiel/integration_tests/", graphCPP, GraphDataMap, "#FFC0CB", 1);
  //utils
  addNodesFromFolder("open_spiel/utils/", graphCPP, GraphDataMap, "#ffff00", 1);
  //games
  addNodesFromFolder("open_spiel/games/", graphCPP, GraphDataMap, "#00FFFF", 1)
  //adiciona as arestas
  addEdges(graphCPP, GraphDataMap);
  //muda o tamanho dos nós de acordo com seu peso
  changeNodeSizes(graphCPP);

  export const graphPython = new Graph({ type: "directed" }); //Grafo dos arquivos python
  //root
  addNodesFromFolder("open_spiel/python", graphPython, GraphDataMap, "#800080", 0);
  //evolutionary game theory (egt)
  addNodesFromFolder("open_spiel/python/egt/", graphPython, GraphDataMap, "#FF0000", 1);
  //environments
  addNodesFromFolder("open_spiel/python/environments/", graphPython, GraphDataMap, "#008815", 1);
  //visualizations
  addNodesFromFolder("open_spiel/python/visualizations/", graphPython, GraphDataMap, "#808080", 1);
  //algoritmos
  addNodesFromFolder("open_spiel/python/algorithms/", graphPython, GraphDataMap, "#0000FF", 1);
  //bots
  addNodesFromFolder("open_spiel/python/bots/", graphPython, GraphDataMap, "#00FF00", 1);
  //jax
  addNodesFromFolder("open_spiel/python/jax/", graphPython, GraphDataMap, "#ef07e2", 1);
  //examples
  addNodesFromFolder("open_spiel/python/examples/", graphPython, GraphDataMap, "#ffa500", 1);
  //tests
  addNodesFromFolder("open_spiel/python/tests/", graphPython, GraphDataMap, "#FFC0CB", 1);
  //utils
  addNodesFromFolder("open_spiel/python/utils/", graphPython, GraphDataMap, "#ffff00", 1);
  //pytorch
  addNodesFromFolder("open_spiel/python/pytorch/", graphPython, GraphDataMap, "#DC143C", 1);
  //mfg
  addNodesFromFolder("open_spiel/python/mfg/", graphPython, GraphDataMap, "#0096FF", 1);
  //pybind11
  addNodesFromFolder("open_spiel/python/pybind11/", graphPython, GraphDataMap, "#AA4A44", 1);
  //voting
  addNodesFromFolder("open_spiel/python/voting/", graphPython, GraphDataMap, "#93C572", 1);
  //games
  addNodesFromFolder("open_spiel/python/games/", graphPython, GraphDataMap, "#00FFFF", 1);
  addNodesFromFolder("open_spiel/python/coalitional_games/", graphPython, GraphDataMap, "#00FFFF", 1);
  //adiciona as arestas
  addEdgesPython(graphPython, GraphDataMap);
  //muda o tamanho dos nós de acordo com seu peso
  changeNodeSizes(graphPython);



