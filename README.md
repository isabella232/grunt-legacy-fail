# grunt-legacy-fail [![NPM version](https://badge.fury.io/js/grunt-legacy-fail.svg)](http://badge.fury.io/js/grunt-legacy-fail) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> Grunt's fail methods, as a standalone library.

## Heads up!

This is not ready for use yet! We'll update the readme when it's ready to go, feel free to star the project if you want updates in the meantime!

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i grunt-legacy-fail --save-dev
```

## Usage

```js
var fail = require('grunt-legacy-fail');
```

## API

_(Nothing yet.)_

## TODO

**First:**

_(loosely in this order...)_

* [x] migrate code
* [x] migrate tests
* [x] get tests passing with 100% parity
* [x] add Grunfile
* [ ] coverage reports
* [ ] API documentation, written as code comments
* [ ] Add the event to the changelogs of both libraries

**Next:**

* [ ] replace core `grunt.fail` internal module with `grunt-legacy-fail`
* [ ] remove any dependencies that are no longer needed from grunt.
* [ ] enable travis
* [ ] add travis badge

## Related projects

* [grunt](http://gruntjs.com/): The JavaScript Task Runner
* [grunt-cli](http://gruntjs.com/): The grunt command line interface.
* [grunt-legacy-log](http://gruntjs.com/): The Grunt 0.4.x logger.
* [grunt-legacy-util](http://gruntjs.com/): Some old grunt utils provided for backwards compatibility.

## Running tests

Install dev dependencies:

```sh
$ npm install -d && grunt
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/gruntjs/grunt-legacy-fail/issues/new)

## Author

**"Cowboy" Ben Alman**

+ [github/cowboy](https://github.com/cowboy)
* [twitter/cowboy](http://twitter.com/cowboy)

## License

Copyright (c) 2015 "Cowboy" Ben Alman
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on May 14, 2015._