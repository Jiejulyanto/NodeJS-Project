var http = require('http');
var url = require('url');
var browseUrl = 'http://it.maranatha.edu/main?userId=256&lang=en';

var server = http.createServer((req,res)=>{
    let browserDetail = url.parse(browseUrl);
    console.log(browseUrl);
    console.log(browserDetail.host);
    console.log(browserDetail.pathname);
    console.log(browserDetail.search);
    res.end();
});
server.listen(8000);