import axios from "axios";

export const IP = "http://10.10.4.37:8000";

export const register = async function (email, password, is_company) {
    const postData = {
        email: email,
        password: password,
        is_company: is_company,
    };
    try {
        const response = await axios.post(`${IP}/register`, postData);

        if (response.status === 200) {
            return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};
export const requestAccessToken = async function (username, password) {
    const postData = {
        username: username,
        password: password,
    };
    try {
        const response = await axios.post(`${IP}/token`, postData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        const accessToken = response.data.access_token;
        const user = response.data.user;
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("user", JSON.stringify(user));

        response.data.user.is_company == false
            ? navigateTo("/account/student")
            : navigateTo("/account/company");
        if (response.status === 200) {
            return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};
