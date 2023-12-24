import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../.env') });

const db = `${process.env.DB_MONGO}`;

export default async function connects() {
    try {
        await connect(db);
        console.log("DB connected successfully");
    } catch (err) {
        console.log(err);
    }
}