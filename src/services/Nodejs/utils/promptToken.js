const prompt = require("prompt-sync")({ sigint: true });

function token () {return prompt.hide("Your token: ")}

module.exports = token