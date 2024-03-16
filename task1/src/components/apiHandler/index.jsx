import axios from "axios";

export const serverUrl = "http://localhost:8000/api";

export const postRequest = async (endPoint) => {
  try {
    const res = await axios.post(serverUrl + endPoint, value);
    return res.data;
  } catch (err) {
    console.log("errors=>", err);
  }
};
export const putRequest = async (endPoint) => {
  try {
    const res = await axios.put(serverUrl + endPoint, value);
    return res.data;
  } catch (err) {
    console.log("errors=>", err);
  }
};
export const getRequest = async (endPoint) => {
  try {
    const res = await axios.get(serverUrl + endPoint);
    return res.data;
  } catch (err) {
    console.log("errors=>", err);
  }
};
export const deleteRequest = async (endPoint) => {
  try {
    const res = await axios.delete(serverUrl + endPoint);
    return res.data;
  } catch (err) {
    console.log("errors=>", err);
  }
};
