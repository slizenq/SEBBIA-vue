import axios from "axios";
import { IP } from "../UI/auth/Authentication";

// Профиль
export const sendForm = async function (
    first_name,
    last_name,
    middle_name,
    selectedEducation,
    selectedCity,
    photo,
    photoName,
    born_date,
    showUpProgress,
    dialogRedactor
) {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        };
        const studentEntity = {
            first_name: first_name?.value || "",
            last_name: last_name?.value || "",
            middle_name: middle_name?.value || "",
            phone_number: "37505119",
            education: selectedEducation?.value?.label || "",
            about_me: "",
            born_date: born_date,
            skills: [],
            photo: photo?.value,
            photo_name: photoName?.value || "",
            directions: ["string"],
            location: selectedCity?.value?.label || "",
            portfolio: "http://example.com",
            city: selectedCity?.value?.label || "",
        };

        console.log("Photo data:", photo?.value);
        console.log("Photo Name:", photoName?.value);

        const accountID = localStorage.getItem("AccountID");
        if (accountID) {
            console.log("if");
            studentEntity.student_id = accountID;
            try {
                const postResponse = await axios.post(
                    `${IP}/updateStudent`,
                    studentEntity,
                    { headers }
                );
                console.log("Post запрос успешен:", postResponse.data);
                dialogRedactor.value = false;
                return true;
            } catch (error) {
                console.error(
                    "Ошибка при выполнении PUT запроса:",
                    error.response ? error.response.data : error.message
                );
                return false;
            }
        } else {
            console.log("else");
            const response = await axios.post(
                `${IP}/createStudent`,
                studentEntity,
                { headers }
            );
            const data = {
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
export const sendFormResume = async function (
    about_me,
    location,
    skills,
    portfolio,
    phone_number,
    selectedDirection,
    dialogRedactor
) {
    const headers = {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    };

    let studentId = localStorage.getItem("AccountID");

    const resumeData = {
        resumeId: studentId,
        about_me: about_me.value || "",
        skills: Array.isArray(skills.value)
            ? skills.value
            : skills.value
            ? skills.value.split(",")
            : [],
        direction: selectedDirection.value || "",
        about_projects: "Я проект тайлера блендера",
        portfolio: portfolio.value || "",
    };

    try {
        const postResponse = await axios.post(
            `${IP}/createResume`,
            resumeData,
            { headers }
        );
        console.log("Создание резюме успешно:", postResponse.data);
        dialogRedactor.value = false;
        return true;
    } catch (error) {
        console.error(
            "Ошибка при создании резюме:",
            error.response ? error.response.data : error.message
        );
        return false;
    }
};
