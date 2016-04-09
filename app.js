// replace these with current numbers 
var tempNetHashRate = 171419; 
var tempReward = 28050; // daily coins generated on the network

var netHashRate = tempNetHashRate;
var reward = tempNetward;

// earnings per day
function calcReward(){
	$("#earnings").text($("userHash").value * reward / netHashRate);
}

$("#userHash").change(alert("changed"));
//$("#userHash").change(calcReward());

alert("changed");
