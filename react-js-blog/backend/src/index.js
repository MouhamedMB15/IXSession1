

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/blogs', require('./routes/blogs'));

app.listen(port, () => {
    console.log(`IX Blogging App listineing on port ${port}`);
});


