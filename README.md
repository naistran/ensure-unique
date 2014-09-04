
# ensure-unique

Ensure unique id (rethinkdb)

```js
yield* ensureUnique(function* () {
  user.id = shortid();
  // insert if email doesn't already exist
  var res = yield r.branch(
    table.getAll(user.email, { index: 'email' }).isEmpty(),
    table.insert(user),
    false
  ).run();
  // assert email
  assert(res, 400, 'Email already taken');
  return res;
});
```

[![NPM version][npm-image]][npm-url]
[![Github release][github-image]][github-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]

[npm-image]: https://img.shields.io/npm/v/ensure-unique.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ensure-unique
[github-image]: http://img.shields.io/github/release/ntran13/ensure-unique.svg?style=flat-square
[github-url]: https://github.com/ntran13/ensure-unique/releases
[travis-image]: https://img.shields.io/travis/ntran13/ensure-unique.svg?style=flat-square
[travis-url]: https://travis-ci.org/ntran13/ensure-unique
[coveralls-image]: https://img.shields.io/coveralls/ntran13/ensure-unique.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/ntran13/ensure-unique?branch=master
[david-image]: http://img.shields.io/david/ntran13/ensure-unique.svg?style=flat-square
[david-url]: https://david-dm.org/ntran13/ensure-unique
[license-image]: http://img.shields.io/npm/l/ensure-unique.svg?style=flat-square
[license-url]: LICENSE