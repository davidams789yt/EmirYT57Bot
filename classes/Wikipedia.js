const fetch = require('node-fetch')
const Discord = require('discord.js')

class Wikipedia{
  constructor(options){
    if(!options.color) throw new TypeError('[EmirYT57] => El color no esta definido')
    if(typeof options.color !== 'string') throw new TypeError('[EmirYT57] => No es un valor valido!')
    if(!options.query) throw new TypeError('[EmirYT57] => La busqueda no esta definida')
    if(typeof options.query !== 'string') throw new TypeError('[EmirYT57] => No es un valor valido!')
    if(!options.color) throw new TypeError('[EmirYT57] => El mensaje no esta definido')

    this.color = options.color;
    this.query = options.query;
    this.message = options.message;
  }

  async fetch(){
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(this.query)}`

    let response;
    try {
      response = await fetch(url).then(res => res.json())
    } catch (e) {
      console.log(`La busqueda no salio como se esperaba`)
    }

    try{
      if(response.type === 'disambiguation'){
        const embed = new Discord.MessageEmbed()
        .setTitle(response.title)
        .setColor(this.color)
        .setURL(response.content_urls.desktop.page)
        .setThumbnail(response.thumbnail.source)
        .setDescription(`${response.extract} Otros enlaces para el mismo tema: [Click Me!](${response.content_urls.desktop.page}).`)
        this.message.channel.send(embed).catch()
      }else{
        const fullEmbed = new Discord.MessageEmbed()
        .setTitle(response.title)
        .setColor(this.color)
        .setURL(response.content_urls.desktop.page)
        .setThumbnail(response.thumbnail.source)
        .setDescription(response.extract)
        this.message.channel.send(fullEmbed).catch()
      }
    }catch(e){
      this.message.channel.send(new Discord.MessageEmbed().setDescription(`:x: | No se encontraron resultados para **${this.query}**`).setColor("RED"))
    }
  }
}
module.exports = Wikipedia;