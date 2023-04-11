const setupServer = require("./setupServer");
const PORT = process.env.PORT || 4000;
const app = setupServer();

app.listen(PORT, ()=> {
  console.log(`The server is listening @ http://localhost:${PORT}`)
})