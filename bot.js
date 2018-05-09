const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

const commandPrefix = "!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(updateStatus, 120000); // update status every 2 minutes
});
/*
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
*/
client.on('message', (message)=> {
    if(!message.content.startsWith(commandPrefix)) return;
    const args = message.content.slice(commandPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
       
    switch(command){
    	case "hello":
			hello(message);
    	break;
    	case "help":
			help(message);
    	break;
    	case "ping":
			sendText(message, "Pong");
    	break;
    	case "clear":
    		clear(message);
    	break;
    	case "cmc":
    		coinmarketcap(message);
    	break;
    	case "c":
    		chart(message, args);
    	break;
    	case "p":
    		price(message, args);
    	break;
    	case "kimochi":
            sendText(message, ":banana: Ứ Ứ :banana:");
        break;
        case "kin":
            sendText(message, "Xấu Trai VL :heart:");
        break;
            case "nhung":
            sendText(message, ":banana: Dành cả thanh xuân để chăn chuối http://bit.ly/2rgeY8A ").then(msg => {msg.delete(10000)});
            break;
            case "henry":
            sendText(message, ":shallow_pan_of_food: Chuyên bán cơm cháy, khô bò gà uy tín chất lượng, liên hệ Hotine : 0902.018.408 :shallow_pan_of_food:");
            break;
            case "andy":
            sendText(message, ":eggplant::bento: Summer Shop - Chuyên kinh doanh hàng Nhật các loại :bento: :eggplant:");
            break;
            case "akin":
            sendText(message, ":banana: assmin đẹp zai kinh hoàng :banana:");
            break;
            case "bond":
            sendText(message, "Chuyên Tour :desert: DUBAI – Trung đông huyền ảo - Tour Úc mua nhà cho các thánh coin :rocket:");
            break;
            case "tony":
            sendText(message, ":banana: Đẹp trai thanh lịch vô địch khắp vũ trụ :banana:");
            break;
            case "zuzu":
            sendText(message, ":heart: Yêu thương :banana: Ry vô bờ bến http://bit.ly/2jqF0mc ");
            break;
            case "mg":
            sendText(message, "Margin :boom: bay luôn tài khoản :pig:");
            break;
            case "pis":
            sendText(message, " :hatched_chick: Dành cả thanh xuân để đợi khô gà :hatched_chick:");
            break;
            case "fomo":
            sendText(message, " http://bit.ly/2KaE6GK ");
            
            break;
            case "tailieu":
            sendText(message, " http://bit.ly/2HVmFJs ");
            break;
            case "hayaku":
            sendText(message, " Hayakuuu Hayakuuu - nhanh lên a ơi , nhanh lên!!! ");
            break;
            case "kande":
            sendText(message, " cắn em đi, cắn em đi!!! ");
            break;
            case "choem":
            sendText(message, " Chờ em đến độ hoa cũng héo tàn =)) http://bit.ly/2Kh30Va ");
            break;
            case "pump":
            sendText(message," http://bit.ly/2JR73qf ");
            break;
            case "nghiemtuc":
            sendText(message, " http://bit.ly/2Id2zNs ");
            break;
            case "target":
            sendText(message," http://bit.ly/2IdruAg ");
            break;
            case "angi":
            sendText(message," http://bit.ly/2JOHMgb ");
            break;
            case "dudinh":
            sendImage(message," http://bit.ly/2rhyLWh ");
            break;
            case "allin":
            sendImage(message,"http://bit.ly/2jpJmKf ");
            break;
    	default:
    		sendText(message, "Không có command này.")
    	break;
    }
});

// client.login(process.env.BOT_TOKEN);
client.login('NDQyMDAyMTAyODAyMzE3MzMz.DdMfbw.3eV-Qk5N2TpDIDgatQb1ILeD0Hc');

function hello(message){
	message.channel.send("Hello " + message.author + "! Nice to meet you. :smiley: ");
}
function help(message){
	 let embed = new Discord.RichEmbed()
            
            .setAuthor("Hello world", "http://icons.iconarchive.com/icons/froyoshark/enkel/256/Bitcoin-icon.png")
            .addField("!hello", "Sends a friendly message!")
            .addField("!help", "Sends this help embed")
            .addField("!cmc", "Coin Market Cap")
            .addField("!ping", "Ping")
            .addField("!p", "Price of coin. Ex: BTCUSDT or price BTC")
            .setTitle("Bot commands:")
            .setFooter("Here you have all bot commands you can use!")
            .setColor("AQUA");        
        message.channel.send({embed: embed});
}
function sendText(message, text){
	message.channel.send(text).then(msg=>{msg.delete(10000)}); 
    message.delete(12000);
}
function sendImage(message, text){
	message.channel.send(text).then(msg=>{msg.delete(10000)}); 
    message.delete(12000);
}
function clear(message){
	if (message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.fetchMessages()
           .then(function(list){
                message.channel.bulkDelete(list);
            }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
    }
    else{
    	console.log("You don't have permission");
    }
}
function coinmarketcap(message){
	    let url = 'https://api.coinmarketcap.com/v2/global/';	
		let bitcoin_percentage_of_market_cap='';
		let total_market_cap= '';
		let total_volume_24h = '';
		let last_updated = '';
		fetch(url)
    	.then(res => res.json())
    	.then(json => {
    		// console.log(json);
    		bitcoin_percentage_of_market_cap =  json.data.bitcoin_percentage_of_market_cap;
    		total_market_cap = json.data.quotes.USD.total_market_cap;
 			total_volume_24h = json.data.quotes.USD.total_volume_24h;
 			last_updated = json.data.last_updated;
			
 			let embed = new Discord.RichEmbed()
 			.setAuthor("Coinmarketcap", "http://icons.iconarchive.com/icons/froyoshark/enkel/256/Bitcoin-icon.png")
            .addField("Market Cap (USD):", numberFormat(total_market_cap))
            .addField("24h Vol (USD): ", numberFormat(total_volume_24h))
            .addField("BTC Dominance(%): ", bitcoin_percentage_of_market_cap)            
            .setFooter("Last Updated: " + timeConverter(last_updated))
            .setColor("AQUA");

        // Send the embed with message.channel.send()
        message.channel.send({embed: embed}).then(msg=>{msg.delete(10000)}); 
        message.delete(12000);       
    	});    	 
}
function chart(message, args) {
	message.channel.send("https://www.tradingview.com/x/tyjGqnJE/");
}
function price(message, args){
	let symbol = args[0];
	if(!symbol) {
		message.channel.send('Command invalid parameter. Ex: btcusdt').then(msg=>{msg.delete(10000)});
		message.delete(12000);  	
	}else{
	let url = 'https://www.binance.com/api/v1/ticker/24hr';
	symbol = symbol.toUpperCase();
	fetch(url)
    	.then(res => res.json())
    	.then(json => {    		
    		for(i in json){	
    			let obj = json[i];
    			if(obj.symbol.startsWith(symbol)){
    				let price = `${obj.symbol} : ${obj.lastPrice}`;
    				let change = `${obj.priceChange} (${obj.priceChangePercent}%)`;
    				let vol = `${obj.volume}`;
    				let embed = new Discord.RichEmbed()
		 			.setAuthor("Binance", "https://seeklogo.com/images/B/binance-coin-bnb-logo-97F9D55608-seeklogo.com.png")
		            .addField("Price:", price) 
		            .addField("Change:", change) 
		            .addField("Vol:", vol)            
		            .setFooter("")
		            .setColor("AQUA");
    				message.channel.send({embed: embed}).then(msg=>{msg.delete(10000)}); 
    				message.delete(12000); 	
    				break;
    			}			    
			}   			
    	}); 
    }   
}
/* Hellper */
function updateStatus() {
    let url = 'https://api.coinmarketcap.com/v2/global/';	
		let bitcoin_percentage_of_market_cap='';
		let total_market_cap= '';
		let total_volume_24h = '';
		let last_updated = '';
		fetch(url)
    	.then(res => res.json())
    	.then(json => {    		
    		bitcoin_percentage_of_market_cap =  json.data.bitcoin_percentage_of_market_cap;
    		total_market_cap = json.data.quotes.USD.total_market_cap; 				
			let cap = total_market_cap/1000000000;
           client.user.setPresence(
            {   game:
                { 
                    name: `Mkt. cap: $${numberFormat(cap)}B` },                     
                    url: 'https://coinmarketcap.com/',
                    type: 1
                }
            
            );
    	});    	 
        
}
function numberFormat(x) {
    x = Math.round(x * 100) / 100;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ', ' + hour + ':' + min + ':' + sec ;
  return time;
}