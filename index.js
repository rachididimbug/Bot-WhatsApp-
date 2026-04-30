const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    }
});

client.on('qr', (qr) => {
    console.log('--- SCANNEZ CE CODE RAPIDEMENT ---');
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Le bot est en ligne sur votre numéro !');
});

client.on('message', msg => {
    const text = msg.body.toLowerCase();

    if (text === 'salut' || text === 'bonjour') {
        msg.reply('Bonjour ! Je suis l\'assistant automatique de Rachidi Dimbu. Comment puis-je vous aider ?\n\n1. Infos Apple Business 🍏\n2. Code Promo 1xBet ⚽\n3. Cours de Mathématique 📚');
    } 
    else if (text.includes('apple')) {
        msg.reply('Bienvenue chez Apple Business ! Nous proposons des articles de qualité. Dites-nous ce que vous cherchez.');
    } 
    else if (text.includes('code') || text.includes('1xbet')) {
        msg.reply('Profitez des bonus avec le code promo officiel : *RDNK10*');
    }
});

client.initialize();
