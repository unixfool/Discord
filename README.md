## Discord Bot

<p align="center">

<img src="https://raw.githubusercontent.com/unixfool/Discord/main/discord-bot.jpg">

</p>

-> Module for NPM: https://discord.js.org<br/>
-> Node JS.<br/>
-> Discord Account + Password.<br/>
		|-> Discord Server + Channel.<br/>
		|-> Create App: https://discord.com/developers/applications<br/>
		|-> Discord: Build-A-Bot : Bring your app to life by adding a bot user. <br/>
			This action is irreversible (because robots are too cool to destroy).<br/>
		|-> Check your bot token with discord.	<br/>
		|-> Discord: OAuth2 URL Generator<br/>
		
		
A Simple Discord bot with. [Remotes](https://remotes.irc.com)

`This Discord BOT, is created with NodeJS.`<br/>

**Step 1:** <br/>


`Download IRC.COM APP in the link below.` <br/>

* [iOS](https://apps.apple.com/us/app/id1451123195) <br/>
* [Android](https://play.google.com/store/apps/details?id=com.irc.ircclient)

**Step 2:** <br/>

`Select a IRC Client.`<br/>

* [IRC.COM IRC](https://remotes.irc.com) <br/>
* [WeeChat](https://weechat.org/download) <br/>
* [irssi](https://irssi.org/download) <br/>
* [HexChat](https://hexchat.github.io/downloads.html) <br/>
* [adiIRC](https://adiirc.com/download.php) <br/>
* [mIRC](https://www.mirc.com/get.html) <br/>

 ***Get register in freenode.net irc network.***

`nickname` = username <br/>
`password` = password <br/>

Get the nickname you want. Example. <br/>

```
Connect to server: /server irc.freenode.net 6667
Connect to server in SSL: /server irc.freenode.net +6697

/nick RemoteFAN
/msg NickServ REGISTER password email
```

***Went you get your nickname+password. You can login in our APP.***

For a full Remote program. You need to use `freenode bnc.` <br/>
You can join: `irc.freenode.net` in the channel. `#freenode-bnc` <br/>

![App Login](https://raw.githubusercontent.com/unixfool/Twitch/main/freenode-APP.jpg)

***After login and get a freenode BNC you can do:***

```
/server bnc.freenode.net:+6697
/quote PASS <username>/<network>:<password>
```
**With this, you can join in your freenode BNC with a normal IRC Client. Like. mIRC, Irssi, WeeChat... etc.**

* Questions: `How can i get a token?`

You need to be login in your BNC. So you can ask for a token.<br/>
`REMEMBER:` This is a personal TOKEN, so DON'T SHARE.

```
/msg *bnc addtoken
```

So, you get your `token` from `remotes.irc.com`<br/>
Now you can access to our remote web: [Login Remote](https://remotes.irc.com/login)


***SETTINGS*** <br/>
`This is freenode remote config. Your need set nickname = your nickname on the BNC + Your token in YOUR_REMOTE_TOKEN_HERE`

```
const $ = new (require("lib/IRC"))("nickname","YOUR_REMOTE_TOKEN_HERE");
```

`You need to create a Discord bot and insert the token here.`

```
// Your Discord Bot Token.
client.login('YOUR-DISCORD-BOT-TOKEN-HERE');
```

**You are ready to put your code in Remotes.irc.com** <br/>

***Save the code + Run and check your Discord Channel :)***
