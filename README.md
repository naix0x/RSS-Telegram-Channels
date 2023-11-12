# RSS-Telegram-Channels
RSS feed posting in Telegram Channels, using nodejs used library rss-parser.  This script can update RSS Feed per 1 minutes and anti duplicated checks send rss to channels telegram.

# Requirements

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
npm install node-telegram-bot-api rss-parser
```

# For running this bot

```javascript
git clone https://github.com/naix0x/RSS-Telegram-Channels.git rss
```

```javascript
cd rss
```

Change Api Key Bot (can get in @botfather) 
Change RSS Feed URL (can search in google)
and Change username your channels telegram
you can change with command below : 

```javascript
nano main.js
```

and ready to run 

```javascript
node main.js
```

for running script in background 
```javascript
pm2 main.js
```