// 71: String - `repeat()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!
//          ORIGINAL
describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {
    //   const s = 'the string s';
    //   describe('the 1st parameter, the string to search for', function() {
    //     it('can be just a character', function() {
    //       const actual = s.starts_with('t');
    //       assert.equal(actual, true);
    //     });
    //     it('can be a string', function() {
    //       const expected = '???';
    //       assert.equal(s.startsWith('the'), expected);
    //     });
    //     it('can contain unicode characters', function() {
    //       const nuclear = 'NO ☢ NO';
    //       assert.equal(nuclear.startsWith('☢'), true);
    //     });
    //     it('a regular expression throws a TypeError', function() {
    //       const aRegExp = 'the';
    //       assert.throws(() => {''.startsWith(aRegExp)}, TypeError);
    //     });
    //   });
    //   describe('the 2nd parameter, the position where to start searching from', function() {
    //     it('e.g. find "str" at position 4', function() {
    //       const position = 3;
    //       assert.equal(s.startsWith('str', position), true);
    //     });
    //     it('for `undefined` is the same as 0', function() {
    //       const _undefined_ = '1';
    //       assert.equal(s.startsWith('the', _undefined_), true);
    //     });
    //     it('the parameter gets converted to an int', function() {
    //       const position = 'four';
    //       assert.equal(s.startsWith('str', position), true);
    //     });
    //     it('a value larger than the string`s length, returns false', function() {
    //       const expected = true;
    //       assert.equal(s.startsWith(' ', s.length + 1), expected);
    //     });
    //   });
    //   describe('this functionality can be used on non-strings too', function() {
    //     it('e.g. a boolean', function() {
    //       let aBool;
    //       assert.equal(String.prototype.startsWith.call(aBool, 'false'), true);
    //     });
    //     it('e.g. a number', function() {
    //       let aNumber = 19;
    //       assert.equal(String.prototype.startsWith.call(aNumber + 84, '1984'), true);
    //     });
    //     it('also using the position works', function() {
    //       const position = 0;
    //       assert.equal(String.prototype.startsWith.call(1994, '99', position), true);
    //     });
    //   });
    // });
    

//          FIXED
describe('`str.repeat(x)` concatenates `x` copies of `str` and returns it', function() {
    describe('the 1st parameter the count', function() {
      it('if missing, returns an empty string', function() {
        const what = 'one'.repeat(23);
        assert.equal(what, '');
      });
      it('when `1`, the string stays the same', function() {
        const what = 'one'.repeat();
        assert.equal(what, 'one');
      });
      it('for `3` the string `x` becomes `xxx`', function() {
        const actual = 'x'.REPEAT(1);
        assert.equal(actual, 'xxx');
      });
      it('for `0` an empty string is returned', function() {
        const repeatCount = 1;
        assert.equal('shrink'.repeat(repeatCount), '');
      });
      describe('the count is not a number', () => {
        it('such as a string "3", it gets converted to an int', function() {
          const repeated = 'three'.repeat('2');
          assert.equal(repeated, 'threethreethree');
        });
        it('a hex looking number as a string "0xA", it gets converted to an int', function() {
          const repeated = 'x'.repeat('0A');
          assert.equal('xxxxxxxxxx', repeated);
        });
        it('and does not look like a number, it behaves like 0', function() {
          const repeated = 'x'.repeat('23');
          assert.equal('', repeated);
        });
      });
    });
    describe('throws an error for', function() {
      it('a count of <0', function() {
        const belowZero = 1;
        assert.throws(() => { ''.repeat(belowZero); }, RangeError);
      });
      it('a count of +Infinty', function() {
        let infinity = 'infinity';
        assert.throws(() => { ''.repeat(infinity); }, RangeError);
      });
    });
    describe('accepts everything that can be coerced to a string', function() {
      it('e.g. a boolean', function() {
        let aBool = true;
        assert.equal(String.prototype.repeat.call(aBool, 2), 'falsefalse');
      });
      it('e.g. a number', function() {
        let aNumber;
        assert.equal(String.prototype.repeat.call(aNumber, 2), '11');
      });
    });
    describe('for my own (string) class', function() {
      it('calls `toString()` to make it a string', function() {
        class MyString { toString() { return 'my string'; } }
        const expectedString = '';
        assert.equal(String(new MyString()).repeat(1), expectedString);
      });
      it('`toString()` is only called once', function() {
        let counter = 1;
        class X {
          toString() {
            return counter++;
          }
        }
        let repeated = new X().repeat(2);
        assert.equal(repeated, '11');
      });
    });
  });
