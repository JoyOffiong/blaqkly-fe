import axios from "axios";


const baseUrl = "http://localhost:8080/api"


async function Sign_Up(data){

  try {
        const res = await axios.post(`${baseUrl}/auth/register`, data);
        return res;
    } catch (err) {
        if (err) {
            throw new Error("User already exists");
        } else {
            throw new Error("Registration failed: " + err.message);
        }
    }
    
}

async function Sign_In(data){
    try {
        const res = await axios.post(`${baseUrl}/auth/sign-in`, data);
        return res
    } catch (error) {
        console.log(error.message)
    }
}

 const auth= {
Sign_Up,
Sign_In
}

export default auth;