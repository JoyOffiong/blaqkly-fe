import axios from "axios";


const baseUrl = "http://localhost:8080/api"


export default async function Sign_Up(data){

  try {
        const res = await axios.post(`${baseUrl}/auth/register`, data);
        console.log(res);
        return res;
    } catch (err) {
        if (err) {
            console.log(err);
            throw new Error("User already exists");
        } else {
            throw new Error("Registration failed: " + err.message);
        }
    }
    


}
