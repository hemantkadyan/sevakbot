function loginfailed(){

    // Get the modal
    var modal = document.getElementById('myModal');
    var logcount=0;
    // Get the main container and the body
    var body = document.getElementsByTagName('body');
    var container = document.getElementById('myContainer');

    // Get the close button
    var btnClose = document.getElementById("closeModal");
    var submitbtn=document.getElementById("yournamesubmit");

    // Open the modal
        modal.className = "Modal is-visuallyHidden";
        setTimeout(function() {
          container.className = "MainContainer is-blurred";
          modal.className = "Modal";
        }, 100);
        container.parentElement.className = "ModalOpen";
        $("#yourname").focus(); 
    
    //Login Form Validation
    function loginvalidate(){
        var yourname = $("#yourname").val();
          if(logcount==0){  
            if(confirm('SevakBot will call you "'+yourname+'". Is it okay?')){
                $("#username").html(yourname);
                //console.log("sevakusername");
                if($(".selectedbot").attr('id')=="sevakbothindi"){
                insertChat("you","नमस्कार! "+$("#username").html()+", कहिये आज मैं आपकी क्या मदद कर सकता हु। आपका अपना सेवक बोट।");
                }
                else{insertChat("you","Hello! "+$("#username").html()+", Tell me how can I help you today. This is your Sevak Bot, here to help you.");
                }

                logcount=logcount+1;
                $("#logout").show();
                localforage.setItem('sevakusername', yourname).then(function (value) {
                    // Do other things once the value has been saved.
                    console.log(value);
                }).catch(function(err) {
                    // This code runs if there were any errors
                    console.log(err);
                });

            modal.className = "Modal is-hidden";
            body.className = "";
            container.className = "MainContainer";
            container.parentElement.className = "";
          }
          else{

          }
        }
    }


    $('#yourname').keydown(function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        loginvalidate();
        }
    });
    // Close the modal
    btnClose.onclick = function() {
        loginvalidate();
    }

    // Close the modal
    submitbtn.onclick = function() {
        loginvalidate();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
           loginvalidate();
        }
    }

}

function loginsuccess(value){
    if(value==null){
        alert("Illegal Login Attempt");
    }
    else{
        $("#username").html(value);
        

        if($(".selectedbot").attr('id')=="sevakbothindi"){
                insertChat("you","नमस्कार! "+$("#username").html()+", कहिये आज मैं आपकी क्या मदद कर सकता हु। आपका अपना सेवक बोट।");
                }
                else{insertChat("you","Hello! "+$("#username").html()+", Tell me how can I help you today. This is your Sevak Bot, here to help you.");
                }
    }
}

function loginuser(){
    localforage.getItem('sevakusername').then(function(value) {
        if(value==null){
            loginfailed();
        }
        else{
            $("#logout").show();
            loginsuccess(value);
        }
    }).catch(function(err) {
        // This code runs if there were any errors
        alert("Error Encountered in Local Storage. Please restart your browser.")
    });

}
