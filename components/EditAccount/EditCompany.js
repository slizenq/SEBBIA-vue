import axios from "axios";
import { IP } from "../UI/auth/Authentication";

export const createCompany = async function (companyData, dialogRedactor) {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
        };
        if (!companyData.company_name || companyData.company_name.length > 100) {
            throw new Error("Название компании должно быть заполнено и содержать менее 100 символов.");
        }
        const companyEntity = {
            title: companyData.company_name || 'Sebbia',
            location: companyData.city_company?.label || "",
            typeCompany: companyData.type_company?.label || "",
            foundationDate: companyData.company_date || "",
            aboutCompany: companyData.textarea2 || "",
            photo: companyData.photo || "",
            contracts: companyData.skills || []
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
    } catch (error) {
        console.error("Ошибка при отправке формы компании:", error);
        return false;
    }
};
