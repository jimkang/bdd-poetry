var dropEndPuncRegex = /\W$/g;

function BDDize(poemText) {
  var bddPoem = '';
  var titleAndBody = poemText.split('\n\n');

  if (titleAndBody.length > 0) {
    var title;
    var body = titleAndBody[titleAndBody.length - 1];

    if (titleAndBody.length > 1) {
      title = chop(titleAndBody[0], ':');
      title = chop(title, ' poem');
      bddPoem += ('Scenario: ' + title + '\n');
    }

    var lines = body.split('\n');
    if (lines.length === 3) {
      bddPoem += ('GIVEN: ' + lines[0].replace(dropEndPuncRegex, '') + '\n');
      bddPoem += ('WHEN: ' + lines[1].replace(dropEndPuncRegex, '') + '\n');
      bddPoem += ('THEN: ' + lines[2]);
    }
  }
  return bddPoem;
}

function chop(s, toDrop) {
  var dropStart = s.length - toDrop.length;
  var endChunk = s.slice(dropStart);
  if (endChunk === toDrop) {
    return s.slice(0, dropStart);
  }
  else {
    return s;
  }
}

module.exports = BDDize;
