import { Router } from "express";
import { getBooks, postBook, deleteBook, updateBook } from "../services/books";
const router = Router();

router.get("/Books", async (req, res) => {
  try {
    const books = await getBooks();
    res.json(books);
  } catch (error) {
    console.log("Error fetching books");
    console.error(error);
  }
});

router.post("/Books", async (req, res) => {
  try {
    const {
      Book_name,
      Author,
      Release_date,
      Edition_number,
      Editorial,
      Stock,
      Price,
      Url_image,
    } = req.body;
    const book = await postBook(
      Book_name,
      Author,
      Release_date,
      Edition_number,
      Editorial,
      Stock,
      Price,
      Url_image,
    );
    res.status(201).json({ message: "Book inserted" });
  } catch (error) {
    console.log("Error inserting the book");
    console.error(error);
  }
});

router.put("/Books/:id", async (req, res) => {
  try {
    const {
      Book_name,
      Author,
      Release_date,
      Edition_number,
      Editorial,
      Stock,
      Price,
      Url_image,
    } = req.body;
    const book_id = Number(req.params.id);
    await updateBook(
      Book_name,
      Author,
      Release_date,
      Edition_number,
      Editorial,
      Stock,
      Price,
      Url_image,
      book_id,
    );
    console.log("Book updated");
    res.json({ message: "Bood updated" });
  } catch (error) {
    console.log("Something happened updating the book");
    console.error(error);
  }
});

router.delete("/Books/:id", async (req, res) => {
  try {
    const book_id = Number(req.params.id);
    await deleteBook(book_id);
    res.json({ message: "Book deleted" });
  } catch (error) {
    console.log("Something went wrong deleting the book in the route");
    console.error(error);
  }
});

export default router;
