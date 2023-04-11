import type { NextApiRequest, NextApiResponse } from 'next'
import dotenv from "dotenv";

dotenv.config();
const api_url = process.env.API_URL; // load from .env.local

export default handler;

async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // fetch data from the remote API
        const response = await fetch(api_url + "/posts");
        const data = await response.json();

        // return the data to the client
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'internal server error' });
    }
}
