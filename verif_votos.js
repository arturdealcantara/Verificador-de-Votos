// # Verificador-de-Votos

/* Verifica votos do Bots Para Discord, sem a necessidade de API
* Créditos: wiloficial#9287
* Modificado: Você?#1330
* Bot: https://botsparadiscord.com/bots/647956954358218752
* Servidor: https://discord.com/invite/y2gAPVA
* 
*  Caso tenha necessidade de modificar algo fique a vontade!
*/

 // crie um webhook no canal que deseja receber os últimos votos e configure essa primeira linha
  const voto = new Discord.WebhookClient('ID do WebHook', 'Token do WebHook'),

  // configuração (Já está com o necessário)
   bot_id = "550305758583980042", // BOT = Bots Para Discord
   channel_id = "537433191393525760" // Canal site_logs

client.on("message", async message => { // Se o seu for "bot.on" só modificar.
 
        // configuração (Já está com o necessário)
        const bot_id = "550305758583980042",//"550305758583980042" // BOT = Bots Para Discord
         channel_id = "537433191393525760" //"537433191393525760" // Canal site_logs

        try {
          // Verifica se a mensssagem enviada é no canal especificado acima, e reparte toda a menssagem (caso seja)
          if (message.author.id === bot_id && message.channel.id === channel_id) {
            let separador = message.content.split(' '),
              parte_1 = message.content.substr(message.content.indexOf("#")),
              parte_2 = parte_1.substr(7),
              parte_3 = parte_2.substr(parte_2.indexOf(")", "."))
            parte_2.replace(parte_3, "")

            let bot_name_1 = parte_3.replace(") votou no bot **`", ''),
              bot_name_2 = bot_name_1.replace("`**.", ''),
              bot_name_3 = bot_name_2.replace(`https://botsparadiscord.com/bots/${client.user.id}`, ''),
              bot_name_4 = bot_name_3.replace("<>", ''),
              bot_name_final = bot_name_4.replace(/(\r\n|\n|\r)/gm, "")

            // Aqui verifica se a menssagem repartida tem a tag do seu bot
            if (bot_name_final === client.user.tag) { // Defina a tag do seu bot ex: 'ZabbiX#7853' ou 'bot.user.tag' || 'client.user.tag'

            // Pra pegar o ID do usuário
              let sep = separador[2],
               sep1 = sep.replace("(", ''),
               userID = sep1.replace(")", '')

        /* ATRIBUIÇÃO DE PRÊMIOS
        * Aqui você pode atribuir prêmiação a quem votar no seu bot
        * Moedas, Vips, Outras coisas . . .
        * O ID do usuário "userID"
        */
              
              let userDiscord = await client.fetchUser(sep2) // Pesquise o usuário pelo ID, e envie uma mensagem informando que ganhou algo, ou agradeça pelo voto
              userDiscord.send(`Você votou no ZabbiX!
*Para te agradecer pelo apoio:*

**Prêmio recebido** (Vote de 8h em 8h) :partying_face: 
Bitcoin Cash: \`2000\` | Bitcoin: \`20\``) // Pode modificar e enviar uma embed
             
             // Configurção e Envio do WebHook //
              voto.send(`:partying_face: \`` + separador[1] + `\` votou no ${client.user.tag}! :tada:
>>> \`Vote você também e ganhe prêmios!\`
:link: https://botsparadiscord.com/bots/${client.user.id}/votar`, { // Recebeu 1 dia de \`VIP\`! :sunglasses:
                username: client.user.username, //Definição do nome do WebHook
                avatarURL: client.user.displayAvatarURL // Definição da imagem do WebHook
              }) 
            }
          }
        } catch (e) {
          console.log('Algo aconteceu :/\n' + e)
        }
})
