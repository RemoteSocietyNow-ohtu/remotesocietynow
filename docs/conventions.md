# Coding conventions #

## Technologies and platforms ##
⋅⋅⋅NodeJS Backend  
⋅⋅⋅React front end  
⋅⋅⋅Travis CI https://travis-ci.org/RemoteSocietyNow-ohtu/remotesocietynow  
⋅⋅⋅Staging Heroku https://remotesocietynow.herokuapp.com/  
⋅⋅⋅Eslint https://github.com/RemoteSocietyNow-ohtu/remotesocietynow/blob/master/.eslintrc.js  

## Coding Conventions ##
**Language:** Use english for naming variables and git commit messages

**Comments:** Comments should be used widely to make code more approchable for non-coders

**Pushing to master**
Changes are pushed to master branch

**CSS**
We use App.css -stylesheet for all css-styling. ClassName-attribute is used to style React components. For example: 
```<button className='Toggle-Button'>Text</button>```

**Testing**
Features are tested as much as to be sure that they are working.

Tests location???

## CI ##
Pushing to Github master branch will trigger Travis CI to run tests, linting and make a build of frontend. If succesfull the app is deployed to Heroku for staging and can be run at: https://remotesocietynow.herokuapp.com/

https://docs.google.com/drawings/d/1JnighsokIjPMCwBD-mMOFF6KbeqNXLSJPMYhnNM_bwA/edit?usp=sharing