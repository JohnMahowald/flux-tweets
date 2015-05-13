# Migration Backbone project to React

The project was initially built in Backbone. The following is an exploration in
migrating a project from Backbone to React, using Test Driven Development.

The project follows React's Flux design pattern for managing data models,
stores, and events. 

## Branches

### Master:
Has a working instance of the project working in Backbone. Backbone files live
in the `./app/assets/javascripts/`, and is served when visitin the `/users/:id`
route.

### Flux:
Removes the backbone dependencies in favor of using React. Currently the project
uses NPM to manage depencencies instead of a Rails gem. This may change in the
future to utilize Rail's sprockets directives, test runner, and simplify
instalation. 

## Getting Started

### Rails
The project uses a simple Rails JSON API for interacting with the server. To get
started with Rails, run the following: 

`bundle install`
`rake db:create db:migrate`

### NPM
The project uses NPM to manage client side javascript. Javscript lives in the
`./app/assets/javascripts/` directory.

`npm install`

### Serve
`rails server`

navigate => localhost:3000

### Run the Tests
`npm test`
