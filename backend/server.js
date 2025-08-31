import express from "express";

const app = express();
app.use(express.static('dist'));
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id1: 1,
            title: "Why did the scarecrow win an award?",
            joke: "Why don't scientists trust atoms? Because they make up everything!"

        },
        {
            id2: 2,
            title: "Why did the chicken join a band?",
            joke: "Because it had the drumsticks!"  
        },
        {
            id3: 3,
            title: "Why did the math book look sad?",
            joke: "Because it had too many problems."   
        },
        {
            id4: 4,
            title: "Why don't skeletons fight each other?",
            joke: "They don't have the guts."   
        }];
    res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server st http://localhost:${port}`);
});
