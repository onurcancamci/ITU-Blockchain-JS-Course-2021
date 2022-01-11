const express = require("express");
const cors = require("cors");

function main() {
  const app = express();
  app.use(cors({ origin: "*" }));
  app.use(express.json());

  app.all("/hello", async (req, res) => {
    const ms = req.body.ms;
    if (ms) {
      await wait(ms);
    }

    res.json({ hello: "world" });
  });

  app.listen(3000);
}

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

main();
