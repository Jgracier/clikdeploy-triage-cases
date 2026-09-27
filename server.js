const fs = require('fs');
const http = require('http');
const config = JSON.parse(fs.readFileSync('./config/production.json', 'utf8'));
const port = process.env.PORT || config.port || 3000;
http.createServer((req, res) => { res.end(config.greeting || 'ok'); }).listen(port, () => console.log(`listening on ${port}`));
