var test = require('tape');
var BDDize = require('../bddize');

var testCases = [
  {
    poem: 'His death poem:\n\n        A bath when you\'re born,\n        a bath when you die,\n        how stupid.',
    expected: 'Scenario: His death\nGIVEN:         A bath when you\'re born\nWHEN:         a bath when you die\nTHEN:         how stupid.'
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test('Basic test', function basicTest(t) {
    t.plan(1);

    var bddPoem = BDDize(testCase.poem);
    console.log(bddPoem);

    t.equal(bddPoem, testCase.expected, 'Correctly BDDizes.');
  });
}
