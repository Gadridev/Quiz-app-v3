import axios from "axios";
import toast from "react-hot-toast";

export async function login({ email, password, dispatch }) {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/v1/user/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }  
    );
    if (res.data.status === "success") {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch({ type: "login", payload: res.data });
      return res.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (err) {
    toast.error(err.response.data.message);
    throw new Error("An error occurred during login. Please try again later.");
  }
}
export async function logout() {
  try {
    console.log("testing");
    const res = await axios.get("http://localhost:8080/api/v1/user/logout", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res.data);
    if (res.data.status === "success") {
      toast.success("You successfully logged out");
      return res.data;
    } else {
      toast.error(res.data.message);
    }
  } catch (err) {
    toast.error(err.response.data.message);
    throw new Error("An error occurred during login. Please try again later.");
  }
}
export async function register({ name, email, password, passwordConfirm }) {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:8080/api/v1/user/signup",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === "success") {
      toast.success("Registration successful!");
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function UpdateUserData({ name, email, photo }) {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("photo", photo);
    const jwt = localStorage.getItem("token");
    const token = jwt?.replace(/^"|"$/g, "");
    const res = await axios({
      method: "PATCH",
      url: "http://localhost:8080/api/v1/user/updateMe",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.status === "success") {
      return res.data;
    }
  } catch (err) {
    console.error(err.message);
  }
}

export async function Getme() {
  const jwt = localStorage.getItem("token");
  const token = jwt?.replace(/^"|"$/g, "");
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:8080/api/v1/user/me",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.status === "success") {
      return res.data.data;
    } else {
      // Handle the case when the status is not 'success'
      throw new Error("Failed to retrieve user data");
    }
  } catch (err) {
    console.error(err.message);
    throw err; // Re-throw the error to be handled by the caller
  }
}
export async function GetCurrentUser() {
  const jwt = localStorage.getItem("token");
  const token = jwt?.replace(/^"|"$/g, "");
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:8080/api/v1/user/Getuser",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.status === "success") {
      return res.data.data;
    }
  } catch (err) {
    toast.error(err.response.data.message);
  }
}
export async function UpdatePasswordUser({
  passwordCurrent,
  passwordConfirm,
  password,
}) {
  try {
    const jwt = localStorage.getItem("token");
    const token = jwt?.replace(/^"|"$/g, "");

    const res = await axios({
      method: "PATCH",
      url: "http://localhost:8080/api/v1/user/updatMyPassword",
      data: {
        passwordCurrent,
        password,
        passwordConfirm,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.data.status === "success") {
      toast.success("You have successfully Updated your Password");
      return res.data;
    }
  } catch (err) {
    toast.error(err.message);
  }
}

export const isAutenticated = () => {
  const jwt = localStorage.getItem("token");
  const token = jwt?.replace(/^"|"$/g, "");
  return token ? true : false;
};
