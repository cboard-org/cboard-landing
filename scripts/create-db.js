const { customAlphabet } = require('nanoid');
// Require SQLite3 verbose module
const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite database, and if it doesn't exist, create it
const db = new sqlite3.Database(
    "./preview-codes.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        // Error handling for connection
        if (err) {
            return console.error(err.message);
        } else {
            // Success message for successful connection
            console.log("Connected to the SQLite database.");
        }
    }
);

// Serialize runs to ensure sequential execution
db.serialize(() => {
    // Run SQL command to create table if it doesn't exist
    db.run(
        `CREATE TABLE IF NOT EXISTS codes (
            id INTEGER PRIMARY KEY,
            code TEXT,
            email TEXT,
            source TEXT
        )`,
        (err) => {
            // Error handling for table creation
            if (err) {
                return console.error(err.message);
            }
            console.log("Created codes table");

            // Run SQL command to delete items in todo table
            db.run(`DELETE FROM codes`, (err) => {
                // Error handling for deletion
                if (err) {
                    return console.error(err.message);
                }
                console.log("Deleted items in codes table");

                // SQL command for insertion
                const insertSql = `INSERT INTO codes (code, email, source) VALUES (?, ?, ?)`;

                const nanoid = customAlphabet('1234567890', 6);

                for (let i = 0; i < 100; i++) {
                    const email = '';
                    const source = 'closing the gap 2024';
                    const code = nanoid();
                    db.run(insertSql, code, email, source, (err) => {
                        if (err) {
                            return console.error(err.message);
                        }
                        const id = this.lastID;
                       // console.log(`Added code with id ${id}`);
                    });
                }

                // Close the database connection
                db.close((err) => {
                    if (err) {
                        return console.error(err.message);
                    }
                    console.log("Closed the database connection.");
                });
            });
        }
    );
});
