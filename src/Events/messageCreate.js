const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", (client,message) => {
    // (/ +/) - any space followed by any other spaces, checks if message starts with command prefix
    if (!message.content.startsWith(client.prefix)) return;

    const args = message.content.substring(client.prefix.length).split(/ +/);
    const command = client.commands.find(cmd => cmd.name == args[0]);
    if (!command) return message.reply(`${args[0]} is not a valid command.`);
    command.run(message, args, client);
})