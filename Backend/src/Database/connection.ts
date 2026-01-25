import {Pool} from "pg"

export const pool = new Pool({
    user : process.env.DB_USER,
    host : process.env.DB_HOST,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    port : Number(process.env.DB_PORT),
    ssl:{rejectUnauthorized:false}
})

export async function check(){
    try {
        await pool.query("SELECT NOW()")
        console.log("Database connected")
    } catch (error) {
        console.log("Something went wrong connecting the database")
        console.error(error)
    }
}

