import axios from "axios";
import { IP } from "../UI/auth/Authentication";

export const applicationVacancy = async function () {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        };

        console.log(resumeId, vacancyId);

        const postResponse = await axios.post(
            `${IP}/createApplicationVacancy`,
            {
                resumeId: resumeId,
                vacancyId: vacancyId,
            },
            { headers }
        );

        console.log("Отклик на вакансию успешно:", postResponse.data);
        return true;
    } catch (error) {
        console.error("Ошибка при отклике на вакансию:", error);
        return false;
    }
};

applicationVacancy();
