var request = require('request');

(function updateInfo() {
    request("http://www.bitstamp.net/api/ticker/", function(error, response, body){
		jsonInfo = JSON.parse(body);
		console.log(jsonInfo);
		priceStats(jsonInfo);
	});
    setTimeout(updateInfo, 10000); // Refresh every 10 seconds
})();

function priceStats(arr){
	document.getElementById("priceUsd").innerHTML = "Last: "+arr['last']+" $";
	document.getElementById("volume").innerHTML = "Volume 24h: "+arr['volume']+" ฿";
	document.getElementById("bid").innerHTML = arr['bid']+" $";
	document.getElementById("ask").innerHTML = arr['ask']+" $";
}

// Close app button. You can already use cmd+Q
const remote = require('electron').remote;
document.getElementById("quit").addEventListener("click", function (e) {
   var window = remote.getCurrentWindow();
   window.close();
});