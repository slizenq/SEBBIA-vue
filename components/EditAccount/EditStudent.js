import axios from "axios";
import { IP } from "../UI/auth/Authentication";
export const sendForm = async function ( first_name, last_name, middle_name, selectedEducation, selectedCity, photo, showUpProgress, dialogRedactor ) {
    try {
        var studentEntity = {
            first_name: first_name.value,
            last_name: last_name.value,
            middle_name: middle_name.value,
            phone_number: "37505119",
            education: selectedEducation.value?.label,
            about_me: '',
            born_date: 19,
            skills: [],
            photo: photo.value,
            directions: ["string"],
            about_projects: "",
            portfolio: "http://example.com",
            city: selectedCity.value?.label
        };
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
            accept: "application/json",
        };
        let checkAccount = JSON.parse(localStorage.getItem('resume_id'))?.resume_id;

        if (checkAccount) {
            let resumeData = studentEntity;
            let saveData = ref()
            try {
                const getResumeResponse = await axios.get(`${IP}/resume/resumes/${checkAccount}`, { headers });
                console.log('GET запрос успешен:', getResumeResponse);
                saveData.value = getResumeResponse
            } catch (error) {
                console.error('Ошибка при выполнении GET запроса:', error.response ? error.response.data : error.message);
            }
            
            var postData = {
                first_name: resumeData.first_name || saveData.value.data.first_name,
                last_name: resumeData.last_name || saveData.value.data.last_name,
                middle_name: resumeData.middle_name || saveData.value.data.middle_name,
                phone_number: saveData.value.data.phone_number,
                education: resumeData.education || saveData.value.data.education,
                about_me: saveData.value.data.about_me,
                born_date: saveData.value.data.born_date,
                skills: saveData.value.data.skills,
                photo: saveData.value.data.photo,
                directions: saveData.value.data.directions,
                about_projects: resumeData.about_projects || saveData.value.data.about_projects,
                portfolio: saveData.value.data.portfolio,
                city: resumeData.selectedCity || saveData.value.data.city
            };

            try {
                const postResponse = await axios.put(`${IP}/resume/resumes/${checkAccount}`, postData, { headers });
                console.log('PUT запрос успешен:', postResponse);
                dialogRedactor.value = false;
                return true
            } catch (error) {
                console.error('Ошибка при выполнении PUT запроса:', error.response ? error.response.data : error.message);
                return false
            }
        } else {
            const response = await axios.post(`${IP}/resume/resumes/`, studentEntity, { headers });
            let data = {
                resume_id: response.data?.resume_id,
                progress: 25,
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
            return true
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        return false
    } finally {
        showUpProgress.value = true;
    }
};

export const sendFormResume = async function (about_me, about_projects, skills, portfolio, phone_number, selectedDirection, dialogRedactor) {
    console.log(about_me.value, about_projects.value, skills.value, portfolio.value, phone_number.value, selectedDirection.value);
    const headers = {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
        accept: "application/json",
    };
    let checkAccount = JSON.parse(localStorage.getItem('resume_id'))?.resume_id;

    let saveData = ref()
    try {
        const getResumeResponse = await axios.get(`${IP}/resume/resumes/${checkAccount}`, { headers });
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
        about_projects: about_projects.value || saveData.value.data.about_projects,
        portfolio: portfolio.value || saveData.value.data.portfolio,
        city: saveData.value.data.city
    };

    try {
        const postResponse = await axios.put(`${IP}/resume/resumes/${checkAccount}`, postData, { headers });
        console.log('PUT запрос успешен:', postResponse);
        dialogRedactor.value = false;
        return true
    } catch (error) {
        console.error('Ошибка при выполнении PUT запроса:', error.response ? error.response.data : error.message);
    }
}
