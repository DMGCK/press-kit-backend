import express from "express";
import ara from "./Routers/ara.js";

let myApp = express();
const port = 3000;

myApp.use("/ara", ara);

myApp.listen(port, () => {
  console.log(`Listening on ${port}`);
});

export default myApp;
