// Import the necessary modules for SQLite
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Initialize a variable to hold the SQLite database connection
let db = null;

// Handler for GET requests to retrieve all codess
export async function GET(req, res) {
  try {
    // Open a new connection if there is none
    if (!db) {
      db = await open({
        filename: "./preview-codes.db",
        driver: sqlite3.Database,
      });
    }

    // Query to get all codes from the "codes" table
    const codes = await db.all("SELECT * FROM codes");

    // Return the codess as a JSON response with a 200 status code
    return new Response(JSON.stringify(codes), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  } catch (error) {

    console.error('Failed to get codes ' + error.message);

    return new Response(
      JSON.stringify(
        { message: "Failed to get codes" },
        {
          headers: { "content-type": "application/json" },
          status: 500,
        }
      )
    );
  }
}
// Handler for POST requests to create a new codes
export async function POST(req, res) {
  // Open a new connection if there is none
  if (!db) {
    db = await open({
      filename: "./preview-codes.db",
      driver: sqlite3.Database,
    });
  }

  // Extract the task from the request body
  const { task } = await req.json();

  // Insert the new task into the "codes" table
  await db.run("INSERT INTO codes (task) VALUES (?)", task);

  // Return a success message as a JSON response with a 200 status code
  return new Response(
    JSON.stringify(
      { message: "success" },
      {
        headers: { "content-type": "application/json" },
        status: 200,
      }
    )
  );
}

// Handler for PATCH requests to update emails by ID
export async function PATCH(req, res) {
  // Open a new connection if there is none
  if (!db) {
    db = await open({
      filename: "./preview-codes.db",
      driver: sqlite3.Database,
    });
  }
  
  // Extract the ID and task from the request body
  const { id, email } = await req.json();
  
  // Update the codes with the specified ID in the "codes" table
  await db.run("UPDATE codes SET email = ? WHERE id = ?", email, id);

  // Return a success message as a JSON response with a 200 status code
  return new Response(
    JSON.stringify(
      { message: "success" },
      { headers: { "content-type": "application/json" }, status: 200 }
    )
  );
}