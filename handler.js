"use strict";

const request = require("sync-request");

const WEBHOOK_URL = process.env.WEBHOOK_URL;

module.exports.stargazer = (req, res) => {
  const {
    body: { repository, sender }
  } = req;

  const repo = repository.name;
  const stars = repository.stargazers_count;
  const username = sender.login;
  const url = sender.html_url;

  try {
    sendToSlack(repo, stars, username, url);
  } catch (err) {
    console.log(err);
    throw err;
  }
  return res.send("Event processed");
};

const sendToSlack = (repo, stars, username, url) => {
  const text = `<${url}|${username}> starred _${repo}_ (*${stars}* stars)`;
  const resp = request("POST", WEBHOOK_URL, {
    json: { text }
  });

  // Use getBody to check if there was an error.
  resp.getBody();
};
