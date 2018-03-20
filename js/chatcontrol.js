var user="";

localforage.getItem('sevakusername').then(function(value) {
user=value;
});
var botname="Sevak Bot";

var me = {};
me.avatar = "images/user.png";

var you = {};
you.avatar = "images/bot.png";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time){
    if (time === undefined){
        time = 0;
    }
    var control = "";
    var date = formatAMPM(new Date());
    var speed=0;
    if (who == "me"){
        control =          	'<li><div class="rightside-left-chat">'+
									'<span><i class="fa fa-circle" aria-hidden="true"></i> '+user+' <small> '+date+', Today</small> </span><br><br>'+
									'<p>'+text+'</p>'
								'</div>'+
							'</li>'               
    }else{
		speed="slow";
        control = '<li><div class="rightside-right-chat">'+
									'<span><i class="fa fa-circle" aria-hidden="true"></i> '+botname+' <small> '+date+', Today</small> </span><br><br>'+
									'<p>'+text+'</p>'
								'</div>'+
							'</li>';
    }
    setTimeout(
        function(){			
            $(control).hide().appendTo("#chatside").fadeIn(speed);
			$(".right-header-contentChat").scrollTop($("#chatside").prop('scrollHeight'));
        }, time);
    
}

$("#sendbutton").click(function(){
	sendbutton();
});

$('#chatinput').keydown(function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        sendbutton();
    }
    
});