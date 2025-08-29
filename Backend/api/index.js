// api/index.js
const app = require("../src/app.js"); // import your express app

// Vercel looks for "export" instead of app.listen()
module.exports = app;
