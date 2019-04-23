/**
 * This file is used to run hyron in nodejs environment.
 * However, you should migrate using @hyron/cli to make it 
 * more convenient, and make the later upgrade process easier, 
 * and help you better manage your application.
 */

const hyron = require("hyron");

/**
 * hyron will load modules that declare in app.json file
 * to register event. That make your app reduce depend on js
 * This is important, it allows you to manage source code 
 * more easily even with large projects, allowing hyron to 
 * support microservice more easily, allowing plug-in automation.
 */
hyron.build("app.json");