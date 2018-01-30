# Systems API

Dashboard for SUSE systems built with react. It uses the systems-api to gather all the needed data.

## Start project

### Requirements
1. Nodejs
2. Yarn

### Start server
1. yarn install
2. yarn start

### Run tests
1. yarn test

## Explanation of some taken Options
### Configuration

This project started as a create react app. I ended up ejecting the react app configuration because I needed some custom 
configurations (css-modules). If I had the need to keep working on this project I would probably keep all the custom 
configuration in different files in order to be easier to keep track of create-react-app changes.

## Possible improvements

### Performance

We could improve the perfomance of big lists using a strategy with pagination or virtualization. We could also use
PureComponents in some strategic places in order to don't rerender everything. Atm the use of PureComponent would be 
even worst due to the simplicity of the interface that whenever something change it has to always rerender everything 
(the listing). In the future it should be placed strategically. 

### Redux 

Despite having experience with redux I didn't use it here, because it would be too overkill. Redux should be used carefully
otherwise your application can end up even more complex than it should. Even if I had used redux I would only keep the 
systems information there and still keep all the interface state in a component level (isLoading,etc). Redux shouldn't 
be tightly coupled with the interface and should be threated like a database.
