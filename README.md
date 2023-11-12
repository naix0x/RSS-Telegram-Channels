# RSS-Telegram-Channels

Welcome to the 📧 RSS feed posting in Telegram Channels, using nodejs used library rss-parser.  This script can update RSS Feed per 1 minutes and anti duplicated checks send rss to channels telegram.

## 🚀 Technologies

This Telegram bot is built using the following technologies:

- 🚀 Nodejs - Language 
- 🤖 RSS Parser - Framework
- 📨 RSS Feed - URL
- 🗿 Demo Picture in RSS Tribune :
<p align="center">
  <img src="https://raw.githubusercontent.com/naix0x/RSS-Telegram-Channels/main/Screenshot_20231112-201523_Telegram.jpg" />
</p>

## 🛠️ Installation and Usage

To use this bot, follow these steps:

1. Clone the repository
2. Install the required dependencies using 

To run this bot, we need several requirements to run the script

```javascript
apt-get update -y && apt-get upgrade -y
```

```javascript
apt install git
```

```javascript
apt install nodejs
```

```javascript
apt install npm
```

```javascript
npm install pm2
```

```javascript
npm install node-telegram-bot-api rss-parser
```

3. Create a new bot on Telegram using [BotFather](https://core.telegram.org/bots#3-how-do-i-create-a-bot)
4. Copy the bot token, url rss, username channels and add it to `main.js`
```javascript
nano main.js
```
5. Add youre bot to channels and set admin
6. Start the bot using `node main.py`
```javascript
node main.js
```
7. For run nodejs in background
```javascript
npx pm2 start main.js
```

This bot will fetch updates from the RSS feed every 1 minute. If there are new updates that have not been sent, the bot will send the updates to the specified Telegram channel.

## 🤝 Contributing

If you find a bug or want to suggest a new feature, please open an issue or submit a pull request. Contributions are welcome and appreciated!

## 📝 License

This project is licensed under the [MIT License](https://github.com/naix0x/RSS-Telegram-Channels/blob/main/LICENSE).

## 👥 Forks and Stars

If you find this project useful, please give it a star ⭐ and consider forking it 🍴 to support its development and help it reach a wider audience.
