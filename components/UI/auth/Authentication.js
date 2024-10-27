// Закрыто
import axios from "axios";

export const IP = "http://localhost:3000";

export const register = async function (email, password, isCompany) {
    const postData = {
        email: email,
        password: password,
        isCompany: isCompany,
    };
    console.log(postData);
    
    try {
        const response = await axios.post(`${IP}/signup`, postData);
        if (response.status === 200) {
            console.log(response.data)
            return true;
        }

    } catch (error) {
        console.error(error);
        return false;
    }
};
export const requestAccessToken = async function (email, password) {
    const postData = {
        email: email,
        password: password,
    };

    try {
        const response = await axios.post(`${IP}/login`, postData);
        console.log("Response from server:", response.data);

        const accessToken = response.data.accessToken.accessToken.token;
        const user = response.data.account;
        
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("user", JSON.stringify(user));

        user.isCompany ? navigateTo("/account/company") : navigateTo("/account/student");

        if (response.status === 200) {
            return true;
        }
    } catch (error) {
        console.error("Error:", error);
        return false;
    }
};
