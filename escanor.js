const Discord = require("discord.js"); 
const myid = ["705419015828537354"]; 
const prefix = ["!"]; 
const cmd = require("node-cmd"); 
const escanor = new Discord.Client(); 
const escanor2 = new Discord.Client(); 
const escanor3 = new Discord.Client(); 
const escanor4 = new Discord.Client(); 
const escanor5 = new Discord.Client(); 
const escanor6 = new Discord.Client(); 

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ
escanor.login(process.env.escanor);
escanor2.login(process.env.ecanor2);
escanor3.login(process.env.escanor3);
escanor4.login(process.env.escanor4);
escanor5.login(process.env.escanor5);
escanor6.login(process.env.escanor6);

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

escanor.on("message", message => {
  if (message.content === prefix + "d") {
    
    message.channel.send("owo daily");
  }
  if (message.content === prefix + "c") {
    message.channel.send("owo cf all");
  }
  if (message.content === prefix + "p") {
    
    message.channel.send("owo profile");
  }
  if (message.content === prefix + "r") {
    message.channel.send("owo rep " + "<@" + myid + ">");
  }
 if (message.content.startsWith(prefix + "")) {
    var text = message.content
      .split("ninja up")
      .slice(1)
      .join("ninja up");
    message.channel.send(text);
  }
});
   
     escanor.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];

if (command === `${prefix}s1`) {
		if (message.author.bot) return undefined;
		var sayword = message.content.split(' ').slice(1).join(' ');
		if(!sayword){
		message.channel.send("**Usage: `" + `${prefix}` + "s1 [Word]` **");
		} else {
			message.channel.send(`${sayword}`);
		}
      }
});
        
       
    
      
    
    
  



escanor2.on("message", message => {
  if (message.content === prefix + "d") {
    message.channel.send("owo daily");
  }
  if (message.content === prefix + "c") {
    message.channel.send("owo cf all");
  }
  if (message.content === prefix + "p") {
    message.channel.send("owo profile");
  }
  if (message.content === prefix + "r") {
    message.channel.send("owo rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

///say2
escanor2.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];

if (command === `${prefix}s2`) {
		if (message.author.bot) return undefined;
		var sayword = message.content.split(' ').slice(1).join(' ');
		if(!sayword){
		message.channel.send("**Usage: `" + `${prefix}` + "s2 [Word]` **");
		} else {
			message.channel.send(`${sayword}`);
		}
      }
});

escanor3.on("message", message => {
  if (message.content === prefix + "d") {
    message.channel.send("owo daily");
  }
  if (message.content === prefix + "c") {
    message.channel.send("owo cf all");
  }
  if (message.content === prefix + "p") {
    message.channel.send("owo profile");
  }
  if (message.content === prefix + "r") {
    message.channel.send("owo rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

///say3 
escanor3.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];

if (command === `${prefix}s3`) {
		if (message.author.bot) return undefined;
		var sayword = message.content.split(' ').slice(1).join(' ');
		if(!sayword){
		message.channel.send("**Usage: `" + `${prefix}` + "s3 [Word]` **");
		} else {
			message.channel.send(`${sayword}`);
		}
      }
});

escanor4.on("message", message => {
  if (message.content === prefix + "d") {
    message.channel.send("owo daily");
  }
  if (message.content === prefix + "c") {
    message.channel.send("owo cf all");
  }
  if (message.content === prefix + "p") {
    message.channel.send("owo profile");
  }
  if (message.content === prefix + "r") {
    message.channel.send("owo rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

///say4
escanor4.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];

if (command === `${prefix}s4`) {
		if (message.author.bot) return undefined;
		var sayword = message.content.split(' ').slice(1).join(' ');
		if(!sayword){
		message.channel.send("**Usage: `" + `${prefix}` + "s4 [Word]` **");
		} else {
			message.channel.send(`${sayword}`);
		}
      }
});

escanor5.on("message", message => {
  if (message.content === prefix + "d") {
    message.channel.send("owo daily");
  }
  if (message.content === prefix + "c") {
    message.channel.send("owo cf all");
  }
  if (message.content === prefix + "p") {
    message.channel.send("owo profile");
  }
  if (message.content === prefix + "r") {
    message.channel.send("owo rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" "); 
    message.channel.send(text);
  }
});

///say5
escanor5.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];

if (command === `${prefix}s5`) {
		if (message.author.bot) return undefined;
		var sayword = message.content.split(' ').slice(1).join(' ');
		if(!sayword){
		message.channel.send("**Usage: `" + `${prefix}` + "s5 [Word]` **");
		} else {
			message.channel.send(`${sayword}`);
		}
      }
});

escanor6.on("message", message => {
  if (message.content === prefix + "d") {
    message.channel.send("owo daily");
  }
  if (message.content === prefix + "c") {
    message.channel.send("owo cf all");
  }
  if (message.content === prefix + "p") {
    message.channel.send("owo profile");
  }
  if (message.content === prefix + "r") {
    message.channel.send("owo rep " + "<@" + myid + ">");
  }
  if (message.content.startsWith(prefix + "")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
});

///say6
escanor6.on('message', message => {
let messageArray = message.content.split(" ");

let command = messageArray[0];

if (command === `${prefix}s6`) {
		if (message.author.bot) return undefined;
		var sayword = message.content.split(' ').slice(1).join(' ');
		if(!sayword){
		message.channel.send("**Usage: `" + `${prefix}` + "s6 [Word]` **");
		} else {
			message.channel.send(`${sayword}`);
		}
      }
});
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//ERIOSx

escanor.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 5k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** ------------------jsjsjsjsjxjjxj> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 10k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//ERIOSx

escanor2.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 5k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 10k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//ERIOSX

escanor3.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 5k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 10k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//ERIOSx

escanor4.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 5k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 10k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//ERIOSx

escanor5.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 5k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 10k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????//ERIOSx

escanor6.on("message", message => {
  if (message.content === prefix + "fast 1k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 1000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 2k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 2000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 3k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 3000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 4k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 4000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 5k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 5000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 6k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 6000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 7k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 7000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 8k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 8000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 9k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 9000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
  if (message.content === prefix + "fast 10k") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//ERIOSx

escanor.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

escanor2.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

escanor3.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

escanor4.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

escanor5.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

escanor6.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//ERIOSXx

escanor.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

escanor2.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

escanor3.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

escanor4.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

escanor5.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

escanor6.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//ERIOSx

escanor.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``1`` ");
  }
});

escanor2.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``2`` ");
  }
});

escanor3.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``3`` ");
  }
});

escanor4.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``4`` ");
  }
});

escanor5.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``5`` ");
  }
});

escanor6.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``6`` ");
  }
});
///All Code By EscaNor
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//ERIOSx


