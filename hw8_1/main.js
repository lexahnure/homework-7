const http = require('http');
const fs = require('fs');

http.get('http://wttr.in/~kharkov', async res => {
  let rawData = '';
  
  res.setEncoding('utf-8');
  res.on('data', (content) => { rawData += content } );
  res.on('end', () => {
    fs.writeFile('weather.html', rawData, (err) => {
        if (err) console.log(err);
    });
  });
});