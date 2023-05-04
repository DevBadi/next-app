import type { NextApiRequest, NextApiResponse } from 'next'
import dotenv from "dotenv";

dotenv.config();
const api_url = process.env.API_URL; // load from .env.local

export default handler;

async function handler(req: NextApiRequest, res: NextApiResponse) {
    // check allowed methods
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `method ${req.method} not allowed` });
        return
    }

    try {
        // get data submitted in request's body
        const body = req.body

        // remote API
        const endpoint = api_url + "/login";

        // form the request for sending data to the server
        const options = {
            // the method is POST because we are sending data
            method: "POST",
            // tell the server we're sending JSON
            headers: {
                "Content-Type": "application/json",
            },
            // body of the request is the JSON data we created above
            body: JSON.stringify({
                "email": body.email,
                "password": body.password
            })
        };

        // send data to the remote API
        const response = await fetch(endpoint, options);

        // get the response data from server as JSON
        const data = await response.json();

        // return the data to the client
        res.status(response.status).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'internal server error' });
    }
}
