const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const customHelpers = require("./helpers");

// app.engine(file_extension, engine_use(directory))
app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
  })
);

app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
    helpers: customHelpers
  })
);




app.set("view engine", ".hbs");

// if
app.get("/if", (req, res) => {
  res.render("if", { user: sampleData.user });
});

// unless
app.get("/unless", (req, res) => {
  res.render("unless", { condition: sampleData.condition });
});

// each
app.get("/each", (req, res) => {
  res.render("each", { users: sampleData.users });
});


app.get("/", (req, res)=>{
  res.send("home page for handlebars")
})

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
