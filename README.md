# Stargazer

Get Slack notifications whenever someone stars your Github repo! 🌟

<img width="412" alt="Slack example message" src="https://user-images.githubusercontent.com/6509926/32450649-5c1a4e82-c2da-11e7-98a4-2a9ec1cd2ab7.png">

This project uses:

- the [Serverless Framework](https://serverless.com/);
- [Github webhooks](https://developer.github.com/webhooks/); and
- Slack's [incoming webhooks](https://api.slack.com/incoming-webhooks).

# Usage

1. Install the Serverless Framework and create a new service from this repo:

  ```bash
  $ npm install -g serverless
  $ sls create --template-url https://github.com/alexdebrie/stargazer -p stargazer
  $ cd stargazer
  ```

2. Create an [incoming webhook integration](https://my.slack.com/services/new/incoming-webhook/) in Slack. Copy the webhook URL into `serverless.yml` as the `WEBHOOK_URL` environment variable.

3. Deploy your Serverless service ⚡️:

  ```bash
  $ sls deploy
  ```

  You'll see an endpoint for your function in the `Service Information` section once the deploy is finished.

4. Create a webhook in your preferred Github repository (docs [here](https://developer.github.com/webhooks/creating/)). Use the endpoint from the previous step as your payload URL.

5. Watch the notifications come in! 😎
