import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
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
