export const performDijkstra = (source, destination) => {

    const adjacencyMatrix = {
                 //T  G  D  K  Vd C  Mh Ba Mj Ad Vi Bo Ai Gh T  Va  J Be P  Cs  Mar
      "Thane":    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      "Ghatkopar":[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "Dadar":    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      "Kurla":    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      "Vadala":   [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    "Churchgate": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    "Mahim"     : [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "Bandra"  : [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "Masjid"  : [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      "Andheri" : [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "Vikhroli": [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "Borivali": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "Airoli" :  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      "Ghansoli": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
      "Turbhe":   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
      "Vashi":    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
      "Juinagar": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0],
      "Belapur" : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
      "Panvel"  : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
       "CSMT"   : [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       "Marine" : [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  
    const nodes = [
      "Thane",
      "Ghatkopar",
      "Dadar",
      "Kurla",
      "Vadala",
      "Churchgate",
      "Mahim",
      "Bandra",
      "Masjid",
      "Andheri",
      "Vikhroli",
      "Borivali",
      "Airoli",
      "Ghansoli",
      "Turbhe",
      "Vashi",
      "Juinagar",
      "Belapur",
      "Panvel",
      "CSMT",
      "Marine"
    ];
     // Representing nodes as numbers
  
    const nodeIndices = {};
    nodes.forEach((node, index) => {
      nodeIndices[node] = index;
    });
  
    const visited = {};
    const distance = {};
    const previous = {};
  
    nodes.forEach((node) => {
      visited[node] = false;
      distance[node] = Infinity;
      previous[node] = null;
    });
  
    distance[source] = 0;
  
    const getNextNode = () => {
      let minDistance = Infinity;
      let nextNode = null;
  
      nodes.forEach((node) => {
        if (!visited[node] && distance[node] < minDistance) {
          minDistance = distance[node];
          nextNode = node;
        }
      });
  
      return nextNode;
    };
  
    while (true) {
      const currentNode = getNextNode();
  
      if (currentNode === null) {
        break;
      }
  
      visited[currentNode] = true;
  
      for (let i = 0; i < nodes.length; i++) {
        const neighbor = nodes[i];
        const weight = adjacencyMatrix[currentNode][i];
  
        if (!visited[neighbor] && weight > 0) {
          const tentativeDistance = distance[currentNode] + weight;
  
          if (tentativeDistance < distance[neighbor]) {
            distance[neighbor] = tentativeDistance;
            previous[neighbor] = currentNode;
          }
        }
      }
    }
  
  
    const path = [];
    let current = destination;
    while (current !== null) {
      path.unshift(current);
      current = previous[current];
    }
  
    console.log('Shortest Path:', path);
    return path
  };
  
  export default performDijkstra