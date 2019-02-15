import express = require('express');

const server: express.Application = express();

server.get('/', (req, res) => {
    res.send('Hello World!');
});

export default server.listen(3000, () => {
    console.log('Listening on port 3000');
});
