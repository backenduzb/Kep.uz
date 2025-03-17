const axios = require("axios");
const fs = require("fs");

// Rasm manbasi
const targetUrl = "https://example.com/media/p9-BCFTXLSJ.png";
const savePath = "downloaded_image.png";

// Rasmni yuklab olish funksiyasi
async function downloadImage(url, path) {
    try {
        const response = await axios({
            method: "get",
            url: url,
            responseType: "stream",
        });

        // Rasmni faylga yozish
        response.data.pipe(fs.createWriteStream(path));

        console.log("✅ Rasm muvaffaqiyatli yuklandi!");
    } catch (error) {
        console.error("❌ Xatolik yuz berdi:", error.message);
    }
}

// Funksiyani chaqiramiz
downloadImage(targetUrl, savePath);
