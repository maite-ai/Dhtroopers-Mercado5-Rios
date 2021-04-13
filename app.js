const express = require("express");
const app = express();
const port = process.env.PORT;
const path = require("path");

const publicPatch = path.resolve(__dirname, "./public");
app.use(express.static(publicPatch));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home")
});

app.get("/register", (req, res) => {
    res.render("register")
});

app.get("/login", (req, res) => {
    res.render("login")
});

app.listen(port || 3000, () => {
    console.log("El servidor está corriendo con éxito ");
});