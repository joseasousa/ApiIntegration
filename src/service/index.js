import axios from "axios";

const URL = process.env.EXPO_PUBLIC_API_URL;

export async function getFut() {
  const response = await axios.get(`${URL}/fut`)
  
  return response.data;
}

export async function createFut(fut) {
  const response = await axios.post(`${URL}/fut`);

  console.log(response.data);

  return response.data;
}

export async function updateFut(fut, id) {
  const response = await axios.put(`${URL}/fut/${id}`, fut);

  console.log(response.data);

  return response.data;
}

export async function deleteFut(id) {
  const response = await axios.delete(`${URL}/fut/${id}`);

  return response.data;
}
