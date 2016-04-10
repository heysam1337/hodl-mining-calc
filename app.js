// replace these with updating numbers 

var tempNetHashRate = 194000; 
var tempReward = 28050; // daily coins generated on the network
var tempExchangeRate = 0.02;

var netHashRate = tempNetHashRate;
var exchangeRate = tempExchangeRate;
var reward = tempReward;

$("#userHash").keyup(function () {
	var dailyValue = ($("#userHash").val() * reward * exchangeRate) / netHashRate;
	var weeklyValue = dailyValue * 7;
	var monthlyValue = dailyValue * 30;
	$("#dailyEarnings").text("Earnings per day: $" + dailyValue.toFixed(2));
	$("#weeklyEarnings").text("Earnings per week: $" + weeklyValue.toFixed(2));
	$("#monthlyEarnings").text("Earnings per month: $" + monthlyValue.toFixed(2));
});


