const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const config = require("./config.json");
const sleep = require('sleep.js');
const func = require('./functions');
var result = func.Christmas();
const watermark = 'Made by neumatic - http://neu.rf.gd'
const embedA = config.EmbedAuthor;
const embedP = config.EmbedPfp;
const embedC = config.EmbedColour;
const prefix = config.prefix;


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '798296513360298037');
        const welcomeEmbed = new MessageEmbed()
            .setTitle(`**Welcome**`)
            .setDescription('(`Welcome to the server, ${member}.`);')
            .setThumbnail('https://cdn.discordapp.com/attachments/798298389128151060/798301926721716264/image0.gif')
            .setFooter(`Member Joined`)
            .setColor(`${embedC}`)
            .setAuthor(`${embedA}`, `${embedP}`)
    if (!channel) return;
    message.channel.send(welcomeEmbed);
  });

client.on("ready", () => {
    client.user.setActivity('over "+memberCount+" members in Prett`s Art Cafe' , { type: 'WATCHING' });
    console.log(`${client.user.username}#${client.user.discriminator} has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
});

client.on("message", async (message) => {
    const logging = client.channels.cache.get(config.LogChannel);
    const guild = client.guilds.cache.get(config.serverID);
    const findchannel = guild.channels.cache.find(channel => channel.type === "text" && channel.name === "ticket-" + message.author.username.toLowerCase());
    var server = client.guilds.cache.get(config.serverID);
    if (message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === 'ping') {
        var ping = new MessageEmbed()
            .setTitle('<:yes:810251461434409020> Pong!')
            .setDescription(`**ping**\n${Date.now() - message.createdTimestamp}ms\n\n**API**\n${Math.round(client.ws.ping)}ms`)
        message.channel.send(ping);
    }
    if (command === 'msg') {
        var msg = new MessageEmbed()
            .setColor(`${embedC}`)
            .setAuthor(`${embedA}`, `${embedP}`)
            .setTitle(`DM me if you need support!`)
        message.channel.send(msg)
    }
    if (command === 'dm') {
        console.log(args)
        message.delete()
        if (!args[1]) {
            message.delete();
            message.author.send(`mention a user to dm`)
        }
        else if (message.mentions.users.first()) {
            message.channel.send("Message sent!")
            setTimeout(async function () {
                message.channel.bulkDelete(1)
            }, 5000);
            const user = message.mentions.users.first()
            var userId = (await (await client.users.fetch(user.id)).id)
            console.log(userId)
            console.log(args)
            var args1 = args.shift()
            var args2 = args.join(' ')

                ; (await client.users.fetch(userId)).send(args2)



        }
        else {
            message.author.send("<:no:810251418690519141> something went wrong")
            setTimeout(async function () {
                message.delete()
            }, 5000);
        }
    }
    if (command === 'christmas') {
        if (message.channel.name.startsWith('ticket-')) {
            message.author.send(`<:yes:810251461434409020> There are ${result} days till Christmas!`)
        }
        else {
            message.channel.send(`<:yes:810251461434409020> There are ${result} days till Christmas!`)
        }
        message.delete()
    }
    if (command === 'gd') {
        if (!args[0]) return message.author.send("Please enter a message!")
        let textogd = args.join('%20');
        let imagenGD = new Discord.MessageAttachment(`https://gdcolon.com/tools/gdlogo/img/${textogd}`, 'logo.png')
        if (message.channel.name.startsWith('ticket-')) {
            message.author.send(imagenGD)
        }
        else {
            message.channel.send(imagenGD)
        }
        message.delete()
    }
    if (command === 'help') {
        const helpEmbed = new MessageEmbed()
            .setTitle(`__**${config["bot-name"]} - Help**__`)
            .setDescription('**Commands:**\n`z.help` ~ Gives a list of commands\n`z.socials` - gives a list of socials\n`z.gd (text)` ~ Pixellated text\n`z.close` ~ Close a ticket\n`z.msg` ~ instructions for support\n`z.dm` ~ Direct messages a user\n`z.rps` ~ rock, paper, scissors\n`z.say` ~ Put words in my mouth\n`z.twitter` - Shows twitter URL\n`z.youtube` - Shows YouTube URL\n`z.instagram` - shows instagram URL\n`z.ban` ~ Bans a user\n`z.kick` ~ Kicks a member\n`z.purge` - Mass delete messages')
            .setFooter(`z.help`)
            .setColor(`${embedC}`)
            .setAuthor(`${embedA}`, `${embedP}`)

        message.channel.send(helpEmbed);
    }
    
        if (command === 'socials') {
        const socialEmbed = new MessageEmbed()
            .setTitle(`<:prettsartcafeheart:814202383000797195> Socials <:prettsartcafeheart:814202383000797195>`)
            .setDescription('[Intstagram](https://www.instagram.com/prettsartcafe)\n[Twitter](https://twitter.com/prettsartcafe)\n[Facebook](https://www.facebook.com/pg/Pretts-Art-Cafe-110664527736163/groups/)\n[YouTube](https://youtube.com/channel/UCL1Ylvw6rkOb_0xJBEjfGxA)')
            .setFooter(`z.socials`)
            .setColor(`${embedC}`)

        message.channel.send(socialEmbed);
    }
    
    if (command === 'youtube') {
        const ytEmbed = new MessageEmbed()
            .setTitle(`**YouTube**`)
            .setDescription('')
            .setFooter(`z.help`)
            .setColor(`${embedC}`)
        	.setURL('https://youtube.com/channel/UCL1Ylvw6rkOb_0xJBEjfGxA')
        message.channel.send(ytEmbed);
    }

    if (command === 'instagram') {
        const igEmbed = new MessageEmbed()
            .setTitle(`**Instagram**`)
            .setFooter(`z.help`)
            .setColor(`${embedC}`)
        	.setURL('http://www.instagram.com/prettsartcafe')
        message.channel.send(igEmbed);
    }
    
    if (message.channel.type !== ('dm')) {
        if (command == "close" && message.channel.name.startsWith('ticket-')) {
            var ret = message.channel.topic
            var pq = client.users.cache.get(ret)
            const embed = new MessageEmbed()
                .addField(`Ticket closed`, "your ticket has been closed. replying will make a new one")
                .setTimestamp()
                .setColor(`${embedC}`)
                .setAuthor(`${embedA}`, `${embedP}`)
            pq.send(embed)
            var Logging = new MessageEmbed()
            .setTitle(`Ticket Closed`)
            .setDescription(`${pq}'s ticket has been closed by ${message.author}`)
            .setTimestamp()
            .setFooter(`${pq.username}#${pq.discriminator}`, `${pq.displayAvatarURL()}`)
            .setColor(`${embedC}`)
            .setAuthor(`${embedA}`, `${embedP}`)
            logging.send(Logging)
            message.channel.delete()



        } else {
            if (message.content.startsWith(config.prefix)) { return }
            else if (message.channel.name.startsWith('ticket-')) {
                func.ModeratorTicket(message, client, config)
            }
        }
    }

    
    if (message.channel.type === "dm") {
        if (command === 'close' && findchannel) {
            const embed = new MessageEmbed()
                .addField(`Ticket Closed`, `${message.author.username}#${message.author.discriminator} closed their ticket. this channel will be deleted in 8 seconds.`)
                .setTimestamp()
                .setColor(`${embedC}`)
                .setAuthor(`${embedA}`, `${embedP}`)

            findchannel.send(embed)
            message.channel.send("You have closed your ticket.")
            var Logging = new MessageEmbed()
            .setTitle(`Ticket Closed`)
            .setDescription(`${message.author}'s ticket has been closed`)
            .setTimestamp()
            .setFooter(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
            .setColor(`${embedC}`)
            .setAuthor(`${embedA}`, `${embedP}`)
            logging.send(Logging)
            setTimeout(async function () {
                findchannel.delete()
            }, 8000);

        }

    }
    if (findchannel && command != 'close' && message.channel.type === ('dm')) {
        if (message.content.startsWith(config.prefix)) {
            return
        }
        else {
            func.SendMessageTicket(message, client, config)
            return
        }

    }
    else if (command != 'close' && message.channel.type === ('dm')) {
        if (message.content.startsWith(config.prefix)) {
            return
        }
        else {
            guild.channels.create(`ticket-${message.author.username}`, { reason: 'New to Ticket' }).then(c => {
                c.updateOverwrite(guild.roles.everyone, { VIEW_CHANNEL: false })
                var Updaterole = config.ModeratorRoles.join(', ')
                var Updaterole1 = Updaterole.toString()
                c.setParent(config.Category)
                console.log(Updaterole1)
                config.ModeratorRoles.map((role) => {
                    c.updateOverwrite(role, { VIEW_CHANNEL: true, SEND_MESSAGES: true, MANAGE_MESSAGES: true })
                })
                c.setTopic(message.author.id)
                var Attachment = (message.attachments).array();
                if (Attachment[0] !== undefined) {
                    var pp = ""
                    var pp1 = Attachment[0].url;
                    const Imgembed = new MessageEmbed()
                        .setTitle(`<:yes:813826242448195585> new message from ${message.author.username}#${message.author.discriminator}`)
                        .setTimestamp()
                        .setFooter('Type ?close to close the ticket')
                        .setImage(pp1)
                        .setColor(`${embedC}`)
                        .setAuthor(`${embedA}`, `${embedP}`)
                    c.send(Imgembed);
                    var Logging = new MessageEmbed()
                        .setTitle(`<:yes:813826242448195585> new ticket created`)
                        .setDescription(`${message.author} has created a ticket in ${c}`)
                        .setTimestamp()
                        .setFooter(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
                        .setColor(`${embedC}`)
                        .setAuthor(`${embedA}`, `${embedP}`)
                    logging.send(Logging);
                } else {
                    var pp = "";
                    const embed = new MessageEmbed()
                        .addField(`<:yes:813826242448195585> reply from ${message.author.username}#${message.author.discriminator}`, message.content + " " + pp)
                        .setFooter('type ?close to close the ticket')
                        .setTimestamp()
                        .setColor('#a60100')
                        .setAuthor(`${embedA}`, `${embedP}`)
                    c.send(embed)
                    var Logging = new MessageEmbed()
                        .setTitle(`new ticket created`)
                        .setDescription(`${message.author} created a new ticket in ${c}`)
                        .setTimestamp()
                        .setFooter(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
                        .setColor(`${embedC}`)
                        .setAuthor(`${embedA}`, `${embedP}`)
                    logging.send(Logging);
                }
            });
        }
        const NewTicket = new MessageEmbed()
            .setColor(`${embedC}`)
            .setAuthor(`${embedA}`, `${embedP}`)
            .setTitle("**New Ticket Created!** <:yes:813826242448195585>")
            .setDescription('<:yes:813826242448195585> your ticket has been created and staff have been notified. To close your ticket use the command `.close`')
        message.channel.send(NewTicket);
    }

});

client.on('guildMemberRemove', async (member) => {
    const logging = client.channels.cache.get(config.LogChannel);
    const guild = client.guilds.cache.get(config.serverID);
    const findchannel = guild.channels.cache.find(channel => channel.type === "text" && channel.name === "ticket-" + member.user.username.toLowerCase());

    if (findchannel) {
        findchannel.send(`${member.user.username} left the server.`)
        setTimeout(async function () {
            findchannel.delete()
        }, 8000);

        var Logging = new MessageEmbed()
        .setTitle(`ticket Closed`)
        .setDescription(`${member.user.username}#${member.user.discriminator} left the server so their ticket was closed.`)
        .setTimestamp()
        .setFooter(`${member.user.username}#${member.user.discriminator}`, `${member.user.displayAvatarURL()}`)
        .setColor(`${embedC}`)
        .setAuthor(`${embedA}`, `${embedP}`)
        logging.send(Logging);

    }   

});



client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(".") !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    if (command === "kick") {
        if (!message.member.hasPermission('KICK_MEMBERS'))
            return message.channel.send("<:no:813826242448195585> i do not have permissions`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send("<:no:813826242448195585> mention a user").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        if (!member.kickable)
            return message.channel.send("<:no:813826242448195585> i cant kick that user").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.kick().then(member => {
                message.channel.send(`${member.user.tag} was kicked no reason was provided`);
            })

            if (reason) return member.kick().then(member => {
                message.channel.send(`${member.user.tag} was kicked for ${reason}`);
            })
        }
    }

    if (command === "ban") {
        if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.channel.send("i have no permissions)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        if (!member.bannable)
            return message.channel.send("This user is unbannable").then(msg => {
        msg.delete({ timeout: 30000 })
    })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.ban().then(member => {
                message.channel.send(`${member.user.tag} was banned, no reason was provided`);
            })

            if (reason) return member.ban(reason).then(member => {
                message.channel.send(`${member.user.tag} was banned for ${reason}`);
            })
        }
    }

    if (command === "say") {
    const text = args.join(" ")
    if(!text) return message.channel.send("write somthing, the command is .say [thing]").then(msg => {
        msg.delete({ timeout: 30000 })
    })
    message.channel.send(text)
    
    }
   
    if (command === 'socials') {
        const socialEmbed = new MessageEmbed()
            .setTitle(`**Socials**`)
            .setDescription('f')
            .setFooter(`z.socials`)
            .setColor(`${embedC}`)
        message.channel.send(socialEmbed);
    }
    
    if (command === "purge") {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("i do not have permission`)").then(msg => {
        msg.delete({ timeout: 30000 })
    })
    const number = args.join(" ")
    if(!number) return message.channel.send("You haven't specified a number to purge").then(msg => {
        msg.delete({ timeout: 30000 })
    })
   message.channel.bulkDelete(number).catch(console.error)
   
   }
    
   if (command === "rps") {
        const options = [
            "rock :shell: ",
            "paper :newspaper2:",
            "scissors :scissors: "
        ]
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send(`You got ${option}`)
    }

});


client.login(config.token);
