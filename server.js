const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/article");
const User = require("./models/user");
const articleRouter = require("./routes/articles");
const userRouter = require("./routes/user");
const methodOverride = require("method-override");
const app = express();
let userLogin = require("./routes/user");

mongoose.connect(
  "mongodb+srv://Omar:1177@cluster0.ivfso.mongodb.net/MY-BLOG-POST?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

mongoose.connection
  .once("open", function () {
    console.log("Connection has been successfully established!.. ");
  })
  .on("error", function (error) {
    console.log("Connection error!.. ", error);
  });
app.use("/public", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  let user = new User();
  user.name = userLogin;
  user.password = userLogin;
  res.render("articles/index", { articles: articles, user: user });
});

app.use("/articles", articleRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
