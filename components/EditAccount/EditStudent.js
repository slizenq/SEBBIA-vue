import axios from "axios";
import { ElNotification } from "element-plus";
import { IP } from "../UI/auth/Authentication";

export const sendForm = async function (first_name, last_name, middle_name, selectedEducation, selectedCity, photo, showUpProgress) {
    ElNotification({
        title: "Произошла ошибка при отправке",
        message: "Проверьте соединение к интернету",
        duration: 2000,
        type: "error",
        showClose: false,
    });

    const headers = {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
        accept: "application/json",
    };

    try {
        var studentEntity = {
            first_name: first_name.value,
            last_name: last_name.value,
            middle_name: middle_name.value,
            phone_number: "37505119",
            education: selectedEducation.value?.label || "",
            about_me: "string",
            born_date: 19,
            skills: [],
            photo: photo.value,
            directions: ["string"],
            about_projects: "",
            portfolio: "http://example.com",
            city: selectedCity.value?.label || ""
        };

        let checkAccount = JSON.parse(localStorage.getItem('resume_id'))?.resume_id;

        if (checkAccount) {
            let resumeData = studentEntity;
            try {
                const getResumeResponse = await axios.get(`${IP}/resume/resumes/${checkAccount}`, { headers });
                console.log('GET запрос успешен:', getResumeResponse);
            } catch (error) {
                console.error('Ошибка при выполнении GET запроса:', error.response ? error.response.data : error.message);
            }

            var postData = {
                first_name: resumeData?.first_name || '',
                last_name: resumeData?.last_name || '',
                middle_name: resumeData?.middle_name || '',
                phone_number: "37505119",
                education: selectedEducation.value?.label || resumeData?.education || '',
                about_me: "string",
                born_date: 19,
                skills: [],
                photo: "",
                directions: ["string"],
                about_projects: selectedCity.value?.label || resumeData?.about_projects || '',
                portfolio: "http://example.com",
                city: selectedCity.value?.label || ""
            };

            try {
                const postResponse = await axios.put(`${IP}/resume/resumes/${checkAccount}`, postData, { headers });
                console.log('PUT запрос успешен:', postResponse);
            } catch (error) {
                console.error('Ошибка при выполнении PUT запроса:', error.response ? error.response.data : error.message);
            }
        } else {
            const response = await axios.post(`${IP}/resume/resumes/`, studentEntity, { headers });
            let data = {
                resume_id: response.data?.resume_id,
                progress: 0,
            };
            localStorage.setItem("resume_id", JSON.stringify(data));

            let newProgress = JSON.parse(localStorage.getItem("resume_id"));
            if (newProgress) {
                newProgress.progress = 25;
                localStorage.setItem("resume_id", JSON.stringify(newProgress));
            }
            showUpProgress.value = true;
            console.log(response);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    } finally {
        showUpProgress.value = true;
    }
};