const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors()); // Добавляем поддержку CORS
server.use(middlewares);
server.use(router);

server.listen(5000, () => {
  console.log("JSON Server is running on http://localhost:5000");
}).on('error', (err) => {
  console.error('Error starting server:', err);
});
