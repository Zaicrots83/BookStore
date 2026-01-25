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
    await postUser(
      User_name,
      Role,
      Phone_number,
      Email,
      Hired_date,
      Password_Hash,
      Url_image,
    );
    res.json({ message: "User created" });
    console.log("User created");
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
    await updateUser(
      User_name,
      Role,
      Phone_number,
      Email,
      Hired_date,
      Password_Hash,
      Url_image,
      user_id,
    );
    res.send("User updated")
  } catch (error) {
    console.error("Error updating the user " + error )
    res.send("Error updating user")
  }
});

router.delete("/User/:id", async (req, res) => {
  try {
    const user_id = Number(req.params.id);
    await deleteUser(user_id);
    res.send("User deleted");
  } catch (error) {
    console.error(error);
    res.send("Error deleting the user");
  }
});

export default router;
