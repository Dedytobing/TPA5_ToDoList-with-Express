const express = require("express");
const router = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.use((req, res, next) => {
  res.status(404).json({ error: "Halaman tidak ditemukan" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running ${port}`);
});
