import axios from "axios";
export const getTheGoogleQuery = async (queryParameters) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/comparision_tool/api/v1/google_data_set/fetch_for_specific_date/',
      queryParameters
    );
    return response.data; 
  } catch (error) {
    throw new Error(error); 
  }
}