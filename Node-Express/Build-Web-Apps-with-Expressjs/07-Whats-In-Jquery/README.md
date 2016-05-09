In Express.js to extract query string parameters, we can use:

    req.query.NAME

To output JSON we can use:

    res.send(object)


 » To print these instructions again, run: expressworks print
 » To execute your program in a test environment, run: expressworks run program.js
 » To verify your program, run: expressworks verify program.js
 » For help run: expressworks help


cannelflow1:~/workspace $ expressworks verify program.js

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "{\"results\":\"recent\",\"type\":\"quote\",\"page\":\"4\"}" ==    "{\"results\":\"recent\",\"type\":\"quote\",\"page\":\"4\"}"

────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to WHAT'S IN QUERY passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var express = require('express')
    var app = express()
    
    app.get('/search', function(req, res){
      var query = req.query
      res.send(query)
    })
    
    app.listen(process.argv[2])

────────────────────────────────────────────────────────────────────────────────
