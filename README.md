# Stargazer

Get Slack notifications whenever someone stars your Github repo! 🌟

<img width="412" alt="Slack example message" src="https://user-images.githubusercontent.com/412895/50142225-264aae80-02dc-11e9-8a70-27df5f4bba37.jpeg">

This project uses:

- the [Serverless Framework](https://serverless.com/);
- [Github webhooks](https://developer.github.com/webhooks/); and
- Slack's [incoming webhooks](https://api.slack.com/incoming-webhooks).

# Usage

1. Install the Serverless Framework and create a new service from this repo:

  ```bash
  $ npm install -g serverless
  $ sls create --template-url https://github.com/kytwb/stargazer -p stargazer
  $ cd stargazer
  ```

2. Create an [incoming webhook integration](https://my.slack.com/services/new/incoming-webhook/) in Slack. Copy the webhook URL into `serverless.yml` as the `WEBHOOK_URL` environment variable.

3. Still in `serverless.yml`, change the `project` value and copy your [keyfile](https://serverless.com/framework/docs/providers/google/guide/credentials/) under `./gcloud/keyfile.json`.

4. Deploy your Serverless service ⚡️:

  ```bash
  $ sls deploy
  ```

  You'll see an endpoint for your function in the `Service Information` section once the deploy is finished.

5. Create a webhook in your preferred Github repository (docs [here](https://developer.github.com/webhooks/creating/)). Use the endpoint from the previous step as your payload URL.

6. Watch the notifications come in! 😎
