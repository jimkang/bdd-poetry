function BDDize(poemText) {
  var BDDpoem = '';
  var titleAndBody = poemText.split('\n\n');
  if (titleAndBody.length > 0) {
    debugger;
    var body = titleAndBody[titleAndBody.length - 1];
    var lines = body.split('\n');
    if (lines.length === 3) {
      BDDpoem += ('GIVEN: ' + lines[0] + '\n');
      BDDpoem += ('WHEN: ' + lines[1] + '\n');
      BDDpoem += ('THEN: ' + lines[2]);
    }
  }
  return BDDpoem;
}

module.exports = BDDize;
