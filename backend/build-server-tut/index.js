import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with data
  res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.get("/about", (req, res) => {
  res.send(`<h2>About Me</h2><p>Hello! I’m Arturo J. Laínez, a Web Developer and Designer with four years of experience crafting dynamic, user-friendly websites. I specialize in responsive design and development using HTML, CSS, JavaScript, Node.js, Adobe XD, and Figma. I manage projects from concept to completion, ensuring attention to detail and clean code.

</br>Outside of work, I love reading, trying new foods, and practicing my Catholic faith. These passions inspire my creativity and dedication.</p>`);
});

app.get("/contact", (req, res) => {
  res.send(
    `<h1>You can reach me on <a href='https://www.arturolainez.com'>My website</a></h1>`
  );
});

app.listen(port, () => {
  console.log("Server is Running on port " + port + ".");
});
