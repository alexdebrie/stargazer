'use strict';

const request = require('sync-request');

const WEBHOOK_URL = process.env.WEBHOOK_URL;

module.exports.stargazer = (event, context, callback) => {
  const body = JSON.parse(event.body)
  const { repository, sender } = body;

  const repo = repository.name;
  const stars = repository.stargazers_count;
  const username = sender.login;
  const url = sender.html_url;

  try {
    sendToSlack(repo, stars, username, url);
  } catch (err) {
    console.log(err);
    callback(err);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Event processed"
    }),
  };
  callback(null, response);
};

const sendToSlack = (repo, stars, username, url) => {
  const text = [
    `New Github star for _${repo}_ repo!.`,
    `The *${repo}* repo now has *${stars}* stars! :tada:.`,
    `Your new fan is <${url}|${username}>`
  ].join('\n');
  const resp = request('POST', WEBHOOK_URL, {
    json: { text }
  });

  // Use getBody to check if there was an error.
  resp.getBody();
}
