# s-programming-test

## Install and run

```
npm install
npm run build
python -m SimpleHTTPServer
```

## Test

```
npm test
```

Then open up http://localhost:8000

## Decisions

- Simple RWD with minimal MVC JavaScript.
- No CSS pre-processor such as Sass/LESS etc.
- Wrap JSONP code into Flickr API for ability to extend functionality and take away complication of JSONP handling.
- Works with modern browsers (IE9+) and should work on IE8 with minimal additional effort.
- Use [CommonJS](https://webpack.github.io/docs/commonjs.html) style syntax for dependencies and [Browserify](http://browserify.org/) to build and bundle resources (rather than anything more heavyweight such as Gulp/Grunt/Webpack).
- Use [Jest](https://facebook.github.io/jest/) for testing (Facebook library built on top of Jasmine test framework). See `src/__tests__`.
- No frameworks/external dependencies (except for polyfills).
- No view templating i.e. Mustache, React etc. (due to time constraints).
- Use [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) rather than callbacks (where appropriate), with a [polyfill](https://github.com/jakearchibald/es6-promise) for cross-browser support.
- Use some ES5 functionality (e.g. `forEach`, `map`, `filter`).
- Use plain objects and [revealing module](http://zachberry.com/blog/creating-a-custom-node-js-module-with-the-revealing-module-pattern/) pattern with factory method, instead of constructor functions.
- Uses `localStorage` as persistent browser store.
- Many tests (including functional / acceptance tests) omitted to complete in a reasonable time.
- Use Nightmare.js for some simple acceptance tests (not done).