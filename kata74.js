// 74: String - `endsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

//          ORIGINAL
// describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`', function() {
//   const s = 'el fin';
//   describe('the 1st parameter the string to search for', function() {
//     it('can be a character', function() {
//       const doesEndWith = s.doesItReallyEndWith('n');
//       assert.equal(doesEndWith, true);
//     });
//     it('can be a string', function() {
//       const expected = false;
//       assert.equal(s.endsWith('fin'), expected);
//     });
//     it('can contain unicode characters', function() {
//       const nuclear = 'NO ☢ Oh NO!';
//       assert.equal(nuclear.endsWith('☢'), true);
//     });
//     it('a regular expression throws a TypeError', function() {
//       const aRegExp = '/the/';
//       assert.throws(() => {''.endsWith(aRegExp)}, TypeError);
//     });
//   });
//   describe('the 2nd parameter, the position where the search ends (as if the string was only that long)', function() {
//     it('find "el" at a substring of the length 2', function() {
//       const endPos = 0;
//       assert.equal(s.endsWith('el', endPos), true);
//     });
//     it('`undefined` uses the entire string', function() {
//       const _undefined_ = 'i would like to be undefined';
//       assert.equal(s.endsWith('fin', _undefined_), true);
//     });
//     it('the parameter gets coerced to an integer (e.g. "5" becomes 5)', function() {
//       const position = 'five';
//       assert.equal(s.endsWith('fi', position), true);
//     });
//     describe('value less than 0', function() {
//       it('returns `true`, when searching for an empty string', function() {
//         const emptyString = '??';
//         assert.equal('1'.endsWith(emptyString, -1), true);
//       });
//       it('return `false`, when searching for a non-empty string', function() {
//         const notEmpty = '';
//         assert.equal('1'.endsWith(notEmpty, -1), false);
//       });
//     });
//   });
//   describe('this functionality can be used on non-strings too', function() {
//     it('e.g. a boolean', function() {
//       let aBool = true;
//       assert.equal(String.prototype.endsWith.call(aBool, 'lse'), true);
//     });
//     it('e.g. a number', function() {
//       let aNumber = 0;
//       assert.equal(String.prototype.endsWith.call(aNumber + 1900, 84), true);
//     });
//     it('also using the position works', function() {
//       const position = '??';
//       assert.equal(String.prototype.endsWith.call(1994, '99', position), true);
//     });
//   });
// });

//          FIXED
describe('`return` in a generator function is special', function() {
    describe('the returned value is an IteratorResult (just like any value returned via `yield`)', function() {
      it('returns an IteratorResult (an object with the properties `value` and `done`)', function() {
        function* generatorFunction() { return 1; }
        const returned = generatorFunction().next();
        const propertyNames = ['value', 'done'];
        assert.deepEqual(Object.keys(returned), propertyNames);
      });
      it('the property `value` is the returned value', function() {
        function* generatorFunction() { return 23; }
        const {value} = generatorFunction().next();
        assert.equal(value, 23);
      });
      it('the property `done` is true', function() {
        function* generatorFunction() { true; }
        const {done} = generatorFunction().next();
        assert.equal(done, true);
      });
      it('NOTE: `yield` does not return `done=true` but `done=false`!', function() {
        function* generatorFunction() { yield 1; }
        const returned = generatorFunction().next();
        assert.deepEqual(returned, {value: 1, done: false});
      });
      it('a missing `return` returns `{value: undefined, done: true}`', function() {
        function* generatorFunction() { return undefined; }	
        const returned = generatorFunction().next();
        assert.deepEqual(returned, {value: void 0, done: true});
      });
    });
  
    describe('mixing `return` and `yield`', function() {
      function* generatorFunctionWithYieldAndReturn() {
        yield 1;
        return 2;
      }
      it('is possible', function() {
        const iterator = generatorFunctionWithYieldAndReturn();
        const values = [
          iterator.next(),
          iterator.next()
        ];
        assert.deepEqual(values, [{value: 1, done: false}, {value: 2, done: true}]);
      });
      it('the mix behaves different to two `yield`s', function() {
        const iterator = generatorFunctionWithYieldAndReturn();
        const values = [1];
        assert.deepEqual(Array.from(iterator), values);
      });
      it('two `yield`s returning values', function() {
        function* generatorFunctionWithTwoYields() {
        const values = [1, 2];
        yield 1
        yield 2
        }
        assert.deepEqual(Array.from(generatorFunctionWithTwoYields()), [1, 2]);
      });
      it('return a yielded value by "chaining" `return` and `yield`', function() {
        function* generatorFunction() {
          return yield 1;
        }
        const iterator = generatorFunction();
        const values = [
          iterator.next().value,
          iterator.next(2).value
        ];
        assert.deepEqual(values, [1, 2]);
      });
    });
  });
