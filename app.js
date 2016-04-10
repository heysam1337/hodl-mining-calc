// replace these with updating numbers 

var tempNetHashRate = 194000; 
var tempReward = 28050; // daily coins generated on the network
var tempExchangeRate = 0.02;

var netHashRate = tempNetHashRate;
var exchangeRate = tempExchangeRate;
var reward = tempReward;

$("#userHash").keyup(function () {
	var dailyValue = ($("#userHash").val() * reward * exchangeRate) / netHashRate
	$("#earnings").text("$" + dailyValue.toFixed(2));
});


