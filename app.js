var netHashRate = hodlData.netHashRate;
var reward = hodlData.reward;
var currentBlock = hodlData.lastBlock;
var exchangeHODLBTC = hodlData.exchangeHODLBTC;
var exchangeBTCUSD = hodlData.exchangeBTCUSD;
var exchangeHODLUSD =  exchangeHODLBTC * exchangeBTCUSD ;

function updateReward() {
		var dailyValue = ($("#userHash").val() * reward) / netHashRate;
		var weeklyValue = dailyValue * 7;
		var monthlyValue = dailyValue * 30;
		$("#dailyEarnings").text("Earnings per day: " + dailyValue.toFixed(2) + " Hodl ($" + (dailyValue * exchangeHODLUSD).toFixed(2) +")");
		$("#weeklyEarnings").text("Earnings per week: " + weeklyValue.toFixed(2) + " Hodl ($" + (weeklyValue * exchangeHODLUSD).toFixed(2) +")");
		$("#monthlyEarnings").text("Earnings per month: " + monthlyValue.toFixed(2) + " Hodl ($" + (monthlyValue * exchangeHODLUSD).toFixed(2) +")");
}

function updateScenario() {

	// get term deposits formula for interest and scenario section. 
	// https://bitcointalk.org/index.php?topic=1317918.0
    var blockTime = 154; // in seconds
    var blocksPerDay = (24*60*60) / 154; // 561.038961

	var principal; // initial investment, get from form
	var term; // in days, get from form
	var blocksDuringTerm = blocksPerDay * term;

	// compound interest forumla: A = P ( 1+r ) ^ t
	var standardInterestRate = Math.pow(0.5,22); // (1/2^22) compounded every block	
	var standardInterestDuringTerm = (principal * Math.pow(1 + standardInterestRate, blocksDuringTerm)) - principal;


	// bonus interest
	// Principal + (Standard Interest + (Bonus Interest * Bonus Multiplier))
	var bonusInterest; // Compounded, the rate is 2174%. It's reduced every block by a multiplier - calculated like this =((409530-X)/409530)^4 (X is the block where the balance is recorded as an output).
	var maxBonusRate = Math.pow(0.5,16);
	var bonusMultipler = Math.pow(((409530 - currentBlock) / 409530), 4);
	var bonusInterestDuringTerm = (principal * Math.pow(1 + maxBonusRate * bonusMultipler, blocksDuringTerm)) - principal; 

	// Full bonus on term is Principal + ((Standard Interest + (Bonus Interest * Bonus Multiplier))*Term Deposit Multiplier)
	var termDepositMultipler = (1-((409530-blocksDuringTerm)/409530)^6)*100;  // (1-((409530-X)/409530)^6)*100  X is number of blocks to lock for, min 2 days, max 1 yearm
	var effectiveBonus = (standardInterestDuringTerm + bonusInterestDuringTerm) * termDepositMultipler;
	var depositInterestDuringTerm = effectiveBonus - standardInterestDuringTerm - bonusInterestDuringTerm;

	var totalCoins = principal + effectiveBonus;

	var futureExchangeScenario; // get from form
	var futureValue = totalCoins * futureExchangeScenario;
 
	var scenarioText = "Under this scenario you will have " + totalCoins + " Hodl with a total USD value of $" + futureValue;  

}

// attach events
$("#userHash").keyup(updateReward);
$("#miningHardware").change(function () {
	$("#userHash").val($("#miningHardware").val());
	updateReward();
});

var netInfoString = "<b>Exchange Rate:</b> $" + exchangeHODLUSD.toFixed(5);
netInfoString = netInfoString + "<br /><b>HODL to BTC:</b> " + exchangeHODLBTC.toFixed(8);
netInfoString = netInfoString + "<br /><b>BTC to USD:</b> $" + exchangeBTCUSD.toFixed(2);
netInfoString = netInfoString + "<br /><br /><b>Current Block:</b> " + currentBlock;
netInfoString = netInfoString + "<br /><b>Network Hashrate:</b> " + netHashRate;


$("#networkInfo").html(netInfoString);

$("#exchangeRate").html("Exchange Rate: $" + exchangeHODLUSD.toFixed(5) + "<br /> (HODL to BTC: " + exchangeHODLBTC.toFixed(8) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BTC to USD:" + exchangeBTCUSD.toFixed(2) +")");




