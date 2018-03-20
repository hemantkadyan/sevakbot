
var btnLogout = document.getElementById("logout");
btnLogout.onclick = function() {
        localforage.removeItem('sevakusername').then(function() {
    // Run this code once the key has been removed.
    $("#logout").hide();
    $("#username").html("Your Name");
    alert("Logout Successful");
    $("#chatside").html("");
    loginuser();
	}).catch(function(err) {
	    // This code runs if there were any errors
	    alert("Failed to logout. Please try again.");
	});	
}
