import express from 'express'; // Can't use unless using module js

const app = express();

// app.get('/', (req, res) => {
// 	res.send('Server is ready');
// });

// I want to serve a list of 5 joke
app.get('/api/jokes', (req, res) => {
	const jokes = [
	{
    id: 1,
    title: "Why don't scientists trust atoms?",
    content: "Because they make up everything!"
  },
  {
    id: 2,
    title: "Why did the math book look sad?",
    content: "Because it had too many problems."
  },
  {
    id: 3,
    title: "What do you get when you cross a snowman and a vampire?",
    content: "Frostbite!"
  },
  {
    id: 4,
    title: "Why don’t skeletons fight each other?",
    content: "They don’t have the guts."
  },
  {
    id: 5,
    title: "What’s orange and sounds like a parrot?",
    content: "A carrot."
  }
];
	res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`App serving on http://localhost:${port}`)
})