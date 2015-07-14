var dropEndPuncRegex = /\W$/;
var dropEndPoemText = / poem$/;
var specialTenseRegex = /^(\w+)(:?ing|ed|s) /;
var getSpatialPreposition = require('get-spatial-preposition');

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

      var line3 = removeSpatialPrepositionFromStartOfLine(lines[2]);
      bddPoem += ('THEN: ' + line3.replace(specialTenseRegex, '$1 '));
    }
  }
  return bddPoem;
}

function removeSpatialPrepositionFromStartOfLine(line) {
  var newLine = line;
  var words = line.split(' ');
  if (words.length > 0) {
    var startWord = words[0];
    if (getSpatialPreposition(startWord)) {
      newLine = words.slice(1).join(' ');
    }
  }
  return newLine;
}

module.exports = BDDize;
