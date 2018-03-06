let recog = new webkitSpeechRecognition;
let ss = speechSynthesis;
let welcome = new SpeechSynthesisUtterance('おかえりなさい');
recog.onstart = function() {
  console.log('listening');
}

recog.lang = 'ja';
recog.onresult = function(event) {
  console.log('Speech detected',event);
  let text = event.results[0][0].transcript;
  console.log(text);
  if (text.includes('ただいま')) {
    ss.speak(welcome);
  }
}
speechSynthesis.onvoiceschanged = () => {
  welcome.voice = speechSynthesis.getVoices()[18];
}

recog.start();