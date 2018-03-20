function Speech(language) {
  if ('webkitSpeechRecognition' in window) {
    // creating voice capture object
    this.recognition = new webkitSpeechRecognition();

    // settings
    this.recognition.continuous = false; // stop automatically
    this.recognition.interimResults = true;

    this.startCapture = function() {
      $('#recbtn').removeClass('fa-microphone-slash');
      $('#recbtn').addClass('fa-microphone');
      this.recognition.lang=language;
      this.recognition.start();
      
    }

    this.stopCapture = function() {
      $('#recbtn').removeClass('fa-microphone');
      $('#recbtn').addClass('fa-microphone-slash');
      this.recognition.stop();
      
    }

    this.recognition.onresult = function(event) {
      //console.log(event.results[0][0].transcript);
      $('#chatinput').val(event.results[0][0].transcript);

    }

    this.recognition.onerror = function(event) {
      console.log(event.error);
    }

    console.log("webkitSpeechRecognition is available.");
  } else {
    console.log("webkitSpeechRecognition is not available.");
  }
}
