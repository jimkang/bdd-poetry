var config = require('./config');
var callNextTick = require('call-next-tick');
var Twit = require('twit');
var async = require('async');
var BDDize = require('./bddize');
var jsonfile = require('jsonfile');
var probable = require('probable');

var dryRun = false;
if (process.argv.length > 2) {
  dryRun = (process.argv[2].toLowerCase() == '--dry');
}

var twit = new Twit(config.twitter);
var poems = jsonfile.readFileSync(__dirname + '/data/kobayashi-issa.json');

async.waterfall(
  [
    makeBDDPoem,
    postTweet
  ],
  wrapUp
);

function makeBDDPoem(done) {
  var poem = probable.pickFromArray(poems);  
  callNextTick(done, null, BDDize(poem));
}

function postTweet(text, done) {
  if (dryRun) {
    console.log('Would have tweeted:', text);
    callNextTick(done);
  }
  else {
    var body = {
      status: text
    };
    twit.post('statuses/update', body, done);
  }
}

function wrapUp(error, data) {
  if (error) {
    console.log(error, error.stack);

    if (data) {
      console.log('data:', data);
    }
  }
}
