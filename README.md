# backbone-forum

A simple demo forum created using Backbone.

##Setup

* [Yeoman](http://yeoman.io/) was used to scaffold the application using [Backbone generator](https://github.com/yeoman/generator-backbone)

* Dummy API powered by [json-server](https://github.com/typicode/json-server).

Install node, yeoman and bower to build and run this app.

* Install node (https://nodejs.org/en/)

version 0.10.32

Make sure that the node version is `0.10.32` because the generator is old and will break in new version of node.

* Install YeoMan (http://yeoman.io/)

npm install -g yo

This will install `bower`, `requirejs` and `bootstrap` also.

* cd to the project root directory and install bower and npm dependencies.

`bower install`

`npm install`

Note: generator creates lowercase app names in package.json even if you give uppercase letters.

##API

Dummy API powered by [json-server](https://github.com/typicode/json-server).

* Install [json-server](https://github.com/typicode/json-server) for dummy APIs

Add data in db.json file and start the json-server.

There is some test data already in the `etc/json-server/db.json` folder.
You can use that to test the app.

To start the json-server cd to `etc/json-server` and use the following command.

`json-server --watch db.json`

##PushState routing

To make the PushState routing work with Grunt, we need to make changes to default Grunt configuration.
The changes made are in the `connect livereload` section of configuration.

For more details see https://gist.github.com/nnarhinen/7719157 .

Also need a page level click handler for links to prevent the clicks from sending data back to server.
The changes were applied in app.init method.

See: http://artsy.github.io/blog/2012/06/25/replacing-hashbang-routes-with-pushstate/
