import "@react-sigma/core/lib/react-sigma.min.css";

interface GraphNodeData {
    //As informacoes dos nós do grafo
    nome: string;
    path: string;
    dependencias: string[];
  }

export async function ReadJSON(JSONPath: string): Promise<GraphNodeData[]> {
    //lê o arquivo json e retorna uma lista das informacoes dos nós
    try {
      const request = await fetch(JSONPath);
      const fileData = request.json();
      return fileData;
    } catch (error) {
      console.log("Erro na leitura do arquivo json");
      return [];
    }
  }
  
  export async function getGraphMap(
    GraphDataPromisse: Promise<GraphNodeData[]>
  ): Promise<Map<string, GraphNodeData>> {
    //Converte a lista de informações dos nós em um map onde a chave é o nome dos arquivos
    const GraphData = await GraphDataPromisse;
    const map = new Map<string, GraphNodeData>();
    GraphData.forEach((item) => {
      map.set(item.path, item);
    });
    return map;
  }
  