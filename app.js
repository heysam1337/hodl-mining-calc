// replace these with current numbers 

var tempNetHashRate = 171419; 
var tempReward = 28050; // daily coins generated on the network

var netHashRate = tempNetHashRate;
var reward = tempReward;

// earnings per day
//function calcReward(){
	//$("#earnings").text($("userHash").value * reward / netHashRate);
	//$("#earnings").text($("userHash").val);
	//alert ("incalc");
//}


$("#userHash").keyup(function () {
	var temp = $(this).val()
	$("#earnings").text(temp * reward / netHashRate);
});


