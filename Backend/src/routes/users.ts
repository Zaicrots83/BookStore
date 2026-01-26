import { Router } from "express";
const router = Router();
import { getUsers, postUser, deleteUser, updateUser } from "../services/users";

router.get("/User", async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error("Something went wrong getting the users in the root" + error);
    res.json({ error });
  }
});

router.post("/User", async (req, res) => {
  try {
    const {
      User_name,
      Role,
      Phone_number,
      Email,
      Hired_date,
      Password_Hash,
      Url_image,
    } = req.body;
    const postResult = await postUser(
      User_name,
      Role,
      Phone_number,
      Email,
      Hired_date,
      Password_Hash,
      Url_image,
    );
    res.json(postResult)
  } catch (error) {
    console.error("Error on route user-post" + error);
    res.send("Something went wrong creating the user");
  }
});

router.put("/User/:id", async (req, res) => {
  try {
    const {
      User_name,
      Role,
      Phone_number,
      Email,
      Hired_date,
      Password_Hash,
      Url_image,
    } = req.body;
    const user_id = Number(req.params.id);
    const updateResult = await updateUser(
      User_name,
      Role,
      Phone_number,
      Email,
      Hired_date,
      Password_Hash,
      Url_image,
      user_id,
    );
    res.json(updateResult)
  } catch (error) {
    console.error("Error updating the user " + error )
    res.send("Error updating user")
  }
});

router.delete("/User/:id", async (req, res) => {
  try {
    const user_id = Number(req.params.id);
    const resultDelete = await deleteUser(user_id);
    res.json(resultDelete)
  } catch (error) {
    console.error(error);
    res.send("Error deleting the user");
  }
});

export default router;
