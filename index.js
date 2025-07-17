// server/index.ts
import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { existsSync } from "node:fs";
var app = express();
var server = createServer(app);
var __dirname = dirname(fileURLToPath(import.meta.url));
var port = process.env.PORT || 5e3;
var publicDir = join(__dirname, "../dist/public");
if (existsSync(publicDir)) {
  app.use(express.static(publicDir));
  app.get("*", (req, res) => {
    res.sendFile(join(publicDir, "index.html"));
  });
} else {
  const clientDir = join(__dirname, "../client");
  app.use(express.static(clientDir));
  app.get("*", (req, res) => {
    res.sendFile(join(clientDir, "index.html"));
  });
}
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
