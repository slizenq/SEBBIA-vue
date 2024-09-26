import axios from "axios";
import { IP } from "../UI/auth/Authentication";

export const sendForm = async function (
    first_name, last_name, middle_name, selectedEducation, selectedCity, photo, showUpProgress,
) {
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
                first_name: resumeData.first_name           || saveData.value.data.first_name,
                last_name: resumeData.last_name             || saveData.value.data.last_name,
                middle_name: resumeData.middle_name         || saveData.value.data.middle_name,
                phone_number:                               saveData.value.data.phone_number,
                education: resumeData.education             || saveData.value.data.education,
                about_me: resumeData.about_me || saveData.value.data.about_me,
                born_date:                                  saveData.value.data.born_date,
                skills:                                     saveData.value.data.skills,
                photo:                                      saveData.value.data.photo,
                directions:                                 saveData.value.data.directions,
                about_projects: resumeData.about_projects   || saveData.value.data.about_projects,
                portfolio:                                  saveData.value.data.portfolio,
                city: resumeData.selectedCity               || saveData.value.data.city
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

// import axios from "axios";
// import { ElNotification } from "element-plus";
// import { IP } from "../UI/auth/Authentication";

// export const sendForm = async function (first_name, last_name, middle_name, selectedEducation, selectedCity, photo, showUpProgress, 
//     direction, about_me, about_projects, skills, portfolioLink, phone_number
// ) {
//     ElNotification({
//         title: "Произошла ошибка при отправке",
//         message: "Проверьте соединение к интернету",
//         duration: 2000,
//         type: "error",
//         showClose: false,
//     });

//     const headers = {
//         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//         "Content-Type": "application/json",
//         accept: "application/json",
//     };

//     try {
//         const studentEntity = {
//             first_name: first_name,
//             last_name: last_name,
//             middle_name: middle_name,
//             phone_number: phone_number,
//             education: selectedEducation?.label,
//             about_me: about_me,
//             born_date: 19,
//             skills: skills,
//             photo: photo,
//             directions: direction,
//             about_projects: about_projects,
//             portfolio: portfolioLink,
//             city: selectedCity?.label,
//           };

//         let checkAccount = JSON.parse(localStorage.getItem('resume_id'))?.resume_id;

//         if (checkAccount) {
//             let savedResumeData = null
//             try {
//                 const getResumeResponse = await axios.get(`${IP}/resume/resumes/${checkAccount}`, { headers });
//                 console.log('GET запрос успешен:', getResumeResponse);
//                 savedResumeData = getResumeResponse.data;
//             } catch (error) {
//                 console.error('Ошибка при выполнении GET запроса:', error.response ? error.response.data : error.message);
//             }
//             const postData = {
//                 first_name: studentEntity.first_name || savedResumeData.first_name,
//                 last_name: studentEntity.last_name || savedResumeData.last_name,
//                 middle_name: studentEntity.middle_name || savedResumeData.middle_name,
//                 phone_number: studentEntity.phone_number || savedResumeData.phone_number,
//                 education: studentEntity.education || savedResumeData.education,
//                 about_me: studentEntity.about_me || savedResumeData.about_me,
//                 born_date: savedResumeData.born_date,
//                 skills: studentEntity.skills || savedResumeData.skills,
//                 photo: savedResumeData.photo,
//                 directions: studentEntity.directions || savedResumeData.directions,
//                 about_projects: studentEntity.about_projects || savedResumeData.about_projects,
//                 portfolio: studentEntity.portfolio || savedResumeData.portfolio,
//                 city: studentEntity.city || savedResumeData.city,
//               };

//             try {
//                 const postResponse = await axios.put(`${IP}/resume/resumes/${checkAccount}`, postData, { headers });
//                 console.log('PUT запрос успешен:', postResponse);
//             } catch (error) {
//                 console.error('Ошибка при выполнении PUT запроса:', error.response ? error.response.data : error.message);
//             }
//         } else {
//             const response = await axios.post(`${IP}/resume/resumes/`, studentEntity, { headers });
//             let data = {
//                 resume_id: response.data?.resume_id,
//                 progress: 0,
//             };
//             localStorage.setItem("resume_id", JSON.stringify(data));

//             let newProgress = JSON.parse(localStorage.getItem("resume_id"));
//             if (newProgress) {
//                 newProgress.progress = 25;
//                 localStorage.setItem("resume_id", JSON.stringify(newProgress));
//             }
//             showUpProgress.value = true;
//             console.log(response);
//         }
//     } catch (error) {
//         console.error("Error submitting form:", error);
//     } finally {
//         showUpProgress.value = true;
//     }
// };