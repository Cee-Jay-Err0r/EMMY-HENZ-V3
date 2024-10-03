//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Edo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEN2ODhHQ3hMK3NWTWJwU1A2RkQwVnVLSHJDTVV3aDJGandGaitCaXlIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFI2WWlyTW9Xb3ZvNHF4Z2tCRWVVWEkwZGhyemg0ejlBVUs3TVc2OXhSWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR25oT2pUSkxSSHp3SkVPbDdwTmxFWTNYTTAvQlJ4TE9GOFJTcXI0MDN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJieFVzRE1oVHdGN0RGT3lKSklpTHlUQXpiSHIxYy9Od2FjaURFcXVSeERzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKVXQ2OGoyNktkYmY2ckVSRlQvMWU1anJRWDhjMjdoMzl3MWQ1cTVlV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBxNlVHZVJ5ZEV4WTR5V3BDMExqV0NwZDE2aWtBYmpUeGtmWFRFVjA2Q1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VHYWh5THZlcFNOYys3MlJIdEQ1RTNiODNJRDc3a0txYWlVNkFwMy8yTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzJqaGFDRnZCcC9RNndyUWFFT3llZGNZY2d3M3ozVEMrTERiNEpSdENDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR2b2RpTnkxbjNsZk90V2Vtd0FubU9LOUg3ZHozQ1RHenpqcDFvell3cHB1SHdWWGh6YTdRNkNWOSt4ZWRTOVROdThWRmwvNGhKTUZyTVdjOUZUR0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJadUxSY0Jnd2NnaDlKcU90QlJJRzcrdC9VcjFOTldoWkxWV0QxQm1WTjdNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNzg0OTc1MTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUQyQ0I2RkJDQ0E5MkQxMDA2MjQ1MzMyMzAwNjc3RjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzk3NTk1OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLUZ5QktpQUNSdk8teU5ybHgwQ3llUSIsInBob25lSWQiOiJkMjYzYTE2ZC0yZWE3LTQ1NGEtYjhkZC0yOGYyNWMxODU4NTMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmt1ekhyWVk2UUk4OGk2U3lMeWM3cXBoT1k4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZJTG1YOUFWd0lVMGZNeEV1RFlzK3BQd3Z6VT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2WFpKVjZTRSIsIm1lIjp7ImlkIjoiMjM0NzA3ODQ5NzUxMzo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNlZSBKYXkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09tbWlzd0NFSUtrKzdjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpQb1hVQ2pQOGlyamdVZ01ud0pWK3luZ3lNYnNYZ3N0TlRndTRlbVdaWGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJyZGRxOXNlMGhjakFXQk02U09tWHRQY003OTYzVzh5VzdybHpBWlEzMzRvTFNkTlUzK2puTmZVUHRrVmpJajZYckx4Y0tvUFpqeUZaODF6ZXEvOUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0QkxCbUZ3bWVHZzk5NkVhQ3VLUWFOU0ZFUGd6RWZiQlF2L3lORi9lcWtzWXMyWlNNSmJUTGl1ZlIyWElBYmVTSTY5NEtOU2FDTXhLZ3VISzFweFRCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNzg0OTc1MTM6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjejZGMUFvei9JcTQ0RklESjhDVmZzcDRNakc3RjRMTFRVNEx1SHBsbVY0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3OTc1OTUzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU16YyJ9"
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
