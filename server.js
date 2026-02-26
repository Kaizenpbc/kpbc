const next = require("next");
const http = require("http");

const app = next({ dir: __dirname });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  http.createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log("Ready on port " + port);
  });
});
