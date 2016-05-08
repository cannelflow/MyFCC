 The request object from an HTTP server has a url property that you will  
  need to use to "route" your requests for the two endpoints.  
   
  You can parse the URL and query string using the Node core 'url' module.  
  url.parse(request.url, true) will parse content of request.url and provide  
  you with an object with helpful properties.  
   
  For example, on the command prompt, type:  
   
     $ node -pe "require('url').parse('/test?q=1', true)"  
   
  Documentation on the url module can be found by pointing your browser  
  here:  
  file:///home/ubuntu/.nvm/versions/node/v4.4.3/lib/node_modules/learnyounod  
  e/node_apidoc/url.html  
   
  Your response should be in a JSON string format. Look at JSON.stringify()  
  for more information.  
   
  You should also be a good web citizen and set the Content-Type properly:  
   
     res.writeHead(200, { 'Content-Type': 'application/json' })  
   
  The JavaScript Date object can print dates in ISO format, e.g. new  
  Date().toISOString(). It can also parse this format if you pass the string  
  into the Date constructor. Date#getTime() will also come in handy.  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
   » To print these instructions again, run: learnyounode print                  
   » To execute your program in a test environment, run: learnyounode run                                                                            
     program.js                                                                  
   » To verify your program, run: learnyounode verify program.js                 
   » For help run: learnyounode help                                             
   
cannelflow1:~/workspace $ learnyounode verify program.js

Your submission results compared to the expected:

────────────────────────────────────────────────────────────────────────────────

1.  ACTUAL:    "{\"hour\":16,\"minute\":2,\"second\":14}"
1.  EXPECTED:  "{\"hour\":16,\"minute\":2,\"second\":14}"

2.  ACTUAL:    "{\"unixtime\":1462723334860}"
2.  EXPECTED:  "{\"unixtime\":1462723334860}"

3.  ACTUAL:    ""
3.  EXPECTED:  ""


────────────────────────────────────────────────────────────────────────────────

  ✓  Submission results match expected  
   
  # PASS Your solution to HTTP JSON API SERVER passed!  
   
  Here's the official solution in case you want to compare notes:  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
     var http = require('http')  
     var url = require('url')  
       
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
       
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2]))  
   
 ─────────────────────────────────────────────────────────────────────────────  
  You've finished all the challenges! Hooray!  
   
