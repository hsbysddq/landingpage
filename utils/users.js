const fs = require('fs');

// Membuat folder jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Membuat file user.json jika belum ada
const dataPath = './data/users.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// Mengambil semua data user di file JSON
const loadUser = () => {
    const fileBuffer = fs.readFileSync('data/users.json', 'utf-8');
    const users = JSON.parse(fileBuffer);
    return users
};

// Fungsi cari user berdasarkan username
const findUser = (username) => {
    const users = loadUser();
    const user = users.find((user) => user.username.toLowerCase() === username.toLowerCase());
    return user;
};

module.exports = { loadUser, findUser };