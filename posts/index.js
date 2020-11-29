const express = require('express');
const bodyParser = require('body-parser');

const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const posts = {};

app.get('/posts', (req, res) => {
  res.status(200).send(posts);
});


app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const {title}  = req.body;
  console.log(title)
  posts[id] ={
    id, title
  }
  res.status(201).send({
    id,
    title,
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
