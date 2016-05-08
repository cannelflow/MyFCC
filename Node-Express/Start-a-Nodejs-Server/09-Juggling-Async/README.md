This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the URLs  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments.  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
 ## HINTS  
   
  Don't expect these three servers to play nicely! They are not going to  
  give you complete responses in the order you hope, so you can't naively  
  just print the output as you get it because they will be out of order.  
   
  You will need to queue the results and keep track of how many of the URLs  
  have returned their entire contents. Only once you have them all, you can  
  print the data to the console.  
   
  Counting callbacks is one of the fundamental ways of managing async in  
  Node. Rather than doing it yourself, you may find it more convenient to  
  rely on a third-party library such as [async](http://npm.im/async) or  
  [after](http://npm.im/after). But for this exercise, try and do it without  
  any external helper library.  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
   » To print these instructions again, run: learnyounode print                  
   » To execute your program in a test environment, run: learnyounode run                                                                            
     program.js                                                                  
   » To verify your program, run: learnyounode verify program.js                 
   » For help run: learnyounode help                                             
   
cannelflow1:~/workspace $ learnyounode verify program.js

Your submission results compared to the expected:

────────────────────────────────────────────────────────────────────────────────

1.  ACTUAL:    "Grab us a ya how it'll be show pony. Lets throw a slacker to flat out like a postie. Come a flick with flat out like a moolah. It'll be spewin' where she'll be right chrissie. As busy as a freo with come a muster. "
1.  EXPECTED:  "Grab us a ya how it'll be show pony. Lets throw a slacker to flat out like a postie. Come a flick with flat out like a moolah. It'll be spewin' where she'll be right chrissie. As busy as a freo with come a muster. "

2.  ACTUAL:    "As busy as a cactus mate no dramas we're going throw-down. Shazza got us some ten clicks away no dramas get a dog up ya slabs. Grab us a galah when trent from punchy sleepout. "
2.  EXPECTED:  "As busy as a cactus mate no dramas we're going throw-down. Shazza got us some ten clicks away no dramas get a dog up ya slabs. Grab us a galah when trent from punchy sleepout. "

3.  ACTUAL:    "Lets throw a rapt also built like a rort. You little ripper gyno to watch out for the boogie board. As cross as a bathers mate grab us a cut lunch commando. Come a apples mate as stands out like fair go. Stands out like a grog also he's got a massive throw-down. "
3.  EXPECTED:  "Lets throw a rapt also built like a rort. You little ripper gyno to watch out for the boogie board. As cross as a bathers mate grab us a cut lunch commando. Come a apples mate as stands out like fair go. Stands out like a grog also he's got a massive throw-down. "

4.  ACTUAL:    ""
4.  EXPECTED:  ""


────────────────────────────────────────────────────────────────────────────────

  ✓  Submission results match expected  
   
  # PASS Your solution to JUGGLING ASYNC passed!  
   
  Here's the official solution in case you want to compare notes:  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
     var http = require('http')  
     var bl = require('bl')  
     var results = []  
     var count = 0  
       
     function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     }  
       
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)  
   
 ─────────────────────────────────────────────────────────────────────────────  
  You have 4 challenges left. Type 'learnyounode' to show the menu.  
   
