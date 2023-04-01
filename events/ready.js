/**
 * @author Lothaire Guée
 * @description
 *		Handler for the 'ready' event.
 */


/* ----------------------------------------------- */
/* FUNCTIONS                                       */
/* ----------------------------------------------- */
/**
 * Event called when the bot is ready after the connection to the api.
 * @param {Client} client The client that emitted the event.
 */
function execute( client ) {
	try {
		
		const channel = client.channels.cache.get("724430143950553139");

		// const laquiche = client.users.fetch("403955795814776835");

		//fetch message
		// channel.messages.fetch("1091785500370673804").then(message => {
		// 	message.reply("Tu te tais Jeremy, je sias où t'habite.");
		// });

		setInterval(() => {
			channel.send("<@984738274205638716> 🐟");
		}, 60000);

		
		// setInterval(() => {
		// 	laquiche.send("arrete de te branler stp....");
		// }, 120000);
	
	} catch (error) {
		console.log(error);
	}
}


/* ----------------------------------------------- */
/* MODULE EXPORTS                                  */
/* ----------------------------------------------- */
module.exports = {
	name: "ready",
	once : true,
	execute
}