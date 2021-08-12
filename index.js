//////////////BOT 24/7//////////////

const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('HelloPutod');
});
let port = process.env.PORT || 4000;
app.listen(port);

require('dotenv').config();

///////////////////CLASSES///////////////////////

Wikipedia = require('./classes/Wikipedia');

///////////////////BOT CODING///////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.prefix;
const fs = require('fs');
let warns = JSON.parse(fs.readFileSync('./warns.json', 'utf8'));
const Distube = require('distube')
const backup = require('discord-backup');
const config = require('./config.json')
const ytdl = require('ytdl-core')
const Youtube = require('simple-youtube-api')
const Canvas = require('canvas')
const ms = require('ms')
const fetch = require('node-fetch')
const db = require('megadb')
const Canvacord = require('canvacord')
const { YTSearcher } = require('ytsearcher');
const muterol = new db.crearDB("muterol")
const verificationrol = new db.crearDB("verificationrol")
const dinero = new db.crearDB("dinero")
const dinerobanco = new db.crearDB("dinerobanco")
const gema = new db.crearDB("gema")
const level = new db.crearDB("level")
const xp = new db.crearDB("currentxp")
const afk = new db.crearDB("afk")
const premium = new db.crearDB("premium")
const dbq = require('quick.db')
const Database = require("@replit/database")
const { GiveawaysManager } = require('discord-giveaways');
client.giveaways = new GiveawaysManager(client, {
  storage: './giveaways.json',
  updateCountdown: 5000,
  embedColor: '#ff0000',
  reaction: '🎉'
})
const Buttons = require('discord-buttons');
Buttons(client);

client.config = config;

var welcomeCanvas = {};
welcomeCanvas.create = Canvas.createCanvas(1024, 500)
welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
welcomeCanvas.context.font = '72px sans-serif';
welcomeCanvas.context.fillStyle = '#ffffff';

Canvas.loadImage("./img/rank.jpg").then(async (img) => {
    welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)
    welcomeCanvas.context.fillText("Bienvenido", 310, 360);
    welcomeCanvas.context.beginPath();
    welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
    welcomeCanvas.context.stroke()
    welcomeCanvas.context.fill()
})

function presence() {
  client.user.setPresence({
    status: 'online',
    activity: {
      name: `https://www.twitch.tv/xxemiryt57xx | ${prefix}help`,
      type: 'WATCHING'
    }
  })
}

client.on('ready', () => {
  console.log("El bot esta listo!")
  presence();
});

client.on('message', async message => {
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  const ticketChannel = '「👮」・soporte'

  if (command === "say") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No tienes permisos!")
    let msg = args.slice(0).join(" ")
    if (!args[0]) return message.channel.send("Debes ingresar un mensaje a enviar");

    message.delete();
    message.channel.send(msg);

  } else if (command === "clear") {
    if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("No tienes permisos para utilizar ese comando")
    if (!args[0]) return message.channel.send("Necesitas colocar el numero de mensajes que quieres eliminar")

    let number = args[0]
    if (isNaN(number)) return message.channel.send("Necesitas colocar un numero no letras")
    number = parseInt(number)
    if (number >= 100 || number <= 0) return message.channel.send("El valor es invalido")

    message.channel.bulkDelete(number + 1).then(() => {
      message.channel.send(`Se elimino ${number} mensajes`)
    }).catch(error => {
      message.channel.send(`Ocurrio un error: ${error.message}`)
    });

  } else if (command === "8ball") {
    let respuestas = ["Talves", "Si", "No creo", "No se", "No"];

    let result = Math.floor((Math.random() * respuestas.length));
    let pregunta = args.slice(0).join(" ")
    if (!pregunta) return message.channel.send("Tienes que especificar una pregunta")

    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag)
      .setColor("RANDOM")
      .addField("Pregunta", pregunta)
      .addField("Respuesta", respuestas[result])

    message.channel.send(embed)
  } else if (command === "kill") {
    function doKillAction() {
      var random = [
        'https://media.discordapp.net/attachments/399448944889036801/608645883487322112/kill.gif?width=360&height=202',
        'https://images-ext-2.discordapp.net/external/XQHvL25HKxo6nCxL4UVZnnM74eBVdcXPrEpH2ig6MJQ/https/imgur.com/KFkJ4yt.gif?width=360&height=202',
        'https://media.discordapp.net/attachments/399448944889036801/638921815493967910/ezgif.com-video-to-gif_1.gif?width=360&height=198',
        'https://images-ext-1.discordapp.net/external/l5j_-95aBtSVfZ6kYlKmevsyPEsHdid4o-X1Zm4HGq4/https/imgur.com/lsWanCg.gif?width=360&height=202',
        'https://media.discordapp.net/attachments/399448944889036801/756150562742992926/dc997c0f-350f-4627-8c18-107ee581c2f0.gif?width=360&height=205',
        'https://images-ext-1.discordapp.net/external/wRz-69w9LjYfV3fKhN8NwXdIvXT9Z5pvuN5EVOVJghc/https/imgur.com/D9EWA7S.gif?width=360&height=201',
        'https://media.discordapp.net/attachments/399448944889036801/644217293420625930/b3ac6e01-463d-4f38-b73e-8427746137c6.gif?width=360&height=202',
        'https://media.discordapp.net/attachments/399448944889036801/740654521822347375/3279c124-eea5-4b77-9a21-bfcd9c86b783.gif?width=360&height=201'
      ];

      return random[Math.floor(Math.random() * random.length)];
    }

    const target = message.mentions.members.first();
    if (!target) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`<a:Kill:865709296426549288> **${message.author.username}** se suicido <a:Kill:865709296426549288>`)
        .setImage(doKillAction())
        .setColor("RANDOM")
      message.channel.send(embed)
    } else {
      const embed = new Discord.MessageEmbed()
        .setDescription(`<a:Kill:865709296426549288> **${message.author.username}** acaba de matar a **${target.user.username}** <a:Kill:865709296426549288>`)
        .setImage(doKillAction())
        .setColor("RANDOM")
      message.channel.send(embed)
    }

  } else if (command === "kiss") {
    function doKissAction() {
      var random = [
        'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
        'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
        'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
        'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
        'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif'
      ];

      return random[Math.floor(Math.random() * random.length)];
    }

    const target = message.mentions.members.first();
    if (!target) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`<a:Kiss:865708076635521054> Ven **${message.author.username}** que te quiero dar un beso <a:Kiss:865708076635521054>`)
        .setImage(doKissAction())
        .setColor("RANDOM")
      message.channel.send(embed)
    } else {
      const embed = new Discord.MessageEmbed()
        .setDescription(`<a:Kiss:865708076635521054> **${message.author.username}** acaba de dar un beso a **${target.user.username}** <a:Kiss:865708076635521054>`)
        .setImage(doKissAction())
        .setColor("RANDOM")
      message.channel.send(embed)
    }

  } else if (command === "boom") {
    function doBoomAction() {
      var rand = [
        'https://media.discordapp.net/attachments/399448944889036801/550388105354412047/1530593629_original.gif?width=360&height=203',
        'https://images-ext-2.discordapp.net/external/4IfSvQ5BbzwGI0EiX7vHGqIF_Ly4Bfb9_Zlo3jA5hEU/https/i.imgur.com/yl9vvhC.gif?width=360&height=202',
        'https://media.discordapp.net/attachments/399448944889036801/644549800318074913/564da6ba24ac28f9ad0c2c2171bbba09.gif?width=360&height=200',
        'https://media.discordapp.net/attachments/399448944889036801/808723918080573441/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif?width=360&height=203',
        'https://media.discordapp.net/attachments/399448944889036801/550388802410250250/giphy.gif?width=360&height=202',
        'https://media.discordapp.net/attachments/399448944889036801/803573394296930314/cd3zCvFIwXaRE_yplX5DBtzOvWCTXGSt5k8zZ6u8Jkk_UEPUGL5hXQ49O9UUJcKMfaX5mwXEgWiGWvEybdn4xI7tQRWswlyqgbXO.gif?width=360&height=202'
      ];

      return rand[Math.floor(Math.random() * rand.length)];
    }

    const target = message.mentions.members.first();
    if (!target) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`<:boom:865708806083313714> **${message.author.username}** Acaba de explotarse el solo <:boom:865708806083313714>`)
        .setImage(doBoomAction())
        .setColor("RANDOM")
      message.channel.send(embed)
    } else {
      const embed = new Discord.MessageEmbed()
        .setDescription(`<:boom:865708806083313714> **${message.author.username}** acaba de explotar a **${target.user.username}** <:boom:865708806083313714>`)
        .setImage(doBoomAction())
        .setColor("RANDOM")
      message.channel.send(embed)
    }

  } else if (command === "kick") {
    const tag = `<@${message.author.id}>`
    let kuser = message.mentions.users.first();
    let kreason = args.slice(1).join(" ")
    if (!kuser) return message.channel.send(`${tag} Menciona un usuario!`)
    if (!kreason) return message.channel.send("Dime una razon")
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No tienes permisos para ejecutar ese comando!")
    let guild = message.guild;

    const embed = new Discord.MessageEmbed()
      .setColor(`#ff0000`)
      .addField("Usuario Kickeado", `${kuser}`)
      .addField("Motivo", `${kreason}`)
      .addField("Moderador", message.author.username)
    message.delete();
    kuser.send(`Has sido kickado de ${guild.name}`)
    message.guild.member(kuser).kick(kreason).reason
    client.channels.cache.get("757801920915308564").send(embed)

  } else if (command === "ban") {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("No tienes permisos para ejecutar ese comando!")

    let bUser = message.mentions.members.first();

    let bReason = args.join(" ").slice(22);

    let guild = message.guild;

    if (!bUser) return message.channel.send("Debes mencionar a un usuario!")

    if (message.member.roles.highest.comparePositionTo(bUser.roles.highest) <= 0) return message.channel.send("No puedes banear a alguien de mayor o igual rango que tu!")

    if (bUser === message.author) return message.channel.send("No puedes banearte a ti mismo!")

    if (!bReason) return message.channel.send("Debes escribir una razon!")

    bUser.ban({ reason: bReason })

    const embed = new Discord.MessageEmbed()
      .setColor(`#ff0000`)
      .addField("Usuario Baneado", `${bUser}`)
      .addField("Motivo", `${bReason}`)
      .addField("Moderador", message.author.username)
    message.delete();
    bUser.send(`Has sido baneado de ${guild.name}`)
    client.channels.cache.get("757801920915308564").send(embed)

  } else if (command === "warn") {
    if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.reply("No tienes permisos!")
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if (!wUser) return message.reply("Debes mencionar un usuario!")
    let wReason = args.join(" ").slice(22);

    if (!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile('./warns', JSON.stringify(warns), (err) => {
      if (err) console.log(err);
    });

    let embed = new Discord.MessageEmbed()
      .setColor('#ff5a00')
      .addField('Usuario Advertido', `${wUser.username}`)
      .addField('Motivo', `${wReason}`)
      .addField('Numero de warns', warns[wUser.id].warns + "/5")
      .addField('Moderador', message.author.username)
    client.channels.cache.get('757801920915308564').send(embed);

    if (warns[wUser.id].warns == 3) {
      message.guild.member(wUser).kick(wReason).reason
    }

  } else if (command === "userinfo") {
    let estados = {
      "online": "Conectado",
      "offline": "Desconectado",
      "idle": "Ausente",
      "dnd": "No Molestar"
    }

    let usuario = message.mentions.users.first() || message.author;

    const userembed = new Discord.MessageEmbed()
      .setColor("00ffff")
      .setDescription(`Esta es la informacion de el usuario **${usuario.username}**`)
      .addField("Nombre completo", `${usuario.tag}`)
      .addField("ID", `${usuario.id}`)
      .addField("Estado", `${estados[usuario.presence.status]}`)

    message.channel.send(userembed)

  } else if (command === "ticket") {
    if (ticketChannel !== message.channel.name) {
      message.reply("Este comando lo debes ejecutar en el canal de <#750190739027263529>")
    } else {
      const user = message.author.id;
      const name = `ticket-${user}`;

      if (message.guild.channels.cache.find(ch => ch.name == name)) {
        message.reply("Ya tienes un ticket creado!")
      } else {
        message.guild.channels.create(name).then((chanel) => {
          chanel.updateOverwrite(message.guild.roles.everyone, {
            VIEW_CHANNEL: false,
            SEND_MESSAGE: false,
          })

          chanel.updateOverwrite(user, {
            VIEW_CHANNEL: true,
            SEND_MESSAGE: true,
          })

          chanel.updateOverwrite("746209433339822171", {
            VIEW_CHANNEL: true,
            SEND_MESSAGE: true,
          })

          message.channel.send("Tu ticket ha sido creado existosamente")
          chanel.send(`${message.author} Aqui tienes tu ticket, ahora solo debes esperar a los <@&746209433339822171>> para que te puedan ayudar.`)
        });
      }
    }

    //Comando ticketclose
  } else if (command === "ticketclose") {
    if (message.channel.name.startsWith("ticket")) {
      if (!message.member.hasPermission("MANAGE_MESSAGE")) {
        message.reply("No puedes ejecutar este comando")
      } else {
        message.channel.delete();
      }
    } else {
      message.reply("Este no es un canal de ticket")
    }

  } else if (command === "help") {
    const embed = new Discord.MessageEmbed()
      .setTitle("<:Control:865697711516811305> Estos son todos los comandos de la comunidad de ☆EmirYT57☆ <a:tada:865697004730449940>")
      .setDescription("Interactua con los botones para poder visualizar las distintas categorias de comandos")
      .setColor('#ff00ff')

    const btnInformacion = new Buttons.MessageButton()
      .setStyle('green')
      .setLabel('Informacion')
      .setEmoji('865697324508512268')
      .setID('btnInfo')

    const btnDiversion = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Diversion')
      .setEmoji("865696083841777684")
      .setID('btnParty')

    const btnMusica = new Buttons.MessageButton()
      .setStyle('gray')
      .setLabel('Music')
      .setEmoji("865695448480088074")
      .setID('btnMusic')

    const btnUtility = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Utilidad')
      .setEmoji("865430609735188530")
      .setID('btnUti')

    const btnStaffs = new Buttons.MessageButton()
      .setStyle('red')
      .setLabel('Staffs')
      .setEmoji('865694972103884800')
      .setID('btnStaff')

    message.channel.send({
      buttons: [btnInformacion, btnDiversion, btnMusica, btnUtility, btnStaffs],
      embed: embed
    });

  } else if (command === "redes") {
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.member.displayName, message.author.displayAvatarURL())
      .setTitle("<:Computadora:865711325014917200> Redes de EmirYT57 <a:tada:865697004730449940>")
      .setColor("#ffff")
      .setThumbnail('https://cdn.discordapp.com/icons/689916157897211994/f081d88e50db5688d9cdf4af67cff402.png?size=128')
      .setDescription("Estas son las redes sociales de EmirYT57")
      .addField("Twitter", "[@Yt57Emir](https://twitter.com/Yt57Emir)", true)
      .addField("Twitch", "[xxemiryt57xx](https://www.twitch.tv/xxemiryt57xx)", true)
      .addField("YouTube", "[EmirYT57](https://www.youtube.com/channel/UCU4oPOXF7F_SXeYZ3iGwu2g)", true)
    message.channel.send(embed)

  } else if (command === "youtube") {
    let channel = message.member.voice.channel;
    if (!channel) return message.channel.send("Debes estar en un canal de voz!")

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
      method: 'POST',
      body: JSON.stringify({
        max_age: 86400,
        max_uses: 0,
        target_application_id: '755600276941176913',
        target_type: 2,
        temporary: false,
        validate: null
      }),
      headers: {
        "Authorization": `Bot ${client.token}`,
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(invite => {
      if (!invite.code) return message.channel.send("No se ha podido conectar con el canal de voz")
      message.channel.send(`https://discord.com/invite/${invite.code}`)
    })

  } else if (command === "yt") {
    const embed = new Discord.MessageEmbed()
      .setTitle("<:Camara:865714041028870204> Requisitos YT <:Camara:865714041028870204>")
      .setDescription("Estos son los requisitos para rango YouTuber en la comunidad de ☆EmirYT57☆")
      .addField(":fire: **MiniYT** :fire:", "**100 Vistas**\n**50 Suscriptores**")
      .addField(":100: **YouTuber** :100::", "**1000 Vistas**\n**500 Suscriptores**")
      .addField(":sunglasses: **Famoso** :sunglasses:", "**1000 Vistas**\n**1000 Suscriptores**")
      .setThumbnail("https://cdn.discordapp.com/icons/689916157897211994/f081d88e50db5688d9cdf4af67cff402.png?size=128")
      .setColor("RED")
    message.channel.send(embed)

  } else if (command === "hug") {
    function doHugAction() {
      var random = [
        'https://images-ext-2.discordapp.net/external/S9vW6O3sWsorDxms7Y64X5a1PNsVF_mDA05kr2ehX8c/https/imgur.com/UdcfIeJ.gif?width=278&height=300',
        'https://media.discordapp.net/attachments/399448944889036801/761746423649665074/tumblr_nsb54jun6t1u29tano1_500.gif?width=400&height=225',
        'https://images-ext-1.discordapp.net/external/gRN-ewLFWBc0JVBqnnUGaK48yLVqb2FI2HQFVZSqt2I/https/imgur.com/orWzkXN.gif?width=400&height=182',
        'https://media.discordapp.net/attachments/399448944889036801/745528890679885834/7fa8879e-c248-45be-aac3-72f94dfa4f26.gif?width=400&height=222',
        'https://media.discordapp.net/attachments/399448944889036801/753230267245920273/2d3b1019-06bc-483e-9b5b-8d3db100e166.gif?format=png&width=400&height=225',
        'https://media.discordapp.net/attachments/399448944889036801/754305228614139934/a1f3070e-fdff-48f7-82e8-41e9db0badaf.gif?width=400&height=225'
      ];

      return random[Math.floor(Math.random() * random.length)];
    }

    const target = message.mentions.members.first();
    if (!target) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`<a:Hug:865709334868787241> Ven **${message.author.username}** que te quiero dar un abrazo <a:Hug:865709334868787241>`)
        .setImage(doHugAction())
        .setColor("RANDOM")
      message.channel.send(embed)
    } else {
      const embed = new Discord.MessageEmbed()
        .setDescription(`<a:Hug:865709334868787241> **${message.author.username}** acaba de abrazar a **${target.user.username}** <a:Hug:865709334868787241>`)
        .setImage(doHugAction())
        .setColor("RANDOM")
      message.channel.send(embed)
    }

  } else if (command === "punch") {
    function doPunchAction() {
      var random = [
        'https://media.discordapp.net/attachments/399448944889036801/761941081004310539/07cfc579-8f6c-42c2-a900-8c097b35a699.gif?width=400&height=222',
        'https://media.discordapp.net/attachments/399448944889036801/753583280485564537/a89465b6-9fe3-41cf-9952-296d70200632.gif?width=323&height=300',
        'https://media.discordapp.net/attachments/399448944889036801/748506327784882217/6760f8fb-f35e-4fba-84bf-6a6c66aa2556.gif?width=400&height=224',
        'https://media.discordapp.net/attachments/399448944889036801/597190734302412810/f3a.gif?width=400&height=225',
        'https://media.discordapp.net/attachments/784869986966962176/803680992866992179/giphy_2.gif',
        'https://media.discordapp.net/attachments/399448944889036801/750699478968696962/faeefd80-cfd6-46f4-9675-78fcb30ef766.gif?width=400&height=226'
      ];

      return random[Math.floor(Math.random() * random.length)];
    }

    const target = message.mentions.members.first();
    if (!target) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`<:Punch:865709357660504134> Ven **${message.author.username}** que te quiero dar un puñetazo <:Punch:865709357660504134>`)
        .setImage(doPunchAction())
        .setColor("RANDOM")
      message.channel.send(embed)
    } else {
      const embed = new Discord.MessageEmbed()
        .setDescription(`<:Punch:865709357660504134> **${message.author.username}** acaba de dar un puñetazo a **${target.user.username}** <:Punch:865709357660504134>`)
        .setImage(doPunchAction())
        .setColor("RANDOM")
      message.channel.send(embed)
    }

  } else if (command === "ship") {
    let target = message.mentions.users.first();
    let random = Math.floor(Math.random() * 100) + 1

    if (!target) return message.reply("Debes mencionar un usuario!")
    if (target === message.author) return message.reply("Debes mencionar a alguien que no seas tu!")

    const unLoveEmbed = new Discord.MessageEmbed()
      .setTitle("<a:Corazon:865711865282691100> **Shipeos** <a:Corazon:865711865282691100>")
      .setDescription(`**${message.author.username}** y **${target.username}** tienen una probabilidad del **${random}%** de estar juntos <3`)
      .setThumbnail('https://pngimg.com/uploads/broken_heart/broken_heart_PNG39.png')
      .setColor('#FF0000')

    const loveEmbed = new Discord.MessageEmbed()
      .setTitle("<a:Corazon:865711865282691100> **Shipeos** <a:Corazon:865711865282691100>")
      .setDescription(`**${message.author.username}** y **${target.username}** tienen una probabilidad del **${random}%** de estar juntos <3`)
      .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Coraz%C3%B3n.svg/657px-Coraz%C3%B3n.svg.png')
      .setColor('#FF0000')

    if (random > 50) {
      message.channel.send(loveEmbed)
    } else {
      message.channel.send(unLoveEmbed)
    }

  } else if (command === "unban") {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("No tienes permisos para ejecutar ese comando!")

    const id = args[0];
    if (!id) return message.channel.send("Debes colocar la ID del usuario que quiere dar unban!")

    const bannedMembers = await message.guild.fetchBans();
    if (!bannedMembers.find((user) => user.user.id === id)) return message.channel.send("ID incorrecta o usuario no baneado!")

    message.guild.members.unban(id);
    message.channel.send("Usuario desbaneado correctamente!")

  } else if (command === "muterol") {

    let perms = message.member.hasPermission('ADMINISTRATOR')
    if (!perms) return message.reply('No tienes permisos para ejecutar ese comando!')

    let rol = message.mentions.roles.first();
    if (!rol) return message.channel.send("Debes decir un rol!")

    muterol.establecer(message.guild.id, rol.id)

    message.channel.send(`Se ha establecido el rol **${rol.name}** como rol para mutear`)

  } else if (command === "mute") {

    let perms = message.member.hasPermission('ADMINISTRATOR');
    if (!perms) return message.reply("No tienes permisos para ejecutar ese comando!")

    let time = args[1];
    if (!time) return message.channel.send("Debes decir un tiempo!")
    let timer = ms(time)

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Debes decir un usuario!")

    var reason = args.slice(2).join(" ");
    if (!reason) {
      reason = "No especificado"
    }

    if (!muterol.tiene(message.guild.id)) return message.channel.send("Este servidor no tiene un rol para mutear!")

    let rol = await muterol.obtener(message.guild.id)

    if (user.roles.cache.has(rol)) return message.channel.send("Este usuario ya estaba muteado!")

    user.roles.add(rol)

    await setTimeout(async function() {
      await user.roles.remove(rol);

      await message.channel.send(`Se ha removido el mute a ${user}`).catch(err => {
        console.log(err)
      })

    }, timer)

  } else if (command === "md") {
    let perms = message.member.hasPermission('ADMINISTRATOR')
    if (!perms) return message.reply("No tienes permisos para ejecutar ese comando!")

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Debes decir un usuario!")

    let msg = args.slice(1).join(' ');
    if (!msg) return message.channel.send("Debes decir un mensaje!")

    message.delete();
    message.channel.send(`El mensaje fue mandado al usuario ${user} con exito!`)
    user.send(msg)

  } else if (command === "unmute") {

    let perms = message.member.hasPermission('ADMINISTRATOR')
    if (!perms) return message.reply("No tienes permisos para ejecutar ese comando!")

    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Debes decir un usuario!")

    let rol = await muterol.obtener(message.guild.id)
    if (!user.roles.cache.has(rol)) return message.channel.send("Este usuario no estaba muteado!")

    user.roles.remove(rol)
    message.channel.send(`El mute de el usuario ${user} ha sido removido con exito!`)

  } else if (command === "tweet") {
    fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
      .then((res) => res.json())
      .then((data) => {
        let embed = new Discord.MessageEmbed()
          .setTitle(`Nuevo tweet de ${message.author.username}`)
          .setImage(data.message)
          .setTimestamp()
        message.channel.send(embed)
      })

  } else if (command === "recordatorio") {

    var user = message.mentions.users.first()
    if (!user) {
      var user = message.author;
      var time = args[0];
      if (!time) return message.channel.send("Debes decir un tiempo!")

      let tiempo = ms(time)

      let recordatorio = args.slice(1).join(' ')
      if (!recordatorio) return message.channel.send("Debes decir tu recordatorio!")

      setTimeout(() => {
        message.reply(`No te olvides de **${recordatorio}**`)
      }, tiempo)

    } else {
      var user = message.mentions.users.first()
      var time = args[1];
      if (!time) return message.channel.send("Debes decir un tiempo!")

      let tiempo = ms(time)

      let recordatorio = args.slice(2).join(' ')
      if (!recordatorio) return message.channel.send("Debes decir tu recordatorio!")

      setTimeout(() => {
        message.channel.send(`${user}, No te olvides de **${recordatorio}**`)
      }, tiempo)
    }

  } else if (command === "work") {

    const user = message.author;

    if (!dinero.tiene(`${user.id}`)) {
      dinero.establecer(`${user.id}`, 0)
    }

    if (!dinerobanco.tiene(`${user.id}`)) {
      dinerobanco.establecer(`${user.id}`, 0)
    }

    let random = Math.floor(Math.random() * 575) + 100

    let trabajo = ['policia', 'bombero', 'medico']
    let trabajorandom = trabajo[Math.floor(Math.random() * trabajo.length)]

    dinero.sumar(`${user.id}`, random)

    message.channel.send(`<a:Dinero:865796080678862889> **${user.username}** Ha conseguido **${random}** trabajando de **${trabajorandom}**`)

  } else if (command === "bal") {

    const user = message.author;

    if (!dinero.tiene(`${user.id}`)) {
      dinero.establecer(`${user.id}`, 0)
    }

    if (!dinerobanco.tiene(`${user.id}`)) {
      dinerobanco.establecer(`${user.id}`, 0)
    }

    if (!gema.tiene(`${user.id}`)) {
      gema.establecer(`${user.id}`, 0)
    }

    const dinerototal = await dinero.obtener(`${user.id}`)
    const dinerobancototal = await dinerobanco.obtener(`${user.id}`)
    const gemastotal = await gema.obtener(`${user.id}`)

    const embed = new Discord.MessageEmbed()
      .setTitle(`Economia de ${user.username}`)
      .setDescription("Clickea los botones para ver tu dinero o gemas")
      .setColor('GREEN')

    const btnDinero = new Buttons.MessageButton()
      .setStyle('green')
      .setLabel('Dinero')
      .setEmoji('865796080678862889')
      .setID('btnMon')

    const btnGema = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Gemas')
      .setEmoji('866511855337472010')
      .setID('btnGem')

    message.channel.send({
      buttons: [btnDinero, btnGema],
      embed: embed
    });

  } else if (command === "ret") {

    const user = message.author;

    let cantidad = args[0]
    if (!cantidad) return message.channel.send("Debes decir la cantidad que vas a retirar!")

    const dinerot = await dinerobanco.obtener(`${user.id}`)

    if (cantidad > dinerot) return message.channel.send("No tienes tanto dinero para retirar!")

    if (cantidad === "all") {

      const dinerobancototal = await dinerobanco.obtener(`${user.id}`)

      dinerobanco.restar(`${user.id}`, dinerobancototal)
      dinero.sumar(`${user.id}`, dinerobancototal)

      message.channel.send(`<a:Dinero:865796080678862889> **${user.username}** ha retirado todo su dinero del banco`)

    }

    dinerobanco.restar(`${user.id}`, cantidad)
    dinero.sumar(`${user.id}`, cantidad)

    message.channel.send(`<a:Dinero:865796080678862889> **${user.username}** ha retirado **${cantidad}$** del banco`)

  } else if (command === "dep") {

    const user = message.author;

    let cantidad = args[0]
    if (!cantidad) return message.channel.send("Debes decir la cantidad que vas a depositar!")

    const dinerot = await dinero.obtener(`${user.id}`)

    if (cantidad > dinerot) return message.channel.send("No tienes tanto dinero para depositar!")

    if (cantidad === "all") {

      const dinerototal = await dinero.obtener(`${user.id}`)

      dinero.restar(`${user.id}`, dinerototal)
      dinerobanco.sumar(`${user.id}`, dinerototal)

      message.channel.send(`<a:Dinero:865796080678862889> **${user.username}** ha depositado todo su dinero en el banco`)

    }

    dinerobanco.sumar(`${user.id}`, cantidad)
    dinero.restar(`${user.id}`, cantidad)

    message.channel.send(`<a:Dinero:865796080678862889> **${user.username}** ha depositado **${cantidad}$** en el banco`)

  } else if (command === "rob") {

    const user = message.author;
    const target = message.mentions.users.first();

    if (!target) return message.channel.send("Debes mencionar a la persona que le quieres robar!")

    const dinerotarget = await dinero.obtener(`${target.id}`)
    const dinerouser = await dinero.obtener(`${user.id}`)

    const dineroaleatorio = Math.floor(Math.random() * dinerotarget) + 1

    if (target.id === user.id) return message.channel.send("No te puedes robar a ti mismo!")

    if (!isNaN(args[0])) return message.channel.send("Ese usuario no existe!")

    if (dinerotarget < 300) return message.channel.send("No puedes robarle a esa persona ya que tiene poco dinero!")

    if (!dinero.tiene(`${target.id}`)) return message.channel.send("Esa persona no tiene dinero!")

    let posibilidades = ['bien', 'mal']
    let posibilidadfinal = posibilidades[Math.floor(Math.random() * posibilidades.length)]

    if (posibilidadfinal === "bien") {
      dinero.restar(target.id, dineroaleatorio)

      dinero.sumar(user.id, dineroaleatorio)

      message.channel.send(`<a:Dinero:865796080678862889> Has robado a **${target.username}** y has ganado **${dineroaleatorio}**`)

    } else if (posibilidadfinal === "mal") {
      dinero.restar(user.id, dineroaleatorio)

      message.channel.send(`<a:Dinero:865796080678862889> Has intentado robar a **${target.username}** y has perdido **${dineroaleatorio}**`)

    }

  } else if (command === "addmoney") {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("No tienes permisos para ejecutar ese comando!")

    const user = message.author;

    if (!dinero.tiene(`${user.id}`)) {
      dinero.establecer(`${user.id}`, 0)
    }

    const dinerocantidad = args.join(" ")
    if (!dinerocantidad) return message.channel.send("Debes decir la cantidad que añades!")

    dinero.sumar(`${user.id}`, dinerocantidad)

    message.channel.send(`<a:Dinero:865796080678862889> Se le han añadido **${dinerocantidad}$** a **${user}**`)

  } else if (command === "tienda") {

    const embed = new Discord.MessageEmbed()
      .setTitle("<a:Dinero:865796080678862889> Tienda <a:Dinero:865796080678862889>")
      .addField("<a:cool:866674612766113812> **VIP - 10,000$**", "Al comprar este articulo obtendras varios beneficios, como un canal privado para los rango MVP y se te otorgaran 10,000$")
      .addField("<a:cool:866674612766113812> **MVP - 20,000$**", "Al comprar este articulo obtendras varios beneficios, como un canal privado para los rango MVP y se te otorgaran 10,000$ y 1 Gema")
      .addField("<:gema:866511855337472010> **Gema - 1,000,000$**", "1,000,000$")
      .addField("<a:cool:866674612766113812> **Premium - 30 Gemas**", "Al comprar este elemento todos tus sueños se haran realidad, tendras habilidades unicas sobre los jugadores")
      .setColor("BLURPLE")

    message.channel.send(embed)

  } else if (command === "shop") {

    const user = message.author;

    if (!dinero.tiene(`${user.id}`)) {
      dinero.establecer(`${user.id}`, 0)
    }

    const objeto = args[0]
    if (!objeto) return message.channel.send("Debes decir el objeto que vas a comprar!")

    if (objeto === "MVP") {
      if (dinero < 20000) return message.channel.send("No tienes dinero suficiente para comprar este elemento!")

      if (!gema.tiene(`${user.id}`)) {
        gema.establecer(`${user.id}`, 0)
      }

      dinero.restar(`${user.id}`, 20000)
      dinero.sumar(`${user.id}`, 0)

      const member = message.guild.members.cache.get(user.id)

      member.roles.add('750201282119073835')
      message.channel.send("<a:cool:866674612766113812> Has comprado el articulo **MVP**")

    } else if (objeto === "VIP") {
      if (dinero < 10000) return message.channel.send("No tienes dinero suficiente para comprar este elemento!")

      dinero.restar(`${user.id}`, 10000)

      const member = message.guild.members.cache.get(user.id)

      member.roles.add('746209436405727312')
      message.channel.send("<a:cool:866674612766113812> Has comprado el articulo **VIP**")

    } else if (objeto === "Gema") {
      if (dinero < 1000000) return message.channel.send("No tienes dinero suficiente para comprar este elemento!")

      if (!gema.tiene(`${user.id}`)) {
        gema.establecer(`${user.id}`, 0)
      }

      dinero.restar(`${user.id}`, 1000000)

      gema.sumar(`${user.id}`, 1)

      message.channel.send("<:gema:866511855337472010> Has comprado el articulo **Gema**")

    } else {
      message.channel.send("Ese articulo no esta en la tienda!")
    }

  } else if (command === "gemrob") {

    const user = message.author;
    const target = message.mentions.users.first();

    if (!target) return message.channel.send("Debes mencionar a la persona que le quieres robar!")

    const gemastarget = await dinero.obtener(`${target.id}`)
    const gemasuser = await dinero.obtener(`${user.id}`)

    const gemasaleatorio = Math.floor(Math.random() * gemastarget) + 1

    if (target.id === user.id) return message.channel.send("No te puedes robar a ti mismo!")

    if (!isNaN(args[0])) return message.channel.send("Ese usuario no existe!")

    if (gemastarget < 10) return message.channel.send("No puedes robarle a esa persona ya que tiene pocas monedas!")

    if (!gema.tiene(`${target.id}`)) return message.channel.send("Esa persona no tiene dinero!")

    let posibilidades = ['bien', 'mal']
    let posibilidadfinal = posibilidades[Math.floor(Math.random() * posibilidades.length)]

    if (posibilidadfinal === "bien") {
      gema.restar(target.id, gemasaleatorio)

      gema.sumar(user.id, gemasaleatorio)

      message.channel.send(`<a:Dinero:865796080678862889> Has robado a **${target.username}** y has ganado **${gemasaleatorio}**`)

    } else if (posibilidadfinal === "mal") {
      gema.restar(user.id, gemasaleatorio)

      message.channel.send(`<a:Dinero:865796080678862889> Has intentado robar a **${target.username}** y has perdido **${gemasaleatorio}**`)

    }

  } else if (command === "search") {

    const user = message.mentions.users.first()
    if (!user) return message.channel.send("Debes mencionar un usuario!")

    if (!dinero.tiene(`${user.id}`)) {
      dinero.establecer(`${user.id}`, 0)
    }

    if (!dinerobanco.tiene(`${user.id}`)) {
      dinerobanco.establecer(`${user.id}`, 0)
    }

    if (!gema.tiene(`${user.id}`)) {
      gema.establecer(`${user.id}`, 0)
    }

    const dineroTotal = await dinero.obtener(`${user.id}`)
    const dineroBancoTotal = await dinerobanco.obtener(`${user.id}`)
    const gemas = await gema.obtener(`${user.id}`)

    const embed = new Discord.MessageEmbed()
      .setTitle(`<a:Dinero:865796080678862889> Resultados de la busqueda: Usuario ${user.username}`)
      .addField("Dinero en total", dineroTotal + dineroBancoTotal + '$')
      .addField("Gemas", gemas)
      .setColor('GREEN')

    message.channel.send(embed)

  } else if (command === "pay") {

    const user = message.author;
    const target = message.mentions.users.first();

    if (!target) return message.channel.send("Debes mencionar a un usuario!")

    const cantidad = args[1]
    if (!cantidad) return message.channel.send("Debes decir la cantidad que vas a pagar!")

    const dinerouser = dinero.obtener(`${user.id}`)
    const dinerotarget = dinero.obtener(`${target.id}`)

    if (dinerouser < cantidad) return message.channel.send("No tienes dinero suficiente!")

    dinero.sumar(`${target.id}`, cantidad)

    dinero.restar(`${user.id}`, cantidad)

    message.channel.send(`<a:Dinero:865796080678862889> **${target.username}** ha pagado **${cantidad}$** a ${user.username}`)

  } else if (command === "test") {

    client.emit('guildMemberAdd', message.member)

  } else if (command === "miniyt") {

    if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.reply('No tienes permisos para ejecutar ese comando!')

    const user = message.mentions.users.first();

    if (!user) return message.channel.send("Debes mencionar a un usuario")

    const member = message.guild.members.cache.get(user.id)

    member.roles.add('746209435776712724')
    message.channel.send(`El rol **MiniYT** fue otorgado al usuario **${user.username}**`)

  } else if (command === "youtu") {

    if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.reply('No tienes permisos para ejecutar ese comando!')

    const user = message.mentions.users.first();

    if (!user) return message.channel.send("Debes mencionar a un usuario")

    const member = message.guild.members.cache.get(user.id)

    member.roles.add('746209435130789918')
    message.channel.send(`El rol **YT** fue otorgado al usuario **${user.username}**`)

  } else if (command === "famous") {

    if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.reply('No tienes permisos para ejecutar ese comando!')

    const user = message.mentions.users.first();

    if (!user) return message.channel.send("Debes mencionar a un usuario")

    const member = message.guild.members.cache.get(user.id)

    member.roles.add('746209434417496190')
    message.channel.send(`El rol **Famoso** fue otorgado al usuario **${user.username}**`)

  } else if (command === "streamer") {

    if (!message.member.hasPermission("MANAGE_MESSAGE")) return message.reply('No tienes permisos para ejecutar ese comando!')

    const user = message.mentions.users.first();

    if (!user) return message.channel.send("Debes mencionar a un usuario")

    const member = message.guild.members.cache.get(user.id)

    member.roles.add('764211547467153448')
    message.channel.send(`El rol **Streamer** fue otorgado al usuario **${user.username}**`)

  }else if(command === "wikipedia"){

    const query = args.slice(0).join(" ")
    if(!query) return message.channel.send('Debes poner lo que buscaras!')

    const res = new Wikipedia({
      message: message,
      color: "#18ebdf",
      query: query
    })

    res.fetch()

  }
});

//////////////BOTONES//////////////

client.on('clickButton', async (button) => {
  if (button.id == "btnInfo") {

    const embed = new Discord.MessageEmbed()
      .setTitle("<a:Info:865697324508512268> **Comandos De Informacion** <a:Info:865697324508512268>")
      .setDescription("`e!help`\n\n`e!redes`\n\n`e!yt`")
      .setColor('GREEN')

    const btnInformacion = new Buttons.MessageButton()
      .setStyle('green')
      .setLabel('Informacion')
      .setEmoji('865697324508512268')
      .setID('btnInfo')
      .setDisabled();

    const btnDiversion = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Diversion')
      .setEmoji("865696083841777684")
      .setID('btnParty')

    const btnMusica = new Buttons.MessageButton()
      .setStyle('gray')
      .setLabel('Music')
      .setEmoji("865695448480088074")
      .setID('btnMusic')

    const btnUtility = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Utilidad')
      .setEmoji("865430609735188530")
      .setID('btnUti')

    const btnStaffs = new Buttons.MessageButton()
      .setStyle('red')
      .setLabel('Staffs')
      .setEmoji('865694972103884800')
      .setID('btnStaff')

    button.message.edit({
      buttons: [btnInformacion, btnDiversion, btnMusica, btnUtility, btnStaffs],
      embed: embed
    });

  } else if (button.id == "btnParty") {

    const embed = new Discord.MessageEmbed()
      .setTitle("<a:tada:865697004730449940> **Comandos De Diversion** <a:tada:865697004730449940>")
      .setDescription("`e!kiss`\n\n`e!boom`\n\n`e!8ball`\n\n`e!kill`\n\n`e!hug`\n\n`e!punch`\n\n`e!ship`\n\n`e!tweet`")
      .setColor('BLUE')

    const btnInformacion = new Buttons.MessageButton()
      .setStyle('green')
      .setLabel('Informacion')
      .setEmoji('865697324508512268')
      .setID('btnInfo')

    const btnDiversion = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Diversion')
      .setEmoji("865696083841777684")
      .setID('btnParty')
      .setDisabled();

    const btnMusica = new Buttons.MessageButton()
      .setStyle('gray')
      .setLabel('Music')
      .setEmoji("865695448480088074")
      .setID('btnMusic')

    const btnUtility = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Utilidad')
      .setEmoji("865430609735188530")
      .setID('btnUti')

    const btnStaffs = new Buttons.MessageButton()
      .setStyle('red')
      .setLabel('Staffs')
      .setEmoji('865694972103884800')
      .setID('btnStaff')

    button.message.edit({
      buttons: [btnInformacion, btnDiversion, btnMusica, btnUtility, btnStaffs],
      embed: embed
    });

  } else if (button.id == "btnStaff") {

    if (!button.clicker.member.hasPermission('MANAGE_MESSAGE')) {
      button.channel.send("No tienes permisos para presionar ese boton!")
    } else {

      const embed = new Discord.MessageEmbed()
        .setTitle("<a:Staff:865694972103884800> **Comandos De Staffs** <a:Staff:865694972103884800>")
        .setDescription("`e!ban`\n\n`e!kick`\n\n`e!warn`\n\n`e!clear`\n\n`e!say`\n\n`e!userinfo`\n\n`e!giveaway`\n\n`e!end`\n\n`e!reroll`\n\n`e!muterol`\n\n`e!mute`\n\n`e!unmute`\n\n`e!md`")
        .setColor('RED')

      const btnInformacion = new Buttons.MessageButton()
        .setStyle('green')
        .setLabel('Informacion')
        .setEmoji('865697324508512268')
        .setID('btnInfo')

      const btnDiversion = new Buttons.MessageButton()
        .setStyle('blurple')
        .setLabel('Diversion')
        .setEmoji("865696083841777684")
        .setID('btnParty')

      const btnMusica = new Buttons.MessageButton()
        .setStyle('gray')
        .setLabel('Music')
        .setEmoji("865695448480088074")
        .setID('btnMusic')

      const btnUtility = new Buttons.MessageButton()
        .setStyle('blurple')
        .setLabel('Utilidad')
        .setEmoji("865430609735188530")
        .setID('btnUti')

      const btnStaffs = new Buttons.MessageButton()
        .setStyle('red')
        .setLabel('Staffs')
        .setEmoji('865694972103884800')
        .setID('btnStaff')
        .setDisabled();

      button.message.edit({
        buttons: [btnInformacion, btnDiversion, btnMusica, btnUtility, btnStaffs],
        embed: embed
      });
    }

  } else if (button.id == "btnMusic") {

    const embed = new Discord.MessageEmbed()
      .setTitle("<:Music:865695448480088074> **Comandos De Musica** <:Music:865695448480088074>")
      .setDescription("`e!play`\n\n`e!pause`\n\n`e!continue`\n\n`e!loop`\n\n`e!skip`")
      .setColor('GRAY')


    const btnInformacion = new Buttons.MessageButton()
      .setStyle('green')
      .setLabel('Informacion')
      .setEmoji('865697324508512268')
      .setID('btnInfo')

    const btnDiversion = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Diversion')
      .setEmoji("865696083841777684")
      .setID('btnParty')

    const btnMusica = new Buttons.MessageButton()
      .setStyle('gray')
      .setLabel('Music')
      .setEmoji("865695448480088074")
      .setID('btnMusic')
      .setDisabled();

    const btnUtility = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Utilidad')
      .setEmoji("865430609735188530")
      .setID('btnUti')

    const btnStaffs = new Buttons.MessageButton()
      .setStyle('red')
      .setLabel('Staffs')
      .setEmoji('865694972103884800')
      .setID('btnStaff')

    button.message.edit({
      buttons: [btnInformacion, btnDiversion, btnMusica, btnUtility, btnStaffs],
      embed: embed
    });

  } else if (button.id == "btnUti") {

    const embed = new Discord.MessageEmbed()
      .setTitle("<a:Verificado:865430609735188530> **Comandos De Utilidad** <a:Verificado:865430609735188530>")
      .setDescription("`e!youtube`\n\n`e!recordatorio`")
      .setColor('BLUE')

    const btnInformacion = new Buttons.MessageButton()
      .setStyle('green')
      .setLabel('Informacion')
      .setEmoji('865697324508512268')
      .setID('btnInfo')

    const btnDiversion = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Diversion')
      .setEmoji("865696083841777684")
      .setID('btnParty')

    const btnMusica = new Buttons.MessageButton()
      .setStyle('gray')
      .setLabel('Music')
      .setEmoji("865695448480088074")
      .setID('btnMusic')

    const btnUtility = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Utilidad')
      .setEmoji("865430609735188530")
      .setID('btnUti')
      .setDisabled();

    const btnStaffs = new Buttons.MessageButton()
      .setStyle('red')
      .setLabel('Staffs')
      .setEmoji('865694972103884800')
      .setID('btnStaff')

    button.message.edit({
      buttons: [btnInformacion, btnDiversion, btnMusica, btnUtility, btnStaffs],
      embed: embed
    });

  } else if (button.id == "btnMon") {

    if (!dinero.tiene(`${button.clicker.id}`)) {
      dinero.establecer(`${button.clicker}`, 0)
    }

    if (!dinerobanco.tiene(`${button.clicker.id}`)) {
      dinerobanco.establecer(`${button.clicker.id}`, 0)
    }

    const dinerototal = await dinero.obtener(`${button.clicker.id}`)
    const dinerobancototal = await dinerobanco.obtener(`${button.clicker.id}`)

    const embed = new Discord.MessageEmbed()
      .setTitle(`<a:Dinero:865796080678862889> Dinero de ${button.clicker.user.username} <a:Dinero:865796080678862889>`)
      .addField(`Dinero`, `${dinerototal}$`)
      .addField(`Dinero en el banco`, `${dinerobancototal}$`)
      .addField('Dinero en total', dinerototal + dinerobancototal + '$')

    const btnDinero = new Buttons.MessageButton()
      .setStyle('green')
      .setLabel('Dinero')
      .setEmoji('865796080678862889')
      .setID('btnMon')
      .setDisabled();

    const btnGema = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Gemas')
      .setEmoji('866511855337472010')
      .setID('btnGem')

    button.message.edit({
      buttons: [btnDinero, btnGema],
      embed: embed
    });

  } else if (button.id == "btnGem") {

    if (!gema.tiene(`${button.clicker.id}`)) {
      gema.establecer(`${button.clicker.id}`, 0)
    }

    const gemastotal = await gema.obtener(`${button.clicker.id}`)

    const embed = new Discord.MessageEmbed()
      .setTitle(`<:gema:866511855337472010> Gemas de ${button.clicker.user.username} <:gema:866511855337472010>`)
      .addField(`Gemas`, `${gemastotal}`)

    const btnDinero = new Buttons.MessageButton()
      .setStyle('green')
      .setLabel('Dinero')
      .setEmoji('865796080678862889')
      .setID('btnMon')

    const btnGema = new Buttons.MessageButton()
      .setStyle('blurple')
      .setLabel('Gemas')
      .setEmoji('866511855337472010')
      .setID('btnGem')
      .setDisabled();

    button.message.edit({
      buttons: [btnDinero, btnGema],
      embed: embed
    });

  }
});

//////////////FUNCION MUSICA//////////////

client.distube = new Distube(client, {
  emitNewSongOnly: false,
  searchSongs: false,
  leaveOnStop: false,
  leaveOnFinish: true,
  leaveOnEmpty: true,
});

client.distube.on('addList', (message, queue, addlist) => {
  message.channel.send(`Se añadio la playlist llamada **${addlist.name}** | ${message.author}`)
});

client.distube.on('addSong', (message, queue, addsong) => {
  message.channel.send(`Se añadio la cancion llamada **${addsong.name}** | ${message.author}`);
});

client.distube.on('playSong', (message, queue, playsong) => {
  message.channel.send(`Actualmente se esta reproduciendo la cancion **${playsong.name}** | ${message.author}`);
});

client.distube.on('playList', (message, queue, playlist) => {
  message.channel.send(`Actualmente se esta reproduciendo la playlist **${playlist.name}** | ${message.author}`);
});

client.distube.on('error', (message, error) => {
  console.log(error);
});

client.on('message', async message => {
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  //Comando play
  if (command === "play" || command === "p") {
    const song = args.join(" ")
    if (!song) return message.channel.send("Debes poner el nombre o el link de una cancion a escuchar!")

    if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz!")

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en mi mismo canal!")

    client.distube.play(message, song)

    //Comando pause
  } else if (command === "pause" || command === "stop" || command === "s") {
    const serverQueue = client.distube.getQueue(message)
    if (!serverQueue) return message.channel.send("Actualmente no se esta reproduciendo ninguna cancion!")

    if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz!")

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en mi mismo canal!")

    if (serverQueue.pause) return message.channel.send("La musica ya estaba pausada!")

    client.distube.pause(message);
    message.channel.send("La musica fue pausada correctamente!")

    //Comando continue
  } else if (command === "continue" || command === "resume") {
    const serverQueue = client.distube.getQueue(message)
    if (!serverQueue) return message.channel.send("Actualmente no se esta reproduciendo ninguna cancion!")

    if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz!")

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en mi mismo canal!")

    if (!serverQueue.pause) return message.channel.send("La musica no estaba pausada!")

    client.distube.resume(message);
    message.channel.send("La musica continua correctamente!")

    //Comando skip
  } else if (command === "skip") {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send("Actualmente no se esta reproduciendo ninguna cancion!")

    if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz!")

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en mi mismo canal!")

    client.distube.skip(message)
    message.channel.send("Has saltado la cancion correctamente!")

    //Comando loop  
  } else if (command === "loop" || command === "repeat") {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send("Actualmente no se esta reproduciendo ninguna cancion!")

    if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz!")

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en mi mismo canal!")

    const option = args[0];
    if (!option) return message.channel.send("Debes decir si quieres que se active o se desactive el loop con activar/desactivar o quieres hacer un loop con la playlist con activarp!");

    if (option !== "activar") {
      if (option !== "desactivar") {
        if (option !== "activarp") {
          return message.channel.send("Esa opcion no es correcta!")
        }
      }
    }

    if (option === "activar") {
      client.distube.setRepeatMode(message, 1)
      message.channel.send("Se **ACTIVO** el loop para esa cancion!")
    }

    if (option === "desactivar") {
      client.distube.setRepeatMode(message, 0)
      message.channel.send("Se **DESACTIVO** el loop para esa cancion/playlist!")
    }

    if (option === "activarp") {
      client.distube.setRepeatMode(message, 2)
      message.channel.send("Se **ACTIVO** el loop para esa playlist!")
    }
  }
});

//////////////GIVEWAY//////////////

client.on('message', async message => {
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (command === "giveaway") {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("No tienes permisos para ejecutar ese comando!")

    const channel = message.mentions.channels.first();
    if (!channel) return message.channel.send("Debes mencionar un canal!")

    const duration = args[1];
    if (!duration) return message.channel.send("Debes decir la duracion del sorteo!")

    const winners = args[2]
    if (!winners) return message.channel.send("Debes decir cuantos ganadores habran!")

    const prize = args.slice(3).join(" ")
    if (!prize) return message.channel.send("Debes decir el premio!")

    client.giveaways.start(channel, {
      time: ms(duration),
      prize: prize,
      winnerCount: parseInt(args[2]),
      hostedBy: client.config.hostedBy ? message.author : null,
      messages: {
        giveaway: "@everyone **🎉 Sorteo 🎉**",
        giveawayEnded: "@everyone **🎉 Sorteo Terminado 🎉**",
        timeRemaining: "Tiempo restante **{duration}**",
        inviteToParticipate: "Reacciona a :tada: para participar en el sorteo",
        winMessage: "{winners} Ha ganado el sorteo, pronto resibira su premio",
        embedFooter: "Giveaway time!",
        noWinner: "No se ha determinado un ganador",
        hostedBy: `Hosteado por: ${message.author}`,
        winners: "Ganadores",
        endedAt: "Terminado a",
        units: {
          seconds: "segundos",
          minutes: "minutos",
          hours: "horas",
          days: "dias",
          plurals: false
        }
      }
    })
    message.channel.send(`Sorteo empezado en el canal ${channel}`)

  } else if (command === "end") {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("No tienes permisos para ejecutar ese comando!")
    if (!args[0]) return message.channel.send("Debes colocar la id del sorteo!")

    const giveaway = client.giveaways.giveaways.find((g) => g.messageID === args.join(" "))
    if (!giveaway) return message.channel.send("Este giveaway no existe!")

    client.giveaways.edit(giveaway.messageID, {
      setEndTimestamp: Date.now()
    }).then(() => {
      message.channel.send(`El sorteo ha acabado`)
    }).catch(err => {
      console.log(err);
    })

  } else if (command === "reroll") {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("No tienes permisos para ejecutar ese comando!")

    if (!args[0]) return message.channel.send("Debes colocar la id del sorteo!")

    const giveaway = client.giveaways.giveaways.find((g) => g.messageID === args.join(" "))
    if (!giveaway) return message.channel.send("Este giveaway no existe!")

    client.giveaways.reroll(giveaway.messageID)
      .then(() => {
        message.channel.send("Se ha encontrado otro ganador!")
      })
      .catch(err => {
        console.log(err)
      })
  }
})

//////////////NIVELES//////////////

client.on('message', async message => {
  if (message.author.bot) return

  let user = message.author;

  if (!xp.tiene(`${user.id}`)) xp.establecer(`${user.id}`, 0)
  if (!level.tiene(`${user.id}`)) level.establecer(`${user.id}`, 0)

  var xpNeeded = 1500;
  var addXp = 30;

  await xp.sumar(`${user.id}`, addXp)

  const xpUser = await xp.obtener(`${user.id}`)

  if (xpUser >= xpNeeded) {
    await level.sumar(`${user.id}`, 1)
    await xp.establecer(`${user.id}`, 0)

    const levelUser = await level.obtener(`${user.id}`)

    client.channels.cache.get("746209478319407194").send(`Bien has subido de nivel ${user}, tu nivel ahora es ${levelUser}`)
  }

  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (command === "level") {

    const user = message.mentions.users.first() || message.author;

    function doImgAction() {
      var random = [
        './img/rank.jpg',
        './img/rank2.jpg',
        './img/rank3.jpg',
        './img/rank4.jpg',
        './img/rank5.jpg'
      ]

      return random[Math.floor(Math.random() * random.length)];
    }

    const xpUser = await xp.obtener(`${user.id}`)
    const levelUser = await level.obtener(`${user.id}`)
    var xpNeeded = 1500;

    const card = new Canvacord.Rank()
      .setUsername(user.username)
      .setDiscriminator(user.discriminator)
      .setLevel(levelUser)
      .setCurrentXP(xpUser)
      .setRequiredXP(xpNeeded)
      .setStatus(user.presence.status)
      .setAvatar(user.displayAvatarURL({ format: 'png', size: 1024 }))
      .setProgressBar("#18ebdf", "COLOR")
      .setBackground("IMAGE", doImgAction())

    const img = await card.build()

    return message.channel.send(new Discord.MessageAttachment(img, 'rank.png'))

  }

})

//////////////BIENVENIDAS Y DESPEDIDAS//////////////

client.on('guildMemberAdd', async member => {
  const embed = new Discord.MessageEmbed()
	.setAuthor('EmirYT57 | Bot')
	.setTitle('Bienvenido mi pana')
	.setDescription(`Bienvenido **${member.user.username}**\n\nNo te olvides de divertirte y respetar las reglas para evitar un baneo.\nRecuerda que puedes divertirte pero siempre respetando\nLos panas`)
	.setFooter('Gracias por unirte :)')
	.setImage('https://thumbs.gfycat.com/CharmingNarrowKudu-max-14mb.gif')
	.setColor('03f7a7');
  client.channels.cache.get("746209471252005005").send(embed)
});

client.on('guildMemberRemove', member => {
  const embed = new Discord.MessageEmbed()
    .setAuthor('EmirYT57 | Bot')
    .setTitle('BYE')
    .setDescription(
      `El usuario **${member.user.username}** se salio del servidor`)
    .setFooter('Nos vemos pronto :(')
    .setColor('ff0000');
  client.channels.cache.get('869594782450733096').send(embed);
});

//////////////ANTI-LINKS//////////////

client.on('message', async message => {
  let words = ['discord.gg', 'discord.com/invite', 'discordapp.com/invite', 'https://', 'http://', 'pelotudo', 'gay', 'bitch', 'boludo', 'tonto', 'puta', 'puto', 'fuck', 'homosexual', 'hijoeputa', 'pornhub', 'sexo', 'xnxx']
  if (!message.member.hasPermission('ADMINISTRATOR')) {
    if (words.some(word => message.content.toLowerCase().includes(word))) {
      await message.delete();
      return message.reply("No puedes escribir eso!")
    }
  }
});

client.login(process.env.token);


/*const embed = new Discord.MessageEmbed()
.setTitle("Estos son los comandos del server de ☆EmirYT57☆")
.setDescription("Estos son todos los comandos de la comunidad de EmirYT57")
.addField("<a:ZCVerificado:654352204513411082> **Comandos basicos** <a:ZCVerificado:654352204513411082>", "`e!help` `e!redes`")
.addField("<a:PartyGlasses:594995517927456810> **Comandos Diversion** <a:PartyGlasses:594995517927456810>", "`e!kiss` `e!boom` `e!kill` `e!8ball` `e!rps`")
.addField("<a:police:568461852653387785> **Comandos Staffs** <a:police:568461852653387785>", "`e!kick` `e!ban` `e!warn` `e!clear` `e!say` `e!userinfo`")*/






