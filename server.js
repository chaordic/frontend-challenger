const express = require("express");
const path = require("path");

const build_path = path.resolve(__dirname, "dist");
const app = express();

const PORT = 3000;

app.use(express.static(build_path));

app.get("/api/delivery", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(require("./pedido.json"), null, 3));
});

app.listen(PORT);

console.info(`Server Running on http://localhost:${PORT}/`);
