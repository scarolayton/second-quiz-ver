import axios from "axios"
export const getASavedQuery = (id) => {
  return axios.get(`http://localhost:8000/comparision_tool/api/v1/saved_queries/${id}/`)
}
export const getAllTheSavedQueries = () => {
  return axios.get(`http://localhost:8000/comparision_tool/api/v1/saved_queries/`)
}
export const createSavedQuery = async (savedQueryParameters) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/comparision_tool/api/v1/saved_queries/',
      savedQueryParameters
    );
    return response.data; 
  } catch (error) {
    throw new Error(error); 
  }
}

export const getSavedQueryByUser = (userId) => {
  return axios.get(`http://localhost:8000/comparision_tool/api/v1/saved_queries/queries_by_user/?user_id=${userId}`)
}