var Notes = require('./Game');

function noteStore() {
  this.games = {};

  // Periodically check for inactive games, and delete them
  setInterval(function(games) {
    for (key in games) {
      if (Date.now() - games[key].modifiedOn > (12 * 60 * 60 * 1000)) {
        console.log("Deleting game " + key + ". No activity for atleast 12 hours.");
        delete games[key];
      }
    }
  }, (1 * 60 * 60 * 1000), this.games);
};

noteStore.prototype.add = function(noteParams) {
  var key       = '';
  var keyLength = 7;
  var chars     = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // Generate a key until we get a unique one
  do {
    for (var i=0; i<keyLength; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    };
  } while (this.games.hasOwnProperty(key))

  // Create a new game and save using key
  this.games[key] = new Notes(noteParams
    );

  return key;
};

noteStore.prototype.remove = function(key) {
  if (this.games.hasOwnProperty(key)) {
    delete this.games[key];
    return true;
  } else {
    return false;
  }
};

noteStore.prototype.find = function(key) {
  return (this.games.hasOwnProperty(key)) ? this.games[key] : false ;
};

module.exports = noteStore;
