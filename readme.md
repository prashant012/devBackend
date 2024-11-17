1- this is a starting point of a application which is app.js file
2- this is the main core JS file where you will all the piece of JS code

/*
- to create a project you need to create first a server here you can listen the req and response
- we will be using express js  (its a node js framework) 
- we need to install it...it is available in NPM store (npm i express --save)
- why we have version like this -- '~a.b.c' --'a-measure, b-minor, c-patch' 
- they might be daily releasing new code so - 
- '^' (caret) It automatically updates both minor and patch updates.
- '~' (tilde) this means autmatically accept the bug fixes.
- package-lock.json which version i am using exactly that can know from lock file. exact version over there.
*/ 

- install nodemon for not starting and stoping server again and again and to get refrshed data
- npm i -g nodemon // -g help us to install it global level we might get some error
- sudo npm i -g nodemon 
- https://stackoverflow.com/questions/63423584/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabl
- if you face any error follow the above guide line set the execution policy
- Get-ExecutionPolicy
- Set-ExecutionPolicy Unrestricted
- Now try to run nodemon on your project 'nodemon src/app.js'

- to initialize git --git init