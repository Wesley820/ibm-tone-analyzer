require("dotenv").config();
const ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");
const { IamAuthenticator } = require("ibm-watson/auth");
const readline = require("readline-sync");

const toneAnalyzer = new ToneAnalyzerV3({
  version: "2017-09-21",
  authenticator: new IamAuthenticator({
    apikey: process.env.IBM_APIKEY,
  }),
  url: process.env.IBM_URL,
});

(async function () {
  while (true) {
    const ask = readline.question("say something: ");

    const toneParams = {
      toneInput: { text: ask },
      contentType: "application/json",
    };

    const response = await toneAnalyzer.tone(toneParams);
    console.log(JSON.stringify(response.result, null, 2));
  }
})();
