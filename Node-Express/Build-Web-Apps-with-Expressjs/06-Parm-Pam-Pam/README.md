To handle PUT requests use:

    app.put('/path/:NAME', function(req, res){...});

To extract parameters from within the request handlers, use:

    req.params.NAME


 » To print these instructions again, run: expressworks print
 » To execute your program in a test environment, run: expressworks run program.js
 » To verify your program, run: expressworks verify program.js
 » For help run: expressworks help


cannelflow1:~/workspace $ expressworks verify program.js

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "edd97fca8638710dda9674349d1fa44e36f1ed43" ==    "edd97fca8638710dda9674349d1fa44e36f1ed43"

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to PARAM PAM PAM passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    
    app.put('/message/:id', function(req, res){
      var id = req.params.id
      var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
      res.send(str)
    })
    
    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────

You have 2 challenges left.
Type 'expressworks' to show the menu.
