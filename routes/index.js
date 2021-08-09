require('dotenv').config();

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
  console.log(req.body.action.data.card);
  // if(z.action.display.translationKey === 'action_move_card_from_list_to_list'){
  //   const text = z.action.memberCreator.fullName+' has moved the card';
  //   const result = await write()
  // }
  res.status(200).json({status: 'success'});
});

module.exports = router;
