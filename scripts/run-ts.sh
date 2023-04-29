#!/bin/bash

# checks if the file name was passed
if [ -z $1 ]; then
  echo -en '\n'
  echo -e "\033[0;31mMake sure to format the command properly:\033[0m"
  echo -en '\n'
  echo -e "\033[01;36mCorrect Syntax:\033[0m 'npm run typescript <algo name>' "; 
  echo -en '\n'
# check to ensure that the correlating dist file exists
elif [ ! -f "./typescript/dist/$1" ] && [ ! -f "./typescript/dist/$1.js" ]; then
  echo -en '\n'
  echo -e "\033[0;31mCompiled dist file does not exist for:\033[0m \033[01;36m$1\033[0m"
  echo -e "\033[0;31mPlease double-check your spelling, omit the file extension, and/or run ts script.\033[0m"
  echo -en '\n'
# # run the test file
else 
  echo -e "Running compiled dist file for for:  \033[01;36m$1.ts\033[0m"
  echo -en '\n'
  
  node typescript/dist/$1.js
fi
