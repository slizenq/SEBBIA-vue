import axios from "axios";

const domenIP = 'http://10.10.4.22:8000'

export const register = async function(email, password, is_company) { 
    const postData = {
        email: email,
        password: password,
        is_company: is_company
    };
    try {
        const response = await axios.post(`${domenIP}/auth/register`, postData)
        if (response.status === 200) {
            return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}
export const requestAccessToken = async function(username, password) {
    const postData = {
        username: username,
        password: password
    }   
    try {
        const response = await axios.post(`${domenIP}/auth/token`, postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const accessToken = response.data.access_token;
        localStorage.setItem('access_token', accessToken);
        (response.data.user.is_company == false) ? navigateTo('/account/student') : navigateTo('/account/company')
        console.log(response.data);
        if (response.status === 200) {
            return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}



