function BDDize(poemText) {
  var BDDpoem = '';
  var titleAndBody = poemText.split('\n\n');
  if (titleAndBody.length > 0) {
    debugger;
    var body = titleAndBody[titleAndBody.length - 1];
    var lines = body.split('\n');
    if (lines.length === 3) {
      BDDpoem += ('GIVEN: ' + chop(lines[0], ',') + '\n');
      BDDpoem += ('WHEN: ' + chop(lines[1], ',') + '\n');
      BDDpoem += ('THEN: ' + chop(lines[2], ','));
    }
  }
  return BDDpoem;
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
