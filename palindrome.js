// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a phrase object
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }
  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
  return this.processedContent === reverse(this.processedContent);
  }
  // Makes the phrase LOUDER.
  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}

TranslatedPhrase.prototype = new Phrase();
