var test = require('tape');
var BDDize = require('../bddize');

test('Basic test', function basicTest(t) {
  t.plan(1);

  var poem = 'His death poem:\n\n        A bath when you\'re born,\n        a bath when you die,\n        how stupid.';
  var bddPoem = BDDize(poem);
  console.log(bddPoem);

  var expectedPoem = 'GIVEN:         A bath when you\'re born\nWHEN:         a bath when you die\nTHEN:         how stupid.';

  debugger;
  t.equal(
    bddPoem,
    expectedPoem,
    'Correctly BDDizes.'
  );
});
