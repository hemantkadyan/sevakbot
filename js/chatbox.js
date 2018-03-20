
function sendbutton(){
			var input = $("#chatinput");
            var ajaxtext=input.val();
            
              $.ajax({
 
                // The URL for the request
                url: "http://localhost:5000/parse",
             
                // The data to send (will be converted to a query string)
                data: {
                    q:ajaxtext,
                project:"nlu2"},
                cors:false,
                // Whether this is a POST or GET request
                type: "GET",
             
                // The type of data we expect back
                dataType : "json",
            })
              // Code to run if the request succeeds (is done);
              // The response is passed to the function
              .done(function( json ) {
                if(json.intent==null){
                   for(var i=json.entities-1;i>=0;i--)
                    ajaxtext+=" "+json.entities[i].entity+" "+json.entities[i].value;
                    alert(ajaxtext);
                }


                if(json.entities[0]==null){
                 
                 ajaxtext=json.intent.name//+" "+json.entities[0].entity);
                 console.log(ajaxtext+"no entities");
                }
                else{
                    if(json.entities.length==1){
                    
                    
                    ajaxtext=json.intent.name+" "+json.entities[0].entity+" "+json.entities[0].value;
                    //console.log(ajaxtext);
                    //alert(ajaxtext);
                    }
                    else{
                        ajaxtext=json.intent.name+" "+json.entities[1].entity+" "+json.entities[1].value+" "+json.entities[0].entity+" "+json.entities[0].value;
                    }
                }

                    var selectedbot= $('.selectedbot').attr('id');
                    var r = Bots.sendMessage(selectedbot, ajaxtext, { "USER": "User" });
                                  

                    setTimeout(function() {
                        for (var i = 0; i < r.length; i++) {
                            insertChat("you",r[i]);
                        }
                    }, Math.random() * 100);
                                        
                        
                        
                            
                    var text=input.val();
                    if (text !== ""){
                    insertChat("me", text);              
                    $("input").val('');
                    }
              })
              // Code to run if the request fails; the raw request and
              // status codes are passed to the function
              .fail(function( xhr, status, errorThrown ) {
                console.log("failed");
              })
              // Code to run regardless of success or failure;
              .always(function( xhr, status ) {
                //console.log("job complete");
              });

   
}
