import React, { useState, useEffect } from 'react';
import './stylesheets/map.css';
import performDijkstra from './functions/dijkstra.js';

const Map = () => {
  const [nodes, setNodes] = useState([]);
  const [sourceNode, setSourceNode] = useState(null);
  const [destinationNode, setDestinationNode] = useState(null);
  const [shortestPath, setShortestPath] = useState([]);

  const handleClick = (nodeId) => {
    if (!sourceNode) {
      setSourceNode(nodeId);
    } else if (!destinationNode && nodeId !== sourceNode) {
      setDestinationNode((prevDestinationNode) => {
        console.log(sourceNode, nodeId);
        const path = performDijkstra(sourceNode, nodeId);
        setShortestPath(path);
        return nodeId;
      });
    } else {
      setSourceNode(null);
      setDestinationNode(null);
      setShortestPath([]);
    }
  };
  

  useEffect(() => {
    const nodesData = [
      { id: "Thane" },
      { id: "Ghatkopar" },
      { id: "Dadar" },
      { id: "Kurla" },
      { id: "Vadala" },
      { id: "Churchgate" },
      { id: "Mahim" },
      { id: "Bandra" },
      { id: "Masjid" },
      { id: "Andheri" },
      { id: "Vikhroli" },
      { id: "Borivali" },
      { id: "Airoli"},
      { id: "Ghansoli"},
      { id: "Turbhe"},
      { id: "Vashi"},
      {id : "Juinagar"},
      {id : "Belapur"},
      {id : "Panvel"},
      {id: "CSMT"},
      {id: "Marine"}
  ];


    setNodes(nodesData);
  }, []);

  const nodeClick = (nodeId) => {
    handleClick(nodeId);
  };

  return (

    <div className="graph-container">
      {nodes.map((node) => (
        <div key={node.id}>
          <div
            id={node.id}
            className={`graph-node ${
              node.id === sourceNode ? 'source' : ''
            } ${node.id === destinationNode ? 'destination' : ''} ${
              shortestPath.includes(node.id) ? 'shortest-path' : ''
            }`}
            onClick={() => nodeClick(node.id)}
          >
            {node.id}
          </div>
        </div>
      ))}
      </div>
    
  );
};

export default Map;