import axios from "axios";
import { IP } from "../UI/auth/Authentication";

export const createCompany = async function (companyData, dialogRedactor) {
    const headers = { Authorization: `Bearer ${localStorage.getItem("access_token")}` }; 
    const companyEntity = {
        title: companyData.title,
        location: companyData.location,
        typeCompany: companyData.typeCompany,
        foundationDate: companyData.foundationDate,
        aboutCompany: companyData.aboutCompany,
        photo: companyData.photo,
        contracts: companyData.contracts || []
    };
    const accountID = localStorage.getItem("AccountID");
    if (accountID) {
        companyEntity.company_id = accountID;
        try {
            const postResponse = await axios.post(`${IP}/updateCompany`, companyEntity, { headers });
            console.log('Обновление компании успешно:', postResponse.data);
            dialogRedactor.value = false;
            return true;
        } catch (error) {
            console.error('Ошибка при обновлении компании:', error.response ? error.response.data : error.message);
            return false;
        }
    } else {
        const response = await axios.post(`${IP}/createCompany`, companyEntity, { headers });
        console.log(response.data);
            
        const data = {
            company_id: response.data?.company_id,
            progress: 25
        };
        localStorage.setItem("company_id", JSON.stringify(data));

        let newProgress = JSON.parse(localStorage.getItem("company_id"));
        if (newProgress) {
            newProgress.progress = 25;
            localStorage.setItem("company_id", JSON.stringify(newProgress));
        }
        dialogRedactor.value = false;
        return true;
    }
};

export const createPractice = async function (practiceData) {
    try {
        const accountID = localStorage.getItem("AccountID");
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
        };
        const practiceEntity = {
            directions: practiceData.direction,
            skills_required: practiceData.skills_required,
            about_me: practiceData.about_me,
            tasks: practiceData.tasks,
            company_id: localStorage.getItem('company_id'),
        };
        if (accountID) {
            practiceEntity.practice_id = accountID;
            try {
                console.log('hi');
                console.log(practiceEntity);
                
                const postResponse = await axios.post(`${IP}/createVacancy`, practiceEntity, { headers });
                console.log('Обновление практики успешно:', postResponse.data);
                return true;
            } catch (error) {
                console.error('Ошибка при обновлении практики:', error.response ? error.response.data : error.message);
                return false;
            }
        } else {
            const response = await axios.post(`${IP}/createVacancy`, practiceEntity, { headers });
            console.log('Создание практики успешно:', response.data);
            
            const data = {
                practice_id: response.data?.practice_id,
                progress: 25
            };
            localStorage.setItem("practice_id", JSON.stringify(data));
            return true;
        }
    } catch (error) {
        console.error("Ошибка при отправке формы практики:", error);
        return false;
    }
};

