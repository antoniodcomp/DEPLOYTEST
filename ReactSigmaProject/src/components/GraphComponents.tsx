import React, { useEffect, FC } from "react";
import Graph  from "graphology";
import { SigmaContainer, useLoadGraph,  useRegisterEvents, useSigma } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

const sigmaStyle = { height: "800px", width: "100%", top:"-60px"};
const sigmaSettings = { allowInvalidContainer: true, defaultEdgeType: "arrow" };
const defaultEdgeColor = '#9099DB';
const defaultSize = 1;
const HilightedEdgeColor = '#2F386E';
let SelectedNode = "";

interface GraphProps {
  graph: Graph;
}

const LoadGraph: React.FC<GraphProps> = ( {graph} ) => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    loadGraph(graph);
  }, [loadGraph]);

  return null;
};


// Componente que escuta os eventos
const GraphEvents = () => {
  const registerEvents = useRegisterEvents();
  const sigma = useSigma();
  const graph = sigma.getGraph();

  //Mouse entra no nó: Destaca todas as arestas associadas ao nó
  const handleEnterNode = (event: any) => {
    const node = event.node;
    if (SelectedNode != "") {
      return;
    }
    graph.updateEachEdgeAttributes((_edge, attr) => {
      return {
        ...attr,
        hidden: true
      };
    });
    graph.forEachEdge(node, (edge) => {
      graph.updateEdgeAttributes(edge, attr => {
        return {
          ...attr,
          color: HilightedEdgeColor,
          size: 2,
          hidden: false
          
        };
      });
    });
    sigma.refresh();
  } 

  //Mouse sai do nó: retorna todas as arestas ao estado normal
  const handleLeaveNode = () => {
    if (SelectedNode != "") {
      return;
    }
    graph.updateEachEdgeAttributes((_edge, attr) => {
      return {
        ...attr,
        color: defaultEdgeColor,
        size: defaultSize,
        hidden: false
      };
    });
    sigma.refresh();
  } 

  //Mouse clica no nó: Destaca todas as arestas associadas ao nó de forma permanente
  const handleClickNode = (event: any) => {
    const node = event.node;
    if (node === SelectedNode) {
      SelectedNode = "";
      graph.updateEachEdgeAttributes((_edge, attr) => {
        return {
          ...attr,
          color: defaultEdgeColor,
          size: defaultSize,
          hidden: false
        };
      });
    }
    else {
      SelectedNode = node;
      graph.updateEachEdgeAttributes((_edge, attr) => {
        return {
          ...attr,
          hidden: true
        };
      });

      graph.forEachEdge(node, (edge) => {
        graph.updateEdgeAttributes(edge, attr => {
          return {
            ...attr,
            color: HilightedEdgeColor,
            size: 2,
            hidden: false
          };
        });
    });
    }
    sigma.refresh();
  }

  //mouse clica duas vezes no nó: Abre o link do código do nó em uma nova guia
  const handleDoubleClickNode = (event: any) => {
    const node = event.node;
    const path = graph.getNodeAttribute(node, 'path');
    console.log(path);
    window.open("https://github.com/google-deepmind/open_spiel/blob/master/open_spiel/".concat(path));
    sigma.refresh();
  }

  //mouse clica na tela
  const handleClickStage = () => {
    SelectedNode = "";
    graph.updateEachEdgeAttributes((_edge, attr) => {
      return {
        ...attr,
        color: defaultEdgeColor,
        size: defaultSize,
        hidden: false
      };
    });
    sigma.refresh();
  }

  useEffect(() => {
    registerEvents({
      // node events
      enterNode: handleEnterNode,
      leaveNode: handleLeaveNode,
      clickNode: handleClickNode,
      doubleClickNode: handleDoubleClickNode,

      //stage events
      clickStage: handleClickStage,
    });
  }, [registerEvents, sigma, graph]);
  return null;
};

export const DisplayGraph: FC<GraphProps> = ({graph}) => {
  return (
    <SigmaContainer style={sigmaStyle} settings={sigmaSettings}>
      <LoadGraph graph={graph} />
      <GraphEvents />
    </SigmaContainer>
  );
};
