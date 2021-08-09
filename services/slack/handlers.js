const web = require('./config');

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = process.env.C025SF41C2J;

async function write(text){
    const res = await web.chat.postMessage({ channel: conversationId, text });
    return res;
}

module.exports={write};
