<a href="https://www.prokopark.us"><p align="center">
<h1>Trello-Slack-Integration</h1>
</p></a>
<p align="center">
  <strong>Customized trello-slack integration server</strong>
</p>

<h3 align="center">
  <a href="">Contribute</a>
  <span> · </span>
</h3>

---

## Description:

This project is built to integrate trello task management with a custom slack bot. 

## Setup:

Refer to Trello webhook documentation on setting up the webhook for server: https://developer.atlassian.com/cloud/trello/guides/rest-api/webhooks/

Refer to Slack documentation on how to make a bot: https://api.slack.com/bot-users

Run the following commands
```linux
npm install
touch .env
```

Checkout `.env_sample`, replace your .env with the correspondng channel id, and 
slack token.
```
SLACK_TOKEN=
CHANNEL_ID=
```

## Contribution: 
Pull requests welcomed!
