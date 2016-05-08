Create a new module by creating a new file that just contains your  
  directory reading and filtering function. To define a single function  
  export, you assign your function to the module.exports object, overwriting  
  what is already there:  
   
     module.exports = function (args) { /* ... */ }  
   
  Or you can use a named function and assign the name.  
   
  To use your new module in your original program file, use the require()  
  call in the same way that you require('fs') to load the fs module. The  
  only difference is that for local modules must be prefixed with './'. So,  
  if your file is named mymodule.js then:  
   
     var mymodule = require('./mymodule.js')  
   
  The '.js' is optional here and you will often see it omitted.  
   
  You now have the module.exports object in your module assigned to the  
  mymodule variable. Since you are exporting a single function, mymodule is  
  a function you can call!  
   
  Also keep in mind that it is idiomatic to check for errors and do  
  early-returns within callback functions:  
   
     function bar (callback) {  
       foo(function (err, data) {  
         if (err)  
           return callback(err) // early return  
       
         // ... no error, continue doing cool things with `data`  
       
         // all went well, call callback with `null` for the error argument  
       
         callback(null, data)  
       })  
     }  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
   » To print these instructions again, run: learnyounode print                  
   » To execute your program in a test environment, run: learnyounode run                                                                            
     program.js                                                                  
   » To verify your program, run: learnyounode verify program.js                 
   » For help run: learnyounode help                                             
   
cannelflow1:~/workspace $ learnyounode verify program.js

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "CHANGELOG.md"                      ==    "CHANGELOG.md"                     
   "LICENCE.md"                        ==    "LICENCE.md"                       
   "README.md"                         ==    "README.md"                        
   ""                                  ==    ""                                 

────────────────────────────────────────────────────────────────────────────────

  ✓  Submission results match expected  
   
  ✓  Additional module file exports a single function  
   
  ✓  Additional module file exports a function that takes 3 arguments  
   
  ✓  Additional module file handles errors properly  
   
  ✓  Additional module file handles callback argument  
   
  ✓  Additional module file returned two arguments on the callback function  
   
  ✓  Additional module file returned an Array as the second argument of the  
  callback  
   
  ✓  Additional module file correctly handles '.'-prefixed extension  
   
  ✓  Additional module file returned correct number of elements as the  
  second argument of the callback  
   
  ✓  Additional module file returned correct list of files as the second  
  argument of the callback  
   
  # PASS Your solution to MAKE IT MODULAR passed!  
   
  Here's the official solution in case you want to compare notes:  
   
 ─────────────────────────────────────────────────────────────────────────────  
  _/home/ubuntu/.nvm/versions/node/v4.4.3/lib/node_modules/learnyounode/exer  
  cises/make_it_modular/solution/solution.js_ :  
   
     var filterFn = require('./solution_filter.js')  
     var dir = process.argv[2]  
     var filterStr = process.argv[3]  
       
     filterFn(dir, filterStr, function (err, list) {  
       if (err)  
         return console.error('There was an error:', err)  
       
       list.forEach(function (file) {  
         console.log(file)  
       })  
     })  
   
 ─────────────────────────────────────────────────────────────────────────────  
  _/home/ubuntu/.nvm/versions/node/v4.4.3/lib/node_modules/learnyounode/exer  
  cises/make_it_modular/solution/solution_filter.js_ :  
   
     var fs = require('fs')  
     var path = require('path')  
       
     module.exports = function (dir, filterStr, callback) {  
       
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }  
   
 ─────────────────────────────────────────────────────────────────────────────  
