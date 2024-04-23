import Cookies from "js-cookie";
import axios from "axios";

export async function GetAllQuiz() {
  try {
   const jwt=localStorage.getItem('token')
   const token = jwt?.replace(/^"|"$/g, '');
    const res = await axios.get("http://localhost:8080/api/v1/quiz/", {
      headers: {
        Accept:"application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials:true,
    });

    if (res.data.status === "success") {
      return res.data;
    } else {
      throw new Error("API request failed");
    }
  } catch (error) {
    console.log('')
    throw error; // Propagate the error for further handling
  }
}

export async function getQuizById(quizId) {
  try {
    const token = Cookies.get("jwtToken");

    const res = await axios.get(`http://localhost:8080/api/v1/quiz/${quizId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.data.status === "success") {
      return res.data;
    } else {
      throw new Error("API request failed");
    }
  } catch (error) {
    throw new  error; // Propagate the error for further handling
  }
}
