const http = require("http");
const fs = require("fs");
const path = require("path");
const routes = require("./routes/recipeRoutes");

const PORT = 5000;

const server = http.createServer((req, res) => {
  const { method, url: reqUrl } = req;

  console.log(`Received request: ${method} ${reqUrl}`); // Log yêu cầu đến

  // Kiểm tra URL và phương thức của yêu cầu, so khớp với các route đã định nghĩa
  const route = routes.find(
    (route) => route.method === method && route.path === reqUrl
  );

  if (route) {
    console.log(`Found route: ${reqUrl}`);
    route.handler(req, res); // Gọi handler của route nếu tìm thấy
  } else {
    console.log(`No handler for: ${reqUrl}`);
    res.statusCode = 404;
    res.end("Route not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
