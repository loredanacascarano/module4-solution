var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0; i<names.length; i++) {

	var nome = names[i]
  var firstLetter = nome.charAt(0).toLowerCase();

  if (firstLetter == "j") {
    byeSpeaker.speak(nome);
  } else {
    helloSpeaker.speak(nome);
  }
}
