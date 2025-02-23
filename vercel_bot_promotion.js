import { Telegraf } from 'telegraf';
import express from 'express';

const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();

// URL image yang dihosting di Vercel atau server Anda sendiri
const promoImage = 'https://pub-a4952b46ff9c4f6b8d5529cd21f9a1e3.r2.dev/img/big8881.png';
const registerLink = 'https://www.big888.com/register?rc=bigwinv1';

// Saat bot dimulai
bot.start((ctx) => {
    ctx.replyWithPhoto(promoImage, {
        caption: `🎰 *Big888 - สล็อตเว็บตรง อันดับ 1 แตกหนัก แจกโบนัสไม่อั้น!* 🎰\n\n` +
            `🔥 *เว็บสล็อตเว็บตรง 100%* ไม่ผ่านเอเย่นต์ ปลอดภัย\n` +
            `💰 *สมัครสมาชิกใหม่ รับโบนัสฟรี 188 บาท*\n` +
            `🎁 *ฝาก 1 รับ 50 วอเลท - โปรสุดคุ้ม!*\n` +
            `⚡ *ทดลองเล่นสล็อตฟรี ถอนได้จริง!*\n` +
            `🔄 *ฝาก-ถอน ออโต้ ไม่มีขั้นต่ำ* รองรับ slot wallet\n` +
            `🎲 *คาสิโนออนไลน์เว็บตรง & แทงหวยออนไลน์*\n\n` +
            `🚀 *สมัครเลย! แจกเครดิตฟรี 100 ไม่ต้องฝาก ไม่ต้องแชร์!*\n` +
            `👉 [**คลิกที่นี่เพื่อสมัคร**](${registerLink})`,
        parse_mode: 'Markdown'
    });
});

// Webhook untuk Vercel
app.use(bot.webhookCallback('/bot'));
bot.telegram.setWebhook('https://your-vercel-app.vercel.app/bot');

export default app;
