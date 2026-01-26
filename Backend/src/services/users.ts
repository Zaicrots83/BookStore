import { pool } from "../Database/connection";

export async function getUsers() {
  try {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  } catch (error) {
    console.error("Something went wrong" + error);
  }
}

export async function postUser(
  User_name: string,
  Role: string,
  Phone_number: string,
  Email: string,
  Hired_date: Date,
  Password_Hash: string,
  Url_image: string,
) {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [
      Email,
    ]);
    if (result.rows.length == 0) {
      await pool.query(
        `INSERT INTO users(user_name, role, phone_number, email, hired_date,password_hash,url_image) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [
          User_name,
          Role,
          Phone_number,
          Email,
          Hired_date,
          Password_Hash,
          Url_image,
        ],
      );
      return({"Message":"User created"});
    }else{
      console.log("This email is already registered")
      return ({"Message":"This email is already registered"})
    }
  } catch (error) {
    console.error("Error creating the user " + error);
  }
}

export async function deleteUser(id_user: number) {
  try {
    await pool.query(`DELETE FROM users WHERE user_id = $1`, [id_user]);
    return ({"message" : "User deleted"})
  } catch (error) {
    console.error("Something happened deleting the user " + error);
  }
}

export async function updateUser(
  User_name: string,
  Role: string,
  Phone_number: string,
  Email: string,
  Hired_date: Date,
  Password_Hash: string,
  Url_image: string,
  user_id: number,
) {
  try {
    await pool.query(
      `UPDATE users SET user_name = $1, role = $2, phone_number = $3, email = $4, hired_date = $5, password_hash = $6, url_image = $7 WHERE user_id = $8`,
      [
        User_name,
        Role,
        Phone_number,
        Email,
        Hired_date,
        Password_Hash,
        Url_image,
        user_id,
      ],
    );
    return ({"message":"User updated"})
  } catch (error) {
    console.error("Something went wrong updating the user " + error);
  }
}
