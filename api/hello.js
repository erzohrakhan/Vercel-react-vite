import dotenv from "dotenv";

export default function handler(req, res) {
  dotenv.config();
  console.log(process.env.DATABASE_URL);
  res.status(200).json({
    message: "Hello from Vercel Serverless API!" + process.env.DATABASE_URL,
  });
}
