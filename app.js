// replace these with updating numbers, valid on 2016-04-11
var tempNetHashRate = 126700; 
var tempReward = 28050; // daily coins generated on the network
var tempExchangeRate = 0.018;

var netHashRate = tempNetHashRate;
var exchangeRate = tempExchangeRate;
var reward = tempReward;

function updateReward() {
		var dailyValue = ($("#userHash").val() * reward) / netHashRate;
		var weeklyValue = dailyValue * 7;
		var monthlyValue = dailyValue * 30;
		$("#dailyEarnings").text("Earnings per day: " + dailyValue.toFixed(2) + " Hodl ($" + (dailyValue * exchangeRate).toFixed(2) +")");
		$("#weeklyEarnings").text("Earnings per week: " + weeklyValue.toFixed(2) + " Hodl ($" + (weeklyValue * exchangeRate).toFixed(2) +")");
		$("#monthlyEarnings").text("Earnings per month: " + monthlyValue.toFixed(2) + " Hodl ($" + (monthlyValue * exchangeRate).toFixed(2) +")");
}

// attach events
$("#userHash").keyup(updateReward);

