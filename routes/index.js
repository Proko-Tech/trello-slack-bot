var express = require('express');
var router = express.Router();

const {write} = require('../services/slack/handlers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({status: 'success'});
});

router.head('/card', function(req, res, next){
  // https://trello.com/app-key
  //     https://trello.com/1/token/approve
  res.status(200).json({status: 'success'});
});

router.post('/card', async function(req, res, next){
  if(req.body.action.display.translationKey === 'action_move_card_from_list_to_list'){
    const text = `<@${process.env.CHANNEL_ID}> `+req.body.action.memberCreator.fullName+' has moved the card '+req.body.action.data.card.name+' from '+req.body.action.data.listBefore.name +' to '+req.body.action.data.listAfter.name+'. Check it out at: https://trello.com/c/'+req.body.action.data.card.shortLink;
    const result = await write(text);
  }
  res.status(200).json({status: 'success'});
});

module.exports = router;
