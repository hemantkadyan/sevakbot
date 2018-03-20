
loginuser();


$("#sevakbotenglish").click(function(){
    console.log("eng");
    $("#sevakbothindi").removeClass("selectedbot");
    $("#sevakbotenglish").addClass("selectedbot");
    resetChat();
    insertChat("you","Hello! "+$("#username").html()+", Tell me how can I help you today. This is your Sevak Bot, here to help you.");
});

$("#sevakbothindi").click(function(){
   
    console.log("hindi");
    $("#sevakbotenglish").removeClass("selectedbot");
    $("#sevakbothindi").addClass("selectedbot");
    resetChat();
    insertChat("you","नमस्कार! "+$("#username").html()+", कहिये आज मैं आपकी क्या मदद कर सकता हु। आपका अपना सेवक बोट।");
});

function resetChat(){
    $("#chatside").html("");
}

Bots.push({
    "name": "sevakbothindi",
    "precatch": function(text) {
        return text;//.replace("'", " ' ").replace('"', ' " ');
    },
    "actions": [
    {
        "catch": ["greet"],
        "response": ["नमस्ते","राम राम"]
    },
    {
        "catch": ["*how are you*","*क्या हाल है*"],
        "response": [
            "मैँ ठीक हूँ धन्यवाद! तुम कैसे हो?",
            "मैं बहुत अच्छा हूँ। तुम कहो?"
        ]
    },
    
    {
        "catch": ["*आधार कार्ड कह से*","adhaar card banwana hai","adhaar card"],
        "response": [
            "अगर आपका इलाका ऑनलाइन अपॉइंटमेंट की वेबसाइट पर उपलब्ध नहीं है तो आधार कार्ड बनवानेके लिए आपको शारीरिक रूप से आपके किसी नज़दीकी आधार कार्ड केंद्र में जाना होगा। आधार कार्ड बनवानेके लिए आप ऑनलाइन अपॉइंटमेंट के बिना भी अपने किसीभी नज़दीकी आधार कार्ड केंद्र में जा सकते है। अगर आपका इलाका ऑनलाइन अपॉइंटमेंट की वेबसाइट पर उपलब्ध नहीं है तो आधार कार्ड बनवानेके लिए आपको शारीरिक रूप से आपके किसी नज़दीकी आधार कार्ड केंद्र में जाना होगा। आधार कार्ड बनवानेके लिए आप ऑनलाइन अपॉइंटमेंट के बिना भी अपने किसीभी नज़दीकी आधार कार्ड केंद्र में जा सकते है।"
        ]
    },
    {
        "catch": ["*who are you*","तुम कौन हो","आप कौन हैं"],
        "response": [
            "मैं आपका सहायक हूं।"
        ]
    },
    {
        "catch": ["greet"],
        "response": ["नमस्ते","राम राम"]
    },
    
    {
        "catch": ["*"],
        "response": [
            "समझ नहीं आया। कृपया फिर से लिखिए।"
        ]
    }
]

});

Bots.push({
    "name": "sevakbotenglish",
    "precatch": function(text) {
        return text;//.replace("'", " ' ").replace('"', ' " ');
    },
    "actions": [
    {
        "catch": ["greet"],
        "response": ["Hey!", "Hello there" ,"Hello!"]
    },
    {
        "catch": ["*how are you*"],
        "response": [
            "I am fine, you say?",
            "I am good, how about you?"
        ]
    },
    {
        "catch": ["update idType aadhaar card updateType mobile number"],
        "response": ["Updation of phone number in aadhaar goes is here."]        
    },
    {
        "catch": ["update idType aadhaar card updateType address"],
        "response": ["Updation of address in aadhaar goes is here."]        
    },
    {
        "catch": ["update idType aadhaar card updateType date of birth"],
        "response": ["Updation of date of birth in aadhaar is here."] 
    },
    {
	"catch" : ["duplicate idType aadhaar card lostCard stolen"],
	"response" : ["Please lodge an FIR first"]
},

{
	"catch" : ["duplicate idType aadhaar card"],
	"response" : ["Steps for duplicate Aadhar ID."]
},

{
	"catch" : ["duplicate idType aadhaar card lostCard misplaced"],
	"response" : ["Please lodge an FIR first"]
},

{
	"catch" : ["duplicate idType aadhaar card lostCard lost"],
	"response" : ["Please lodge an FIR first"]
},

{
	"catch" : ["duplicate "],
	"response" : ["Which document do you want to duplicate ?"]
},

{
	"catch" : ["uses idType aadhaar card"],
	"response" : ["It acts as your verified government ID"]
},

{
	"catch" : ["uses idType aadhaar card usefulness uses"],
	"response" : ["general uses of aadhaar"]
},

{
	"catch" : ["uses idType aadhaar card usefulness useful"],
	"response" : ["general uses of aadhaar"]
},

{
	"catch" : ["uses beingType common man idType aadhaar card usefulness useful"],
	"response" : ["general uses of aadhaar"]
},

{
	"catch" : ["uses beingType farmer idType aadhaar card usefulness useful"],
	"response" : [" uses of aadhaar for farmer"]
},

{
	"catch" : ["uses beingType children idType aadhaar card usefulness useful"],
	"response" : ["uses of aadhaar for children"]
},

{
	"catch" : ["uses "],
	"response" : ["Uses of which document do you wish to know ?"]
},

{
	"catch" : ["link idType aadhaar card objectType mobile number"],
	"response" : ["Visit your network operator"]
},

{
	"catch" : ["link idType aadhaar card objectType bank account"],
	"response" : ["Details for linking bank account with aadhaar"]
},

{
	"catch" : ["link idType aadhaar card"],
	"response" : ["What do you wish to link it to ?"]
},

{
	"catch" : ["link objectType bank account"],
	"response" : ["Do you want to link your aadhaar card to bank account?"]
},

{
	"catch" : ["link "],
	"response" : ["Which ID proof do you want to link ?"]
},

{
	"catch" : ["apply "],
	"response" : ["What do you want to apply for?"]
},

{
	"catch" : ["apply idType aadhaar card new new"],
	"response" : ["Steps for applying for new aadhaar"]
},

{
	"catch" : ["apply idType aadhaar card new create"],
	"response" : ["Steps for applying for new aadhaar"]
},

    
    {
        "catch": ["update updateType mobile number"],
        "response": [
            {
                "text": "Please specify the card i.e. Aadhaar, PAN, Driving License etc.",
                "actions": [
                    {
                        "catch": ["update idType aadhaar card"],
                        "response": "here you go with the steps of updating mobile number in aadhaar card",
                        "from": "{PREVIOUS}"
                    },
                    {
                        "catch": ["*"],
                        "response": "Right now we offer services related to Aadhaar card. This robust system is just a prototype and can be enhanced.",
                        "from": "{PREVIOUS}"
                    }
                    
                ]
            }
        ]
    },

    



    {
        "catch": ["*"],
        "response": [
            "Didn't get it, Please rephrase your query."
        ]
    }
]

});
