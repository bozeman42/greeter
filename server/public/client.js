let recog = new webkitSpeechRecognition;
let ss = speechSynthesis;
let welcome = new SpeechSynthesisUtterance('おかえりなさい');
let result = document.getElementById('result');

recog.lang = 'ja-JP';
recog.onresult = function(event) {
  let text = event.results[0][0].transcript;
  result.textContent = text;
  if (text.includes('ただいま')) {
    ss.speak(welcome);
  }
}
speechSynthesis.onvoiceschanged = () => {
  welcome.voice = speechSynthesis.getVoices()[18];
}

recog.start();