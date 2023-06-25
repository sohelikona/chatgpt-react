const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
const API_KEY = "YOUR_API_KEY"

app.use(
  cors({
  origin: "http://localhost:3000",
  })
)
app.use(express.json())
require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});


app.use(cors());

app.post('/images', async (req, res) => {

const openai = new OpenAIApi(configuration);

try {
    const response = await openai.createImage({
        prompt: "A cute baby sea otter",
        n: 2,
        size: "1024x1024",
      });
      console.log(response)
      res.send(response.data.data)
} catch (error) {
    console.error(error)
}


})




// app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT))



app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
  
  app.listen(PORT, () =>
    console.log('Your server is running on PORT ' + PORT)
  );