$( document ).ready(function() {
	

});
	function sevaklisten(){

		console.log('Starting SpeechRecognition library.');
	if ($('.selectedbot').attr('id') == "sevakbothindi") {
			var speech = new Speech('hi-IN');
			
		}
		else {
			var speech = new Speech('en-IN');
			
		}
	//var englishspeech = new Speech("en-IN");
    speech.recognition.onstart = function() {
		

		$('#capture').val("false");
		
    	console.log('Listening started...');
    }

	speech.recognition.onend = function() {
		
		$('#capture').val("true");
		
    	console.log('Listening stopped.');
    	var chattext=$('#chatinput').val();
      	console.log(chattext);
      	insertChat("me",chattext);
      	sendbutton();
      	$('#chatinput').val("");
    }




		

			if ($('#capture').val() == "true") {
				speech.startCapture();
			}
			else {
				speech.stopCapture();
			}
}