const express = require('express');
const compression = require('compression');
const path = require('path');

const port = process.env.PORT || 3030;
const app = express();

const serverRootPath = path.join(__dirname + '/../dist');

app.use(compression());
app.use(express.static(serverRootPath, {
  // maxAge: 31557600000
}));
app.get('*', (_, response) => {
  response.sendFile(path.resolve(serverRootPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}. Visit http://localhost:${port}/`);
  console.log('Press CTRL + C to stop the server');
});
