You may have to create the data directory.

    mkdir data

To start mongo on port 27017, run mongod --port 27017 --dbpath=./data.

Then, in another terminal, run npm install mongodb.

Then, run learnyoumongo verify.

If this lesson is passed, be sure to leave mongod running as it will
be used for the remainder of the exercise.


» To print these instructions again, run: learnyoumongo print
» To run your program, run: learnyoumongo run [solution.js]
» To verify your program, run: learnyoumongo verify [solution.js]
» For help run: learnyoumongo help


cannelflow1:~/workspace $ sed -i".bak" '/mongod/d' ~/.bash_aliases
cannelflow1:~/workspace $ cat ~/.bash_aliases | grep mongod
cannelflow1:~/workspace $ source ~/.bash_aliases
cannelflow1:~/workspace $ learnyoumongo verify
✓ Successfully connected to MongoDB

# PASS

Your solution to CONNECT passed!

You have 7 challenges left.
Type 'learnyoumongo' to show the menu.
