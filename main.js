const TelegramBot = require('node-telegram-bot-api');
const Parser = require('rss-parser');

const telegramToken = '6805465782:AAG5SOBlWAN1UPgiyZ1jtA6mISa_NgmR0mE';
const rssFeedUrl = 'https://jabar.tribunnews.com/rss';

const bot = new TelegramBot(telegramToken, { polling: true });
const parser = new Parser();

// Menggunakan Set untuk menyimpan tautan pembaruan yang telah dikirim
const sentUpdates = new Set();

// Fungsi untuk mengirim pembaruan RSS ke saluran Telegram
async function sendUpdateToChannel(update) {
  try {
    const response = await bot.sendMessage('@matictests', `Judul: ${update.title}\nLink: ${update.link}`);
    sentUpdates.add(update.link);
  } catch (error) {
    console.error('Gagal mengirim pembaruan:', error);
  }
}

// Fungsi untuk memeriksa apakah pembaruan sudah dikirim sebelumnya
function isDuplicateUpdate(update) {
  return sentUpdates.has(update.link);
}

// Mengambil dan mengirim pembaruan RSS setiap 1 menit
setInterval(() => {
  parser.parseURL(rssFeedUrl, (err, feed) => {
    if (err) {
      console.error('Gagal mengambil RSS feed:', err);
      return;
    }

    for (const item of feed.items) {
      if (!isDuplicateUpdate(item)) {
        sendUpdateToChannel(item);
      }
    }
  });
}, 1 * 60 * 1000); // 1 menit