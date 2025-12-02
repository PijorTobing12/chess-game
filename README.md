README.md (Copy–Paste Siap Pakai)

Berikut README yang cocok untuk project kamu:

♟ Chess Express — Console Chess + Express API + Jest Tests

Project ini adalah aplikasi Chess (Catur) berbasis Node.js, terdiri dari:

Console-based chess engine (menggerakkan bidak berdasarkan koordinat)

Express API endpoint untuk melakukan gerakan catur

Jest Unit Tests untuk memastikan logika bekerja dengan benar

Struktur kode yang bersih & mudah dikembangkan

How to Run
 Install Dependencies
npm install

 Jalankan Console Version
node src/app.js

Jalankan Express API
npm start


Server akan berjalan di:

http://localhost:3000

Running Tests (Jest)
npm test


Output sukses:

PASS  tests/chess.test.js
- Board should have 8 rows
- Valid pawn move
- Invalid move should throw error

 Example Moves (Console)

Format gerakan:

"startRow,startCol endRow,endCol"


Contoh:

game.makeMove("6,4 5,4"); // Pawn maju 1 langkah

 API Endpoint
POST /move

Request Body:

{
  "from": "6,4",
  "to": "5,4"
}


Response:

{
  "message": "Move successful"
}

 Features

- Chess board 8x8
- Basic pawn movement
- Validation simple
- Console & API ready
- Complete Jest tests
- Clean modular structure