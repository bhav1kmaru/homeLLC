import axios from 'axios'

export const loginAPI=async(creds)=>{
    try {
        let response = await axios.post(
          `http://localhost:8080/users/login`,
          creds
        );
        return response.data;
    } catch (error) {
        console.log(error)
    }
}


