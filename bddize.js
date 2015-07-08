function BDDize(poemText) {
  var BDDpoem = '';
  var titleAndBody = poemText.split('\n\n');
  if (titleAndBody.length > 0) {
    debugger;
    var body = titleAndBody[titleAndBody.length - 1];
    var lines = body.split('\n');
    if (lines.length === 3) {
      BDDpoem += ('GIVEN: ' + chopComma(lines[0]) + '\n');
      BDDpoem += ('WHEN: ' + chopComma(lines[1]) + '\n');
      BDDpoem += ('THEN: ' + chopComma(lines[2]));
    }
  }
  return BDDpoem;
}

function chopComma(s) {
  if (s.charAt(s.length - 1) === ',') {
    return s.slice(0, s.length - 1);
  }
  else {
    return s;
  }
}

module.exports = BDDize;
