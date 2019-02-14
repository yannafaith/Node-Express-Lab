const express = require('express');

const postsRoutes = require('./routes/postsRoutes.js');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRoutes)

server.use('/', (req, res) => {
    res.send('API running!')

})

server.listen(4000, () => {
    console.log('API running on port 4000')
});






