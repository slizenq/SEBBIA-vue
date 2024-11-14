const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;
// app.use(cors({ origin: ['http://localhost:3000', 'http://92.53.105.243:3000'] }));
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json({ limit: "1000mb" }));
app.use(express.urlencoded({ limit: "1000mb", extended: true }));

const options = {
    "grpc.max_receive_message_length": 4294967296,
    "grpc.max_send_message_length": 4294967296,
};
const PROTO_PATH = [
    "assets/proto/auth/authService.proto",
    "assets/proto/student/student.proto",
    "assets/proto/applicationVacancy/applicationVacancy.proto",
    "assets/proto/company/companyService.proto",
    "assets/proto/resume/resume.proto",
    "assets/proto/vacancy/vacancy.proto",
];
const authProto = protoLoader.loadSync(PROTO_PATH[0], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const studentProto = protoLoader.loadSync(PROTO_PATH[1], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const applicationVacancy = protoLoader.loadSync(PROTO_PATH[2], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const company = protoLoader.loadSync(PROTO_PATH[3], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const resume = protoLoader.loadSync(PROTO_PATH[4], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const vacancy = protoLoader.loadSync(PROTO_PATH[5], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const metadata = new grpc.Metadata();
const authPackage = grpc.loadPackageDefinition(authProto).pb;
const studentPackage = grpc.loadPackageDefinition(studentProto).student;
const applicationVacancyPakage =
    grpc.loadPackageDefinition(applicationVacancy).pb;
const companyPackage = grpc.loadPackageDefinition(company).company;
const resumePackage = grpc.loadPackageDefinition(resume).resume;
const vacancyPackage = grpc.loadPackageDefinition(vacancy).vacancy;
const API_URL = "3627673-qf57717.twc1.net:81";

function createAuthClient() {
    return new authPackage.SSOServerService(
        API_URL,
        grpc.credentials.createInsecure(),
        options
    );
}
function createStudentClient() {
    return new studentPackage.StudentService(
        API_URL,
        grpc.credentials.createInsecure(),
        options
    );
}
function createApplicationVacancyClient() {
    return new applicationVacancyPakage.ApplicationVacancyService(
        API_URL,
        grpc.credentials.createInsecure(),
        options
    );
}
function createCompanyClient() {
    return new companyPackage.CompanyService(
        API_URL,
        grpc.credentials.createInsecure(),
        options
    );
}
function createResumeClient() {
    return new resumePackage.ResumeService(
        API_URL,
        grpc.credentials.createInsecure(),
        options
    );
}
function createVacancyClient() {
    return new vacancyPackage.VacancyService(
        API_URL,
        grpc.credentials.createInsecure(),
        options
    );
}

// Регистрация
async function signUp(accountData) {
    const client = createAuthClient();
    return new Promise((resolve, reject) => {
        client.SignUp(accountData, (err, response) => {
            if (err) {
                console.error("gRPC error:", err);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response);
            }
        });
    });
}
app.post("/signup", async (req, res) => {
    const accountData = {
        email: { email: req.body.email },
        password: { password: req.body.password },
        isCompany: req.body.isCompany,
    };
    try {
        const response = await signUp(accountData);
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Авторизация
async function login(loginData) {
    const client = createAuthClient();
    return new Promise((resolve, reject) => {
        client.Login(loginData, (err, response) => {
            if (err) {
                console.error("gRPC error:", err);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response);
            }
        });
    });
}
app.post("/login", async (req, res) => {
    const loginData = {
        email: { email: req.body.email },
        password: { password: req.body.password },
    };
    console.log(loginData);

    try {
        const response = await login(loginData);
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Получение студента по id
async function getStudentById(studentId) {
    const client = createStudentClient();
    const request = { studentId };
    return new Promise((resolve, reject) => {
        client.GetStudentByID(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.student);
            }
        });
    });
}
app.post("/getStudentById", async (req, res) => {
    const { studentId } = req.body;
    try {
        const student = await getStudentById(studentId);
        res.json(student);
        console.log("Fetched student:", student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Получение студента по token
async function getStudentByToken(studentToken) {
    const client = createStudentClient();
    metadata.set("Authorization", `Bearer ${studentToken}`);

    const request = { studentToken };
    return new Promise((resolve, reject) => {
        client.GetStudentByToken(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.student);
            }
        });
    });
}
app.post("/getStudentByToken", async (req, res) => {
    const studentToken = req.body.checkUUid;
    try {
        let studentTokenLog = await getStudentByToken(studentToken);
        res.json(studentTokenLog);
        console.log(studentTokenLog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Создание профиля студента
async function createStudent(token, studentData) {
    const client = createStudentClient();
    const metadata = new grpc.Metadata();
    metadata.add("Authorization", `Bearer ${token}`);
    const request = {
        student: {
            FirstName: studentData.first_name,
            MiddleName: studentData.middle_name,
            LastName: studentData.last_name,
            BornDate: studentData.born_date,
            Education: studentData.education,
            Location: studentData.location,
            PhotoURL: studentData.photo_url,
            Photo: studentData.photo,
            AccountID: studentData.account_id,
        },
    };
    return new Promise((resolve, reject) => {
        client.CreateStudent(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.student);
            }
        });
    });
}
app.post("/createStudent", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const studentData = req.body;
    if (!token) {
        return res.status(401).json({ error: "Ошибка поулчения токена" });
    }
    try {
        const student = await createStudent(token, studentData);
        res.json(student);
    } catch (err) {
        console.error("Error in /createStudent:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// Редактирование профиля студента
async function updateStudent(token, studentData) {
    const client = createStudentClient();
    const metadata = new grpc.Metadata();
    metadata.add("Authorization", `Bearer ${token}`);
    if (!studentData.student_id) {
        throw new Error("student_id is missing for update request");
    }
    const request = {
        studentId: studentData.student_id,
        student: {
            FirstName: studentData.first_name,
            MiddleName: studentData.middle_name,
            LastName: studentData.last_name,
            BornDate: studentData.born_date,
            Education: studentData.education,
            Location: studentData.location,
            PhotoURL: studentData.photo_url,
            AccountID: studentData.account_id,
        },
    };
    return new Promise((resolve, reject) => {
        client.UpdateStudent(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.student);
            }
        });
    });
}
app.post("/updateStudent", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const studentData = req.body;
    if (!token) {
        return res.status(401).json({ error: "Ошибка поулчения токена" });
    }
    if (!studentData.student_id) {
        return res
            .status(400)
            .json({ error: "student_id is required for update" });
    }
    try {
        if (!studentData.student_id) {
            return res
                .status(400)
                .json({ error: "student_id is required for update" });
        }
        const student = await updateStudent(token, studentData);
        res.json(student);
    } catch (err) {
        console.error("Error in /updateStudent:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// Создание резюме студента
async function createResume(token, resumeData) {
    const client = createResumeClient();
    const metadata = new grpc.Metadata();
    metadata.add("Authorization", `Bearer ${token}`);

    const request = {
        studentId: resumeData.resumeId,
        aboutMe: resumeData.about_me,
        skills: resumeData.skills.map((skill) => ({ skill })),
        direction: resumeData.direction,
        aboutProjects: resumeData.about_projects,
        portfolio: resumeData.portfolio,
    };
    console.log(request);

    return new Promise((resolve, reject) => {
        client.CreateResume(request, metadata, (err, response) => {
            if (err) reject(err);
            else resolve(response.resume);
        });
    });
}
app.post("/createResume", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const resumeData = req.body;
    console.log(resumeData);

    if (!token) {
        return res.status(401).json({ error: "Ошибка поулчения токена" });
    }

    try {
        const resume = await createResume(token, resumeData);
        res.json(resume);
    } catch (err) {
        console.error("Error in /createResume:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// получение резюме студента по его id
async function getResumeByStudentId(token, resumeData) {
    const client = createResumeClient();
    const metadata = new grpc.Metadata();
    metadata.add("Authorization", `Bearer ${token}`);
    const request = {
        studentId: resumeData.studentId,
    };
    console.log("dasdadsadasddada");
    console.log(request);
    return new Promise((resolve, reject) => {
        client.GetResumeByStudentId(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message);
                reject(err);
            } else {
                resolve(response.resume);
            }
        });
    });
}
app.post("/getResumeByStudentId", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const resumeData = req.body;
    if (!token) {
        return res.status(401).json({ error: "Ошибка поулчения токена" });
    }
    try {
        const resume = await getResumeByStudentId(token, resumeData);
        res.json(resume);
    } catch (err) {
        console.error("Error in /getResumeByStudentId:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// получение резюме студента по его id x2
async function getResumeById(resumeData) {
    const client = createResumeClient();
    const request = {
        resumeId: resumeData.resumeId,
    };
    console.log(request);
    return new Promise((resolve, reject) => {
        client.GetResumeById(request, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message);
                reject(err);
            } else {
                resolve(response.resume);
            }
        });
    });
}
app.post("/getResumeById", async (req, res) => {
    const resumeData = req.body;
    try {
        const resume = await getResumeById(resumeData);
        res.json(resume);
    } catch (err) {
        console.error("Error in /getResumeById:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// Создание профиля компании
const toTimestamp = (date) => {
    const seconds = Math.floor(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
};

async function createCompany(token, companyData) {
    const client = createCompanyClient();
    const metadata = new grpc.Metadata();
    metadata.add('Authorization', `Bearer ${token}`);
    
    const foundationDate = toTimestamp(new Date(companyData.foundationDate));  
    const photo = companyData.photo && companyData.photo.data
        ? { data: companyData.photo.data, fileName: companyData.photo.fileName || "default.png" }

        : null;
    const photo =
        companyData.photo && companyData.photo.data
            ? {
                  data: companyData.photo.data,
                  fileName: companyData.photo.fileName || "default.png",
              }
            : null;

    const request = {
        title: companyData.title,
        location: companyData.location,
        typeCompany: companyData.typeCompany,
        foundationDate: foundationDate,
        aboutCompany: companyData.aboutCompany,
        photo: photo,
        contracts: companyData.contracts || [],
    };

    return new Promise((resolve, reject) => {
        client.CreateCompany(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message);
                reject(err);
            } else {
                console.log(
                    "Response from gRPC:",
                    JSON.stringify(response, null, 2)
                );
                resolve(response);
            }
        });
    });
}
app.post("/createCompany", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const companyData = req.body;
    if (!token) {
        return res.status(401).json({ error: "Ошибка поулчения токена" });
    }
    try {
        const company = await createCompany(token, companyData);
        res.json(company);
    } catch (err) {
        console.error("Error in /createCompany:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// Получение компании по token
async function getCompanyByAccessToken(companyToken) {
    const client = createCompanyClient();
    metadata.set("Authorization", `Bearer ${companyToken}`);

    const request = { companyToken };
    return new Promise((resolve, reject) => {
        client.GetCompanyByAccessToken(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err);
                reject(err);
            } else {
                if (response) {
                    console.log("Response from gRPC:", response);
                    resolve(response);
                } else {
                    console.error("gRPC returned no response");
                    reject(new Error("gRPC returned no response"));
                }
            }
        });
    });
}
app.post("/getCompanyByAccessToken", async (req, res) => {
    const companyToken = req.body.checkUUid;
    try {
        let companyTokenLog = await getCompanyByAccessToken(companyToken);
        res.json(companyTokenLog);
        console.log(companyTokenLog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Получение компании по token
async function getCompanyById(companyToken) {
    const client = createCompanyClient();
    const request = companyToken;
    return new Promise((resolve, reject) => {
        client.GetCompanyById(request, (err, response) => {
            if (err) {
                console.error("gRPC error:", err);
                reject(err);
            } else {
                if (response) {
                    console.log("Response from gRPC:", response);
                    resolve(response);
                } else {
                    console.error("gRPC returned no response");
                    reject(new Error("gRPC returned no response"));
                }
            }
        });
    });
}

app.post("/getCompanyById", async (req, res) => {
    const companyToken = req.body;
    console.log(companyToken);

    console.log("Received companyToken:", companyToken);
    try {
        const companyTokenLog = await getCompanyById(companyToken);
        res.json(companyTokenLog);
        console.log("Company data:", companyTokenLog);
    } catch (err) {
        console.error("Error fetching company:", err);
        res.status(500).json({ error: err.message });
    }
});

// Создание вакансии
async function createVacancy(token, vacancyData) {
    const client = createVacancyClient();
    const metadata = new grpc.Metadata();
    metadata.add("Authorization", `Bearer ${token}`);
    const expectedSkills = Array.isArray(vacancyData.skills_required)
        ? vacancyData.skills_required.map((skill) => ({ skill }))
        : [];

    const directions = Array.isArray(vacancyData.directions)
        ? vacancyData.directions.map((direction) => ({ direction }))
        : [];

    const request = {
        vacancy: {
            expected_skills: expectedSkills,
            about_practice: vacancyData.about_me,
            about_projects: vacancyData.about_projects || "s",
            directions: directions,
            company_id: vacancyData.company_id,
        },
    };
    return new Promise((resolve, reject) => {
        client.CreateVacancy(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response);
            }
        });
    });
}
app.post("/createVacancy", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const vacancyData = req.body;
    try {
        const vacancy = await createVacancy(token, vacancyData);
        res.json(vacancy);
    } catch (err) {
        console.error("Error in /createVacancy:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// Получение всех вакансий
async function searchCompany(getVacancy) {
    const client = createCompanyClient();
    const request = {
        // title: getVacancy.title,
        aboutMe: getVacancy.about_me || "",
        skills: getVacancy.skills || "",
        direction: getVacancy.direction || "",
        aboutProjects: getVacancy.about_projects || "",
        portfolio: getVacancy.portfolio || "",
        page_size: getVacancy.page_size || 10,
        page_token: getVacancy.page_token || "",
    };
    return new Promise((resolve, reject) => {
        client.SearchCompany(request, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.company);
            }
        });
    });
}
app.post("/searchCompany", async (req, res) => {
    const getVacancy = req.body;
    try {
        const resume = await searchCompany(getVacancy);
        res.json(resume);
    } catch (err) {
        console.error("Error in /searchCompany:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// Получение вакансий по фильтру
async function getCompaniesByFilters(filterParams) {
    const client = createCompanyClient();
    const request = {
        typeCompany: filterParams.typeCompany,
        location: filterParams.location,
        contracts: filterParams.contracts || [],
        page_size: filterParams.page_size || 100,
        page_token: filterParams.page_token || "",
    };

    return new Promise((resolve, reject) => {
        client.GetCompaniesByFilters(request, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.company);
            }
        });
    });
}
app.post("/getCompaniesByFilters", async (req, res) => {
    const filterParams = req.body;
    try {
        const companies = await getCompaniesByFilters(filterParams);
        res.json(companies);
    } catch (err) {
        console.error("Error in /getCompaniesByFilters:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// Получение профиля вакансии по id
async function getVacancyById(filterParams) {
    const client = createVacancyClient();

    const request = filterParams;

    console.log("Sending request:", request);

    return new Promise((resolve, reject) => {
        client.GetVacancyById(request, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.vacancy);
            }
        });
    });
}
app.post("/getVacancyById", async (req, res) => {
    const filterParams = req.body;

    console.log("Received filterParams:", filterParams);

    try {
        const vacancy = await getVacancyById(filterParams);
        res.json(vacancy);
    } catch (err) {
        console.error("Error in /getVacancyById:", err.message);
        res.status(500).json({ error: err.message });
    }
});
async function getVacanciesByParams(filterParams) {
    const client = createVacancyClient();
    const request = {
        company_id: filterParams.company_id,
    };
    return new Promise((resolve, reject) => {
        client.GetVacanciesByParams(request, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.vacancies);
            }
        });
    });
}
app.post("/getVacanciesByParams", async (req, res) => {
    const filterParams = req.body;
    try {
        const vacancies = await getVacanciesByParams(filterParams);
        res.json(vacancies);
    } catch (err) {
        console.error("Error in /getVacanciesByParams:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// GetResumeByStudentId

// Отклик со стороны студента
async function createApplicationVacancy(token, applicationData) {
    const client = createApplicationVacancyClient();
    const metadata = new grpc.Metadata();
    metadata.add("Authorization", `Bearer ${token}`);

    const request = {
        resumeId: applicationData.resumeId,
        vacancyId: applicationData.vacancyId,
        studentId: applicationData.studentId,
    };

    return new Promise((resolve, reject) => {
        client.CreateApplicationVacancy(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.applicationVacancy);
            }
        });
    });
}
app.post("/createApplicationVacancy", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const applicationData = req.body;

    if (!token) {
        return res.status(401).json({ error: "Ошибка поулчения токена" });
    }

    try {
        const applicationVacancy = await createApplicationVacancy(
            token,
            applicationData
        );
        res.json(applicationVacancy);
    } catch (err) {
        console.error("Error in /createApplicationVacancy:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// Получение всех его откликов со стороны студента
async function getApplicationsVacancyByResumeId(token, applicationData) {
    const client = createApplicationVacancyClient();
    const metadata = new grpc.Metadata();
    metadata.add("Authorization", `Bearer ${token}`);

    const request = {
        resumeId: applicationData.resumeId,
        page_size: applicationData.page_size || 10,
        page_token: applicationData.page_token || "",
    };

    return new Promise((resolve, reject) => {
        client.GetApplicationsVacancyByResumeId(
            request,
            metadata,
            (err, response) => {
                if (err) {
                    console.error("gRPC error:", err.details || err.message);
                    reject(err);
                } else {
                    console.log("Response from gRPC:", response);
                    resolve(response.applicationsVacancy);
                }
            }
        );
    });
}
app.post("/getApplicationsVacancyByResumeId", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const applicationData = req.body;
    if (!token) {
        return res.status(401).json({ error: "Ошибка поулчения токена" });
    }
    try {
        const applicationsVacancy = await getApplicationsVacancyByResumeId(
            token,
            applicationData
        );
        res.json(applicationsVacancy);
    } catch (err) {
        console.error(
            "Error in /getApplicationsVacancyByResumeId:",
            err.message
        );
        res.status(500).json({ error: err.message });
    }
});
// Получение всех его откликов со стороны студента
async function getApplicationsVacancyByVacancyId(token, applicationData) {
    const client = createApplicationVacancyClient();
    const metadata = new grpc.Metadata();
    metadata.add("Authorization", `Bearer ${token}`);

    const request = {
        vacancyId: applicationData.vacancyId,
        page_size: applicationData.page_size || 10,
        page_token: applicationData.page_token || "",
    };
    console.log(request);

    return new Promise((resolve, reject) => {
        client.GetApplicationsVacancyByVacancyId(
            request,
            metadata,
            (err, response) => {
                if (err) {
                    console.error("gRPC error:", err.details || err.message);
                    reject(err);
                } else {
                    console.log("Response from gRPC:", response);
                    resolve(response.applicationsVacancy);
                }
            }
        );
    });
}
app.post("/getApplicationsVacancyByVacancyId", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const applicationData = req.body;
    if (!token) {
        return res.status(401).json({ error: "Ошибка поулчения токена" });
    }
    try {
        const applicationsVacancy = await getApplicationsVacancyByVacancyId(
            token,
            applicationData
        );
        res.json(applicationsVacancy);
    } catch (err) {
        console.error(
            "Error in /getApplicationsVacancyByVacancyId:",
            err.message
        );
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
