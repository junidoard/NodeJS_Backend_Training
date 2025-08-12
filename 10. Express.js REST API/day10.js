const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to my Express.js server!");
});
app.get("/about", (req, res) => {
    res.send("About me: I am learning Express.js backend.");
});
app.get("/api", (req, res) => {
    res.json({ "status": "success", "message": "This is the API endpoint" });
})
app.get("/greet", (req, res) => {
    const name = req.query.name;
    if(!name) {
        res.send("Hello, Guest!");
        return;
    }
    res.send(`Hello, ${name}!`);
});
app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    res.send(`User ID: ${id}`);
});
app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(`The sum is ${sum}.`);
});
app.post("/echo", (req, res) => {
    const data = req.body;
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});