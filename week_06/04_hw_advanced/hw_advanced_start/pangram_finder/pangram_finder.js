const PangramFinder = function (phrase) {
  this.phrase = phrase.toLowerCase();
  this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every(letter => this.phrase.includes(letter));

}

module.exports = PangramFinder;
