const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) =>  {
  const isHTML = req.url.endsWith('.html');
  const isJS = req.url.endsWith('.js');
  const isCSS = req.url.endsWith('.css');
  const fileName = req.url.replace('/', 'front/');
  const date = new Date();
    
  if (isHTML) {
    fs.readFile( fileName, (err, data) => {
      let dataWithDate = String(data).replace(
        '</body>',
        `<div class = "date">Date is ${date.toLocaleDateString('en-GB')}</div></body>`
      );

      res.setHeader('Content-Type', 'text/html');
      if(err) return res.end(`<strong>${err}</strong>`);
      res.end(String(dataWithDate));
    });       
  }

  if (isJS) {
    fs.readFile( fileName, (err, data) => {
      res.setHeader('Content-Type', 'application/javascript');
      if(err) return res.end(`<strong>${err}</strong>`);
      res.end(data);
    });
  }

  if (isCSS) {
    fs.readFile( fileName, (err, data) => {
      res.setHeader('Content-Type', 'text/css');
      if(err) return res.end(`<strong>${err}</strong>`);
      res.end(data);
    });
  }

  fs.readFile( fileName, (err, data) => {
    if(err) return res.end(`<strong>${err}</strong>`);
    res.end(data);
  });

});


server.listen(5600);