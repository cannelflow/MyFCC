Execute these lines:
sed -i".bak" '/mongod/d' ~/.bash_aliases
cat ~/.bash_aliases | grep mongod
source ~/.bash_aliases
Open new terminal, and type
mongod --smallfiles
