// server.js
require('dotenv').config();
const app = require('./src/app.js');
const connectDB = require('./src/config/db.js');

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB, server not started', err);
    process.exit(1);
  });
