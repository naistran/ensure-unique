
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