import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRoutes from "./routes/student.js";

const app = express();
app.use(cors());

/*
app.use(bodyParser.json({limit: "20mb", extented: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extented: true}));

*/

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/students", studentRoutes);

//MongoDB SRV URL
const CONNECTION_URL =
  "mongodb+srv://realAbishan:SouAbi@1419@lifeatcampus.zncdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//PORT Variable
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    //To Avoid warning and Errors in the console
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      //Check whether is it ruuning on the correct port
      console.log("Conection is established and running on the port" + PORT)
    )
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
