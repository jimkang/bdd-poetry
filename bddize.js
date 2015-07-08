var dropEndPuncRegex = /\W$/;
var dropEndPoemText = / poem$/;
var specialTenseRegex = /^(\w+)(:?ing|ed|s) /;

function BDDize(poemText) {
  var bddPoem = '';
  var titleAndBody = poemText.split('\n\n');

  if (titleAndBody.length > 0) {
    var title;
    var body = titleAndBody[titleAndBody.length - 1];

    if (titleAndBody.length > 1) {
      title = titleAndBody[0].replace(dropEndPuncRegex, '');
      title = title.replace(dropEndPoemText, '');
      bddPoem += ('Scenario: ' + title + '\n');
    }

    var lines = body.split('\n');
    if (lines.length === 3) {
      bddPoem += ('GIVEN: ' + lines[0].replace(dropEndPuncRegex, '') + '\n');
      bddPoem += ('WHEN: ' + lines[1].replace(dropEndPuncRegex, '') + '\n');
      bddPoem += ('THEN: ' + lines[2].replace(specialTenseRegex, '$1 '));
    }
  }
  return bddPoem;
}

module.exports = BDDize;
