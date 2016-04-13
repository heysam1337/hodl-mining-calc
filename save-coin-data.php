<?php

	$ch1 = curl_init();
	curl_setopt_array($ch1, array(
    	CURLOPT_RETURNTRANSFER => 1,
    	CURLOPT_URL => 'http://yobit.net/api/3/ticker/hodl_btc',
    	CURLOPT_USERAGENT => 'HodlCoin Miner'
	));

	$resp1 = json_decode(curl_exec($ch1));
	
	curl_close($ch1);

	$ch2 = curl_init();
	curl_setopt_array($ch2, array(
    	CURLOPT_RETURNTRANSFER => 1,
    	CURLOPT_URL => 'http://yobit.net/api/3/ticker/btc_usd',
    	CURLOPT_USERAGENT => 'HodlCoin Miner'
	));
	
	$resp2 = json_decode(curl_exec($ch2));

	curl_close($ch2);

	$exchangeRate = $resp1->hodl_btc->last * $resp2->btc_usd->last;

	$file = 'hodldata.js';
	$data = 'var hodlData = {"netHashRate":197435,"exchangeRate":'. $exchangeRate . ',"reward":28050};';
	file_put_contents($file, $data, LOCK_EX);
?>