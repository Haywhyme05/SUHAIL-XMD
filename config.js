const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_34_10_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDc2LFxuICAgICAgICA2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgxLFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDksXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODgsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDM0LFxuICAgICAgICAzNixcbiAgICAgICAgMTksXG4gICAgICAgIDYxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIaTFlQ2s4YkwybW1DR2ZHREI3L3FBV0ZLNUJGRWgyQktKOUQ2Q05uTG5FPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4UjFDaFhVbVQ2aWhIS1Z2VmZGSjJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZlYTY2OTYxLWMyNTgtNDZjZC1iNzliLTkzODA5NGI2MWQ3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICA5NixcbiAgICAgIDU2LFxuICAgICAgMTMsXG4gICAgICAxMDQsXG4gICAgICAxNjYsXG4gICAgICA1MSxcbiAgICAgIDE5NSxcbiAgICAgIDgxLFxuICAgICAgMjE2LFxuICAgICAgMTM0LFxuICAgICAgMjIsXG4gICAgICAxODUsXG4gICAgICAyMjYsXG4gICAgICAxODYsXG4gICAgICA0MCxcbiAgICAgIDI2LFxuICAgICAgMTA2LFxuICAgICAgMjE3LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDkxLFxuICAgICAgMTIxLFxuICAgICAgMzIsXG4gICAgICAyMzIsXG4gICAgICA1NCxcbiAgICAgIDgwLFxuICAgICAgODQsXG4gICAgICA2LFxuICAgICAgMTAwLFxuICAgICAgMTYwLFxuICAgICAgNSxcbiAgICAgIDE3NyxcbiAgICAgIDIyNSxcbiAgICAgIDE3MyxcbiAgICAgIDIxOSxcbiAgICAgIDExMyxcbiAgICAgIDk0LFxuICAgICAgMTUsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVktZVDhOQUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjQ0NTc1Mjc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzQzMTg0NjY0NjAwMjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pIRDZ1RURFTVNNeTdnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQjFQSkZUNFIwZGYzbzB3ZFNSOGw4bmFGM2RRYlpCVi92TnRBdWc1eVdRaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXc3ZvVjdZL0paRFFsR0VKbmthcTYyWFdGOUtxTEtCVVU4cEJFME1VZG8yTWdJU2FTdmdDd2xvZUllUTVHUzJKS3hVSTFxM0ZtQmNTUkZqM29UVERBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTbWFYU3l3bkwwSVloV29NSlJwZ05uTUVoSzJOMXpFN3Q0NHJwa2FOU2d2Y1BDQkYxMHI2aHFHYURDVnJtV05JZzlNWUg1ekhLeVdzeGt3akJhNDRodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDI0NDU3NTI3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkyODM2NTVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
