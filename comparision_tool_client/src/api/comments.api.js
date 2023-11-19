import axios from "axios";

export const getCommentsByQuery = async (queryId) => {
  try {
    return await axios.get(`http://localhost:8000/comparision_tool/api/v1/comments/comments_by_query/?saved_query_id=${queryId}`)
  } catch (error) {
    console.error();
  }
}

export const createNewComment = async  (commentParameters) => {
  try {
    return await axios.post('http://localhost:8000/comparision_tool/api/v1/comments/', commentParameters)
  } catch (error) {
    console.error(error)
  }
}