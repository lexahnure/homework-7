const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) =>  {
  const isHTML = req.url.endsWith('.html');
  const isJS = req.url.endsWith('.js');
  const fileName = req.url.replace('/', 'front/');
  const date = new Date();
    
  if(isHTML) {
    fs.readFile( fileName, (err, data) => {
      let dataWithDate = String(data).replace(
        '</body>',
        `<div class = "date" style = "position: absolute; left: 5vw; bottom: 5vh;" >Date is ${date.toLocaleDateString('en-GB')}</div></body>`
      );

      res.setHeader('Content-Type', 'text/html');
      if(err) return res.end(`<strong>${err}</strong>`);
      res.end(String(dataWithDate));
    });       
  }

  if(isJS) {
    fs.readFile( fileName, (err, data) => {
      res.setHeader('Content-Type', 'application/javascript');
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