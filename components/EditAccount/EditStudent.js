import axios from "axios";
import { IP } from "../UI/auth/Authentication";

// Профиль
export const sendForm = async function (first_name, last_name, middle_name, selectedEducation, selectedCity, photo, showUpProgress, dialogRedactor) {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
        };
        
        // Заполняем студента данными (по params из функции)
        const studentEntity = {
            first_name: first_name?.value || "",
            last_name: last_name?.value || "",
            middle_name: middle_name?.value || "",
            phone_number: "37505119",
            education: selectedEducation?.value?.label || "",
            about_me: '',
            born_date: "24.03.2005",
            skills: [],
            photo: photo?.value || "",
            directions: ["string"],
            location: selectedCity?.value?.label || "",
            portfolio: "http://example.com",
            city: selectedCity?.value?.label || ""
        };
        const checkAccount = JSON.parse(localStorage.getItem('resume_id'))?.resume_id;

        // Проверяем наличие аккаунта у пользователя
        if (checkAccount) {
            let resumeData = studentEntity;
            let saveData = ref();
            try {
                const getResumeResponse = await axios.get(`${IP}/createStudent`, { headers });
                console.log('GET запрос успешен:', getResumeResponse);
                saveData.value = getResumeResponse;
            } catch (error) {
                console.error('Ошибка при выполнении GET запроса:', error.response ? error.response.data : error.message);
            }
            const postData = {
                first_name: resumeData.first_name || saveData.value?.data.first_name || "",
                last_name: resumeData.last_name || saveData.value?.data.last_name || "",
                middle_name: resumeData.middle_name || saveData.value?.data.middle_name || "",
                phone_number: saveData.value?.data.phone_number || "37505119",
                education: resumeData.education || saveData.value?.data.education || "",
                about_me: saveData.value?.data.about_me || "",
                born_date: saveData.value?.data.born_date || "24.03.2005",
                skills: saveData.value?.data.skills || [],
                photo: saveData.value?.data.photo || "",
                directions: saveData.value?.data.directions || ["string"],
                location: resumeData.location || saveData.value?.data.location || "",
                portfolio: saveData.value?.data.portfolio || "http://example.com",
                city: resumeData.city || saveData.value?.data.city || ""
            };
            try {
                const postResponse = await axios.put(`${IP}/createStudent`, postData, { headers });
                console.log('PUT запрос успешен:', postResponse);
                dialogRedactor.value = false;
                return true;
            } catch (error) {
                console.error('Ошибка при выполнении PUT запроса:', error.response ? error.response.data : error.message);
                return false;
            }
        } else {
            // Если у нас нет индификатора пользователя создаем ему резюме и сохраняем его id
            const response = await axios.post(`${IP}/createStudent`, studentEntity, { headers });
            const data = {
                resume_id: response.data?.resume_id,
                progress: 25
            };
            localStorage.setItem("resume_id", JSON.stringify(data));

            let newProgress = JSON.parse(localStorage.getItem("resume_id"));
            if (newProgress) {
                newProgress.progress = 25;
                localStorage.setItem("resume_id", JSON.stringify(newProgress));
            }
            showUpProgress.value = true;
            console.log(response);
            dialogRedactor.value = false;
            return true;
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        return false;
    } finally {
        showUpProgress.value = true;
    }
};

// Резюме
export const sendFormResume = async function (about_me, location, skills, portfolio, phone_number, selectedDirection, dialogRedactor) {
    console.log(about_me.value, location.value, skills.value, portfolio.value, phone_number.value, selectedDirection.value);
    const headers = {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    };
    let checkAccount = JSON.parse(localStorage.getItem('resume_id'))?.resume_id;

    let saveData = ref()
    try {
        const getResumeResponse = await axios.post(`${IP}/createStudent`, { headers });
        console.log('GET запрос успешен:', getResumeResponse);
        saveData.value = getResumeResponse
        console.log(saveData.value.data);
        
    } catch (error) {
        console.error('Ошибка при выполнении GET запроса:', error.response ? error.response.data : error.message);
    }
        
    var postData = {
        first_name: saveData.value.data.first_name,
        last_name: saveData.value.data.last_name,
        middle_name: saveData.value.data.middle_name,
        phone_number: phone_number.value.replace(/\s/g, '').replace(/\+/g, '').replace(/\(/g, '').replace(/\)/g, '') || saveData.value.data.phone_number,
        education: saveData.value.data.education,
        about_me: about_me.value || saveData.value.data.about_me,
        born_date: saveData.value.data.born_date,
        skills: skills.value || saveData.value.data.skills,
        photo: saveData.value.data.photo,
        directions: selectedDirection.value || saveData.value.data.directions,
        location: location.value || saveData.value.data.location,
        portfolio: portfolio.value || saveData.value.data.portfolio,
        city: saveData.value.data.city
    };

    try {
        const postResponse = await axios.post(`${IP}/createStudent`, postData, { headers });
        console.log('PUT запрос успешен:', postResponse);
        dialogRedactor.value = false;
        return true
    } catch (error) {
        console.error('Ошибка при выполнении PUT запроса:', error.response ? error.response.data : error.message);
    }
}
