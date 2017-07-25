# quark

Starter for creating node modules using ES6+

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)


## Features

Create `Babel import/export`, `UMD` and `CommonJs` modules using ES6+.


## Scripts

 - **npm run readme** : `node ./node_modules/.bin/node-readme`
 - **npm run prepublish** : `npm run build`
 - **npm run precommit** : `npm run lint:test`
 - **npm run prepush** : `npm run lint:test`
 - **npm run release** : `release-it`
 - **npm run coveralls** : `cat ./coverage/lcov.info | ./node_modules/.bin/coveralls`
 - **npm run lint** : `npm run lint:eslint`
 - **npm run lint:eslint** : `eslint src/*.js`
 - **npm run test** : `clear && jest`
 - **npm run test:coverage** : `jest --coverage `
 - **npm run test:watch** : `clear && jest --watch`
 - **npm run lint:test** : `npm run lint && npm run test:coverage`
 - **npm run build** : `clear && npm run lint:test && npm run build:cjs && npm run build:es && npm run build:umd`
 - **npm run build:watch** : `clear && rimraf cjs && cross-env BABEL_ENV=cjs babel -w src --out-dir cjs`
 - **npm run build:es** : `rimraf es && cross-env BABEL_ENV=es babel src --out-dir es`
 - **npm run build:cjs** : `rimraf cjs && cross-env BABEL_ENV=cjs babel src --out-dir cjs`
 - **npm run build:umd** : `rimraf dist && cross-env BABEL_ENV=es rollup -c & cross-env BABEL_ENV=es NODE_ENV=production rollup -c`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[babel-cli](https://www.npmjs.com/package/babel-cli) | ^6.18.0 | ✔
[babel-core](https://www.npmjs.com/package/babel-core) | ^6.17.0 | ✔
[babel-plugin-add-module-exports](https://www.npmjs.com/package/babel-plugin-add-module-exports) | ^0.2.1 | ✔
[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) | ^6.16.0 | ✔
[coveralls](https://www.npmjs.com/package/coveralls) | ^2.11.15 | ✔
[cross-env](https://www.npmjs.com/package/cross-env) | ^3.1.3 | ✔
[eslint](https://www.npmjs.com/package/eslint) | ^3.12.0 | ✔
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) | ^11.3.0 | ✔
[eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel) | ^4.0.0 | ✔
[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) | ^2.7.0 | ✔
[generate-readme](https://www.npmjs.com/package/generate-readme) | ^0.3.1 | ✔
[husky](https://www.npmjs.com/package/husky) | ^0.12.0 | ✔
[jest](https://www.npmjs.com/package/jest) | ^18.1.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[release-it](https://www.npmjs.com/package/release-it) | ^2.5.1 | ✔
[rimraf](https://www.npmjs.com/package/rimraf) | ^2.5.4 | ✔
[rollup](https://www.npmjs.com/package/rollup) | ^0.39.2 | ✔
[rollup-plugin-babel](https://www.npmjs.com/package/rollup-plugin-babel) | ^2.6.1 | ✔
[rollup-plugin-bundle-size](https://www.npmjs.com/package/rollup-plugin-bundle-size) | ^1.0.1 | ✔
[rollup-plugin-commonjs](https://www.npmjs.com/package/rollup-plugin-commonjs) | ^7.0.0 | ✔
[rollup-plugin-node-resolve](https://www.npmjs.com/package/rollup-plugin-node-resolve) | ^2.0.0 | ✔
[rollup-plugin-uglify](https://www.npmjs.com/package/rollup-plugin-uglify) | ^1.0.1 | ✔

## Author

Rajat Sharma (rajatsharma0720@gmail.com)

## License

 - **MIT** : http://opensource.org/licenses/MIT
