const express = require("express");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/User.routes");


const app = express();
app.use(express.json());

app.use("/users",userRouter)



const port = 8080;
app.listen(port, async () => {
  console.log(`server running on port ${port}`);
  try {
    await connection;
    console.log("connected to database");
  } catch (error) {
    console.log(`could not connect to database ${error.message}`);
  }
});
