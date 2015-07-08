var test = require('tape');
var BDDize = require('../bddize');

var testCases = [
  {
    poem: 'His death poem:\n\n        A bath when you\'re born,\n        a bath when you die,\n        how stupid.',
    expected: 'Scenario: His death\nGIVEN:         A bath when you\'re born\nWHEN:         a bath when you die\nTHEN:         how stupid.'
  },
  {
    poem: "In the thicket's shade\na woman by herself\nsinging the rice-planting song.",
    expected: "GIVEN: In the thicket's shade\nWHEN: a woman by herself\nTHEN: sing the rice-planting song."
  },
  {
    poem: "Napped half the day;\nno one \npunished me!",
    expected: "GIVEN: Napped half the day\nWHEN: no one\nTHEN: punish me!"
  },
  {
    poem: "Visiting the graves,\nthe old dog\nleads the way.",
    expected: "GIVEN: Visiting the graves\nWHEN: the old dog\nTHEN: lead the way."
  },
  {
    poem: "These sea slugs,\nthey just don't seem\nJapanese.",
    expected: "GIVEN: These sea slugs\nWHEN: they just don't seem\nTHEN: Japanese."
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
