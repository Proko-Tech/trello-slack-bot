require('dotenv').config();

const web = require('./config');

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = process.env.CHANNEL_ID;

async function write(text){
    const res = await web.chat.postMessage({ channel: conversationId, text });
    return res;
}

module.exports={write};
