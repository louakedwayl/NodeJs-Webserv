import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello While");
});

server.listen(8080, () => {
  console.log("Serveur lancé sur http://localhost:8080");
});

