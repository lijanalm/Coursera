(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
  var firstLetterAny = names[i].charAt();
  var firstLetter = firstLetterAny.toLowerCase();
  if (firstLetter == "j") {
    byeSpeaker.speak(names[i])
  } else {
    helloSpeaker.speak(names[i])
  }
}
})();