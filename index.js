module.exports = function* ensureUnique(fn) {
  // TODO: timeout
  while (true) {
    res = yield* fn();
    // throw other errors
    var error = res.first_error;
    if (error) {
      if (!error.match('Duplicate primary key')) throw new Error(error);
    } else break; // no duplicate => done
  }
};