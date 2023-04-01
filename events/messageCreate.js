/**
 * @author Lothaire Guée
 * @description
 *		This event is used to store the memes in the database and add their initial reactions.
 */

// const { activeMember } = require("../utils/modules/activeMember.js");


/* ----------------------------------------------- */
/* FUNCTIONS                                       */
/* ----------------------------------------------- */

/**
 * Function called when the event 'messageCreate' is emitted.
 * @param {Message} message The message created.
 * @param {Client} client The client that emitted the event.
 */
async function execute(message, client) {
    try {
        if(message.channel.id === "724430143950553139"){
            message.react("🐟");
        }
        if(message.member.id === "433606466847506432"){
            message.reply("Tu es ban.");
        }
        if(message.member.id === "667330026743660556"){
            message.member.send("Arrête de polluer à envoyer tes messages de merde là.");
        }
    } catch (error) {
        console.log(error);
    }
}

/* ----------------------------------------------- */
/* MODULE EXPORTS                                  */
/* ----------------------------------------------- */
module.exports = {
    name: "messageCreate",
    execute,
};
