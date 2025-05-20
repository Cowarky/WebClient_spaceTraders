const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const tokenInput = require('./promptToken')

// Load the existing .env file
const envFilePath = path.resolve(__dirname, '../../../../.env'); // Adjust the path as necessary
const envConfig = dotenv.parse(fs.readFileSync(envFilePath));

// Function to update an environment variable
function updateEnvVariable(key, value) {
    envConfig[key] = "Bearer "+value; // Update the variable

    // Create the new .env content
    const newEnvContent = Object.entries(envConfig)
        .map(([k, v]) => `${k}=${v}`)
        .join('\n');

    // Write the new content back to the .env file
    fs.writeFileSync(envFilePath, newEnvContent);
    console.log(`Updated ${key} to ${value} in .env file.`);
}

function checkIfTokenExisted(key){
    if (envConfig[key].length > 0){
        return
    }else if (envConfig[key].length == 0){
        const token = tokenInput()
        updateEnvVariable(key, token);
    }
}

module.exports = checkIfTokenExisted

