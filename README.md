# Assignment - 6 :- Screenshot:
<img width="1440" height="899" alt="Screenshot 2025-08-29 at 12 12 04 PM" src="https://github.com/user-attachments/assets/27c62c0e-288d-44b8-9aff-7b7ee3679a38" />
<img width="1440" height="899" alt="Screenshot 2025-08-29 at 12 12 08 PM" src="https://github.com/user-attachments/assets/7c244919-d58e-46ab-aaef-63f52570500b" />
<img width="1440" height="899" alt="Screenshot 2025-08-29 at 12 12 11 PM" src="https://github.com/user-attachments/assets/b440698a-c8dd-4ab8-82a4-9ee29fee7ef8" />
<img width="1440" height="899" alt="Screenshot 2025-08-29 at 12 12 22 PM" src="https://github.com/user-attachments/assets/1daf1d47-0e74-4aec-bdd1-1a699f65092e" />
🧠 How it works (brief)

server.js creates an HTTP server and passes all requests to handleRequest.

router.js:

Parses the URL and matches /home, /about, /contact.

Returns 302 redirect from / → /home.

Streams files from /public using sendFile (non-blocking).

Serves /css/styles.css and other assets as static files.

Sends 404.html for unknown routes, with 404 status code.

Provides a JSON /health route (enhancement).

helpers/sendFile.js uses fs.promises.stat + createReadStream to efficiently stream files with correct Content-Type from helpers/mime.js.
