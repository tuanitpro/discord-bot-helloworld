// credits: github.com/n3onis

const discord = require("discord.js"); // thanks @hydrabolt
// const coinmarketcap = require('./coinmarketcap-fetch.js'); // github.com/n3onis/coinmarketcap-fetch
// const auth = require('./auth.json');

const client = new discord.Client();

// const cmc = new coinmarketcap();
//const Simsimi = require('simsimi');
var prefix = '?';

client.on('ready', () => {
  console.log( `Logged in as ${client.user.tag}!` );
  setInterval(updateStatus, 120000); // update status every 2 minutes
});

client.on('message', msg => {
		
  	if ( msg.content.substring(0, 1) == prefix ) {
        var args = msg.content.substring(1).split(' ');
        var cmd = args[0];
        console.log(`Requested '${cmd}'. (${msg.guild.name}#${msg.channel.name} - ${msg.guild.id})`);
       
        args = args.splice(1);
        switch(cmd) {

            case 'help':

                msg.channel.send('help').then(msg => {msg.delete(1000)});
                

            break;

        	//case 'prefix':

                // if( args[0] == undefined || args[0].length != 1 ) {
                //     msg.channel.send( `Usage: \`${prefix}prefix []\`.` );

                // } else {
                //     prefix = args[0];
                //     msg.channel.send( `Prefix changed to \`${prefix}\`.` );
                // }
               // msg.channel.send( `Command temporarily disabled due to a bug.` );

            //break;
//////////////////////////////////
            case "kimochi":
            msg.channel.send(":banana: Ứ Ứ :banana:");
            break;
            case "kin":
            msg.channel.send("Xấu Trai VL :heart:");

            break;
            case "nhung":
            msg.channel.send(":banana: Dành cả thanh xuân để chăn chuối http://bit.ly/2rgeY8A ").then(msg => {msg.delete(10000)});
            break;
            case "henry":
            msg.channel.send(":shallow_pan_of_food: Chuyên bán cơm cháy, khô bò gà uy tín chất lượng, liên hệ Hotine : 0902.018.408 :shallow_pan_of_food:");
            break;
            case "andy":
            msg.channel.send(":eggplant::bento: Summer Shop - Chuyên kinh doanh hàng Nhật các loại :bento: :eggplant:");
            break;
            case "akin":
            msg.channel.send(":banana: assmin đẹp zai kinh hoàng :banana:");
            break;
            case "bond":
            msg.channel.send("Chuyên Tour :desert: DUBAI – Trung đông huyền ảo - Tour Úc mua nhà cho các thánh coin :rocket:");
            break;
            case "tony":
            msg.channel.send(":banana: Đẹp trai thanh lịch vô địch khắp vũ trụ :banana:");
            break;
            case "zuzu":
            msg.channel.send(":heart: Yêu thương :banana: Ry vô bờ bến http://bit.ly/2jqF0mc ").then(msg => {msg.delete(10000)});
            break;
            case "mg":
            msg.channel.send("Margin :boom: bay luôn tài khoản :pig:");
            break;
            case "pis":
            msg.channel.send(" :hatched_chick: Dành cả thanh xuân để đợi khô gà :hatched_chick:");
            break;
            case "fomo":
            msg.channel.send(" http://bit.ly/2KaE6GK ").then(msg => {msg.delete(10000)});
            msg.delete(12000);
            break;
            case "tailieu":
            msg.channel.send(" http://bit.ly/2HVmFJs ").then(msg => {msg.delete(10000)});
            break;
            case "hayaku":
            msg.channel.send(" Hayakuuu Hayakuuu - nhanh lên a ơi , nhanh lên!!! ");
            break;
            case "kande":
            msg.channel.send(" cắn em đi, cắn em đi!!! ");
            break;
            case "choem":
            msg.channel.send(" Chờ em đến độ hoa cũng héo tàn =)) http://bit.ly/2Kh30Va ").then(msg => {msg.delete(10000)});
            break;
            case "pump":
            msg.channel.send(" http://bit.ly/2JR73qf ").then(msg => {msg.delete(10000)});
            break;
            case "nghiemtuc":
            msg.channel.send(" http://bit.ly/2Id2zNs ").then(msg => {msg.delete(10000)});
            break;
            case "target":
            msg.channel.send(" http://bit.ly/2IdruAg ").then(msg => {msg.delete(10000)});
            break;
            case "angi":
            msg.channel.send(" http://bit.ly/2JOHMgb ").then(msg => {msg.delete(15000)});
            break;
            case "dudinh":
            msg.channel.send(" http://bit.ly/2rhyLWh ").then(msg => {msg.delete(15000)});
            break;
            case "allin":
            msg.channel.send(" http://bit.ly/2jpJmKf ").then(msg => {msg.delete(1000)});
msg.delete(2000);
            break;
            case "ping":
              msg.channel.send("Pong").then(msg=>{msg.delete(1000)}); 
        msg.delete(2000);
            break;
  /////////////////////////
  			//TALK
///////////////////////////

			/*case 't':

                if( !args[0] ) {
                    args[0] = 10;
                }
                
                var chunk = '';
                cmc.getall(coins => {
                	for( var i = 0; i < args[0]; i++ ) {
                		chunk += `${i+1}. **${coins[i]['name']}** - $${coins[i]['price_usd']}    **Δ** *${coins[i]['percent_change_24h']}%*\n`;
                	}

                	msg.channel.send({
	                	embed: {
	                		color: 3447003,
	                		fields: [
	                			{
	                				name: `Top ${args[0]} coins`,
	                				value: chunk,
	                				inline: true
	                			},
	                		],
	                	},
                	});
                });

            break;*/
//////////////////////////
          /* case 'p':

            	if(args[0]) {
	                cmc.get( args[0], coin => {
	                	if(coin) {
	                		var price_usd = coin['price_usd'];
	                		msg.channel.send( `${coin['symbol']} price: $${price_usd}` );
	                	} else {
	                		msg.channel.send( 'Not found.' );
	                	}
	                });
            	} else {
            		msg.channel.send('Undefined symbol.');
            	}
                
            break;

            case 'top':

                if( !args[0] ) {
                    args[0] = 10;
                }
                
                var chunk = '';
                cmc.getall(coins => {
                	for( var i = 0; i < args[0]; i++ ) {
                		chunk += `${i+1}. **${coins[i]['name']}** - $${coins[i]['price_usd']}    **Δ** *${coins[i]['percent_change_24h']}%*\n`;
                	}

                	msg.channel.send({
	                	embed: {
	                		color: 3447003,
	                		fields: [
	                			{
	                				name: `Top ${args[0]} coins`,
	                				value: chunk,
	                				inline: true
	                			},
	                		],
	                	},
                	});
                });

            break;

            case 'c':

            if(args[0]) {

                cmc.get('eth', ethereum => {
                var price_eth_btc = ethereum['price_btc'];

            	cmc.get(args[0], coin => {

                    if(coin) {
                        var name = coin['name'];
                        var rank = coin['rank'];
                        var price_usd = `$${coin['price_usd']}`;
                        var price_btc = `${coin['price_btc']} BTC`;
                        var price_eth = `${Math.round(coin['price_btc'] / price_eth_btc * 100000000) / 100000000} ETH`;
                        var volume = `$${numberFormat(coin['24h_volume_usd'])}`;
                        var m_cap = `$${numberFormat(coin['market_cap_usd'])}`;
                        //var avail_supply = numberFormat(coin['available_supply']);
                        //var total_supply = numberFormat(coin['total_supply']);
                        //var max_supply = numberFormat(coin['max_supply']);
                        var change_1h = `${coin['percent_change_1h']}%`;
                        var change_24h = `${coin['percent_change_24h']}%`;
                        var change_7d = `${coin['percent_change_7d']}%`;

                        //if(max_supply == null || max_supply == 0) {
                            //max_supply = '--';
                        //}

                        //var chunk = `**Rank**: ${rank} \n\n**Price USD**: ${price_usd} \n**Price BTC**: ${price_btc} \n**Price ETH**: ${price_eth} \n\n**Volume 24h**: ${volume} \n**Market Cap**: ${m_cap} \n**Available Supply**: ${avail_supply} \n**Total Supply**: ${total_supply} \n**Maximum Supply**: ${max_supply} \n\n**Change 1h**: ${change_1h} \n**Change 24h**: ${change_24h} \n**Change 7d**: ${change_7d}`;
                        var chunk = `**Rank**: ${rank} \n\n**Price USD**: ${price_usd} \n**Price BTC**: ${price_btc} \n**Price ETH**: ${price_eth} \n\n**Volume 24h**: ${volume} \n**Market Cap**: ${m_cap} \n\n**Change 1h**: ${change_1h} \n**Change 24h**: ${change_24h} \n**Change 7d**: ${change_7d}`;

                        msg.channel.send({
                            embed: {
                                color: 3447003,
                                thumbnail: {
                                    url: `https://files.coinmarketcap.com/static/img/coins/32x32/${coin['id']}.png`
                                },
                                fields: [
                                    {
                                        name: coin['name'],
                                        value: chunk,
                                        inline: true
                                    },
                                ],
                                footer: {
                                    text: `Last updated: ${timeConverter(coin['last_updated'])} GMT+7`
                                }
                            },
                        });

                        } //else {
                           // msg.channel.send('Not found.');
                        //}
                    });
                });

                } else {
                	msg.channel.send('Undefined.');
                }

            break;

            case 'convert':

            if(args[0] && args[1] && args[2]) {

            	var from, to, from_symbol, to_symbol;

            	cmc.get(args[1], _from => {
            		if(_from) {
            			from_symbol = _from['symbol'];
            			from = _from['price_btc'];
            			cmc.get(args[2], _to => {
		            		if(_to) {
		            			to_symbol = _to['symbol'];
		            			to = _to['price_btc'];
		            		} else {
		            			msg.channel.send('Not found.');
		            		}

		            		var conversion = args[0] * from / to;
		            		msg.channel.send(`${args[0]} ${from_symbol} = ${conversion} ${to_symbol}`);
	            		});
            		} else {
            			msg.channel.send('Not found.');
            		}
            	});

            	

            } else {
            	msg.channel.send('Undefined.');
            }

            break;

            case 'mkc':
                cmc.getglobal( data => {
                    var total_market_cap = data['total_market_cap_usd'];
                    var total_24h_volume_usd = data['total_24h_volume_usd'];
                    var bitcoin_percentage_of_market_cap = data['bitcoin_percentage_of_market_cap'];
                    //var active_currencies = data['active_currencies'];
                    //var active_assets = data['active_assets'];
                    //var active_markets = data['active_markets'];
                    var last_updated = data['last_updated'];

                    //var chunk = `**Total market cap**: $${numberFormat(total_market_cap)} \n\n**Total 24h volume**: $${numberFormat(total_24h_volume_usd)} \n**Bitcoin dominance**: ${bitcoin_percentage_of_market_cap}% \n**Active currencies**: ${active_currencies} \n**Active assets**: ${active_assets} \n**Active markets**: ${active_markets}`;
                    var chunk = `**Total market cap**: $${numberFormat(total_market_cap)} \n\n**Total 24h volume**: $${numberFormat(total_24h_volume_usd)} \n**Bitcoin dominance**: ${bitcoin_percentage_of_market_cap}%`;

                    msg.channel.send({
                        embed: {
                            color: 3447003,
                            fields: [
                                {
                                    name: 'Global market',
                                    value: chunk,
                                    inline: true
                                },
                            ],
                            footer: {
                                text: `Last updated: ${timeConverter(last_updated)}`
                            }
                        }
                    });
                });
            break;*/

            default:
            msg.channel.send(":x: không có command này").then(msg => {msg.delete(5000)}).catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
            break;

		}
	}
});

// client.login(auth.token);
client.login('NDQyMDAyMTAyODAyMzE3MzMz.DdMfbw.3eV-Qk5N2TpDIDgatQb1ILeD0Hc');

function updateStatus() {
    cmc.getglobal( data => {
        var cap = data['total_market_cap_usd'];
       client.user.setGame(`Mkt. cap: $${numberFormat(cap/1000000000)}B`);
       // client.user.setGame(`Watching PornHub`);
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

