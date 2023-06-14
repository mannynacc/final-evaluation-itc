import axios from "axios"

export const getDriverInfo = async (id) => {
  try {
    const response = await axios.get(`api/driver/${id}`, {
      id,
    })
    const jsonData = response.data
    return jsonData
  } catch (error) {
    console.error("Error:", error)
  }
}
