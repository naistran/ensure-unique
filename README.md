
# ensure-unique

Ensure unique id (rethinkdb)

```js
yield* ensureUnique(function* () {
  var res = yield table.insert(user);
  return res;
});
```