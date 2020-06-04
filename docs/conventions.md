# Coding conventions #

## Coding Conventions ##
**Language:** Use english for naming variables and git commit messages

**Comments:** Comments should be used widely to make code more approchable for beginners

**Pushing to master:**
Changes are pushed to master branch

**CSS:**
We use App.css stylesheet for all CSS-styling. ClassName-attribute is used to style React components. For example: 
```<button className='Main-lead-paragraph'>Text</button>```
The first word of a CSS-class should refer to the View where the class is used (e.g. *Main*). Only the first word should be capitalized but the rest of the class name is up to the developer. The classes are grouped by the View in which the class is used. However, if a CSS-class is used in many Views it should be put in *Global styles* class. The groups are defined by comments in App.css.

**Testing**
Features are tested as much as to be sure that they are working.
We are using Jest

Backend tests are located `/tests`. 
Tests are diveded to subfolders following the structure of actual sourcefiles. ie. tests covering calculator services are located at `/tests/services/`.

## CI ##
Pushing to Github master branch will trigger Travis CI to run tests, linting and make a build of frontend. If succesfull the app is deployed to Heroku for staging and can be run at: https://remotesocietynow.herokuapp.com/

![CI pipeline](https://github.com/RemoteSocietyNow-ohtu/remotesocietynow/blob/master/docs/CI-flow.png)