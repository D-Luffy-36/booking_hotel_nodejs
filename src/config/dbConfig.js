import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
});

const connectDB = async () => {
    try {
        await client.connect();
        console.log('✅ Kết nối PostgreSQL thành công!');
    } catch (error) {
        console.error('❌ Lỗi kết nối:', error.message);
    }
};

export { client, connectDB };
