// Graphs

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(ver1, ver2) {
    this.adjacencyList[ver1].push(ver2);
    this.adjacencyList[ver2].push(ver1);
  }

  removeEdge(ver1, ver2) {
    // Solution #1
    // ===================
    this.adjacencyList[ver1] = this.adjacencyList[ver1].filter(
      (v) => v !== ver2
    );
    this.adjacencyList[ver2] = this.adjacencyList[ver2].filter(
      (v) => v !== ver1
    );
    // Solution #2
    // ===================
    // if (!this.adjacencyList[ver1] && !this.adjacencyList[ver2])
    //   return "Not found in graph";

    // this.adjacencyList[ver1].find((el, i) => {
    //   el === ver2 ? this.adjacencyList[ver1].splice(i, 1) : "Not Found";
    // });

    // this.adjacencyList[ver2].find((el, i) => {
    //   el === ver1 ? this.adjacencyList[ver2].splice(i, 1) : "Not Found";
    // });
  }

  removeVertex(vertex) {
    // Solution #1
    // ===================
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    // Solution #2
    // ===================
    // if (!(vertex in this.adjacencyList)) return false;
    // for (const item in this.adjacencyList) {
    //   this.adjacencyList[item].find((el, i) => {
    //     el === vertex ? this.adjacencyList[item].splice(i, 1) : "";
    //   });
    // }
    // delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Dales");
g.addVertex("Aspen");

g.addEdge("Tokyo", "Dales");
g.addEdge("Aspen", "Tokyo");
g.addEdge("Aspen", "Dales");

console.log(g.adjacencyList);
console.log(g.removeVertex("Tokyo"));
console.log(g.removeVertex("Dales"));
console.log(g.adjacencyList);
