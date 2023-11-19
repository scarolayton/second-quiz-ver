import axios from "axios";

export const createUser = async  (userName) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/comparision_tool/api/v1/custom_user/',
      userName
    );
    return response.data; 
  } catch (error) {
    throw new Error(error); 
  }
}

export const getUser = async (userId) => {
  try {
    return await axios.get(`http://localhost:8000/comparision_tool/api/v1/custom_user/${userId}/`)
  } catch (error) {
    console.error(error)
  }
}