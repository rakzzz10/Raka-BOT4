let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083161362292]
│ • Telkomsel [081275812549]
│ • Gopay [083161362292]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6283161362292
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel"
3.)Dan terus masukkan nomor kami 083161362292
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
