import { Graph } from '../../../jatl/graph/directedGraph.js'

let g = new Graph(10);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(5, 4);
g.addEdge(8, 4);
g.addEdge(9, 4);
g.showGraph();
g.deletEdge(7, 4);
g.deletEdge(0, 1);
console.log('');
console.log('');
console.log('Grafo una vez borrado las conexiones');
g.showGraph();
g.search(2)