/*
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
*/

var express = require("express"),
  http = require("http"),
  session = require("express-session"),
  path = require("path"),
  fs = require("fs"),
  cors = require("cors"),
  indexRoutes = require("./routes/index");

const app = express();
const server = http.createServer(app);

app.set("view engine", "html");
app.engine("html", function (path, options, callbacks) {
  fs.readFile(path, "utf-8", callback);
});

//this.setState({ nickname : String(cookie_parts[1]) }, () => { console.log(this.state.nickname) })
app.use(express.static(path.join(__dirname, "../app")));

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { path: "/", secure: false, maxAge: 20000 },
  })
);

app.use("/", indexRoutes);

server.listen(3000, () => {
  console.log("server running on port 3000");
});

/*
const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: `${process.env.STORAGE_BUCKET}`,
  storageBucket: `${process.env.STORAGE_BUCKET}`,
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
*/
