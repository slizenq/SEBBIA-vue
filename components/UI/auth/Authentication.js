import axios from "axios";

export const register = async function(email, password, is_company) { 
    const postData = {
        email: email,
        password: password,
        is_company: is_company
    };
    await axios.post("http://127.0.0.1:8000/register", postData)
}
export const requestAccessToken = async function(username, password) {
    const postData = {
        username: username,
        password: password
    }
    try {
        const response = await axios.post("http://127.0.0.1:8000/token", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            
        });
        const accessToken = response.data.access_token;
        localStorage.setItem('access_token', accessToken); 
        console.log(accessToken);
        console.log(response.data); 
    } catch (error) {
        console.error(error);
    }
}



