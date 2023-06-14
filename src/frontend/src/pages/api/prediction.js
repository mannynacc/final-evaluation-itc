import axios from "axios"
import Cors from "cors"

const initMiddleware = (middleware) => {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

// Initialize the CORS middleware
const cors = initMiddleware(
  Cors({
    methods: ["POST"], // Specify the allowed methods
  })
)

// API route handler
export default async function handler(req, res) {
  // Apply CORS middleware
  await cors(req, res)

  if (req.method === "POST") {
    const { race } = req.body

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/predict", {
        race,
      })
      const jsonData = response.data

      res.status(200).json(jsonData)
    } catch (error) {
      console.error("Error:", error)
      res.status(500).json({ error: "Internal Server Error" })
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" })
  }
}
