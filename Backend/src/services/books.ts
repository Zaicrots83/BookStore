import { pool } from "../Database/connection";

export async function getBooks() {
  try {
    const result = await pool.query("SELECT * FROM book");
    return result.rows;
  } catch (error) {
    console.log("Error getting books");
    console.error(error);
  }
}

export async function postBook(
  Book_name: string,
  Author: string,
  Release_date: Date,
  Edition_number: number,
  Editorial: string,
  Stock: number,
  Price: number,
  Url_image: string,
) {
  try {
    await pool.query(
      `INSERT INTO book(book_name, author, release_date, edition_number, editorial, stock, price, url_image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) `,
      [
        Book_name,
        Author,
        Release_date,
        Edition_number,
        Editorial,
        Stock,
        Price,
        Url_image,
      ]
    );
    console.log("Book Created");
  } catch (error) {
    console.log("Something went wrong creating the book");
    console.error(error);
  }
}

export async function deleteBook(book_id: number) {
  try {
    await pool.query(`DELETE FROM book WHERE book_id = $1`, [book_id]);
    console.log(`Book deleted`);
  } catch (error) {
    console.log("Something went wrong deleting the book");
    console.error(error);
  }
}

export async function updateBook(
  Book_name: string,
  Author: string,
  Release_date: Date,
  Edition_number: number,
  Editorial: string,
  Stock: number,
  Price: number,
  Url_image: string,
  Book_id : number
) {
  try {
    await pool.query(
    `UPDATE book SET book_name = $1, author= $2, release_date = $3, edition_number = $4, editorial = $5, stock = $6, price = $7, url_image = $8 WHERE book_id = $9 `,  
     [
        Book_name,
        Author,
        Release_date,
        Edition_number,
        Editorial,
        Stock,
        Price,
        Url_image,
        Book_id
      ]
  );
  console.log("Book updated correctly")
  } catch (error) {
    console.log("Something went wrong updatindg the book")
    console.error(error)
  }
}
