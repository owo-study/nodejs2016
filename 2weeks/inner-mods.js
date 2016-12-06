/** os 모듈 **/
var os = require("os");
// console.log(os);

console.log( os.hostname() );
console.log( os.type() );
console.log( os.platform() );
console.log( os.arch() );
console.log( os.release() );
console.log( os.uptime() );
console.log( os.loadavg() );
console.log( os.totalmem() );
console.log( os.freemem() );
console.log( os.cpus() );



/** url 모듈 **/
var url = require("url");
// String을 urlObject로 변환 
var urlObject = url.parse("http://node.sbsoft.kr/about");
console.log(urlObject);
console.log(urlObject.hostname);
console.log(urlObject.path);

// urlObject를 (url)String로 변환
var urlString = url.format( urlObject );
console.log(urlString);



/** http 모듈 **/
var http = require("http");
 
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hello nodejs Webserver");
}).listen(8000);
 
console.log("Server running...");