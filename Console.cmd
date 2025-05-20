echo off
echo welcome to the console of the client!!!!!!!!
echo here you can enable cheats, enter your token, use bots
echo enjoy

cd ./src/services/Nodejs/

node --env-file=../../../.env .\index.js
pause

node --watch ../utils/notification

@REM node --env-file=../../../.env .\index.js