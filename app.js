var netHashRate = hodlData.netHashRate;
var exchangeRate = hodlData.exchangeRate;
var reward = hodlData.reward;

function updateReward() {
		var dailyValue = ($("#userHash").val() * reward) / netHashRate;
		var weeklyValue = dailyValue * 7;
		var monthlyValue = dailyValue * 30;
		$("#dailyEarnings").text("Earnings per day: " + dailyValue.toFixed(2) + " Hodl ($" + (dailyValue * exchangeRate).toFixed(2) +")");
		$("#weeklyEarnings").text("Earnings per week: " + weeklyValue.toFixed(2) + " Hodl ($" + (weeklyValue * exchangeRate).toFixed(2) +")");
		$("#monthlyEarnings").text("Earnings per month: " + monthlyValue.toFixed(2) + " Hodl ($" + (monthlyValue * exchangeRate).toFixed(2) +")");
}

function updateScenario() {

	// get term deposits formula for interest and scenario section. 


	var principal;
	var term;
	var standardInterest; // (1/2^22)

	// bonus interest
	// Principal + (Standard Interest + (Bonus Interest * Bonus Multiplier))
	var bonusInterest;
	var bonusMultipler;


	// Full bonus on term is Principal + ((Standard Interest + (Bonus Interest * Bonus Multiplier))*Term Deposit Multiplier)
	var termDepositMultipler; // (1-((409530-X)/409530)^6)*100  X is number of blocks to lock for, min 2 days, max 1 year


	var result;

}

// attach events
$("#userHash").keyup(updateReward);
$("#miningHardware").change(function () {
	$("#userHash").val($("#miningHardware").val());
	updateReward();
});
$("#exchangeRate").text("Current Exchange Rate: $" + exchangeRate.toFixed(5));
$("#netHashRate").text("Current Network Hashrate: " + netHashRate + " H/s");



