import * as Discord from "discord-webhook-node";
import * as dotenv from "dotenv"; dotenv.config();

interface Webhook {
    title: string
    description: string 
    color?: string
};

function sendWebhook(options: Webhook): void {
    let hook: Discord.Webhook = new Discord.Webhook(process.env.DISCORD_WEBHOOK)
    let col: unknown = options.color || "#da2c43";
    let colNum: number = (col as number);
    let embed: Discord.MessageBuilder = new Discord.MessageBuilder() 
    .setThumbnail("https://i.imgur.com/hMCh1ix.png")
    .setTitle(options.title)
    .setDescription(options.description)
    .setTimestamp()
    .setColor(colNum)
    
    hook.send(embed);
};

export {sendWebhook as Discord}; 